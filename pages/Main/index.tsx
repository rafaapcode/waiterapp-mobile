import Cart from "@/components/cart/Cart";
import { Empty } from "@/components/Icons/Empty";
import TableModal from "@/components/tableModal/TableModal";
import TextComponent from "@/components/Text";
import { CartItem } from "@/types/CartItem";
import { Category } from "@/types/Categorie";
import { ProductsType } from "@/types/Product";
import api from "@/utils/api";
import React, { useCallback, useEffect, useState } from "react";
import { ActivityIndicator, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../../components/button/Button";
import Categories from "../../components/Categories/Categories";
import Header from "../../components/header/Header";
import Menu from "../../components/Menu/Menu";
import { styles } from "./style";

const Main = () => {
  const [isTableModalVisible, setIsTableModalVisible] = useState(false);
  const [selectedTable, setSelectedTable] = useState("");
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [products, setProducts] = useState<ProductsType[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [isLoadingProducts, setIsLoadingProducts] = useState(false);

  useEffect(() => {
    Promise.all([api.get("/category/categories"), api.get("/product")]).then(
      ([categoriesRes, productsRes]) => {
        setCategories(categoriesRes.data);
        setProducts(productsRes.data);
        setIsLoading(false);
      }
    );
  }, []);

  const handleSelectCategory = async (categoryId: string) => {
    const route = !categoryId
      ? "/product"
      : `/product/${categoryId}`;

    setIsLoadingProducts(true);
    const { data } = await api.get(route);
    setProducts(data);
    setIsLoadingProducts(false);
  };

  const handleTableModalVisible = useCallback(() => {
    setIsTableModalVisible((prev) => !prev);
  }, []);

  const handleSaveTable = (table: string) => {
    setSelectedTable(table);
  };

  const handleResetOrder = () => {
    setSelectedTable("");
    setCartItems([]);
  };

  const handleAddToCart = (product: ProductsType) => {
    if (!selectedTable) {
      setIsTableModalVisible(true);
      return;
    }
    setCartItems((prevState) => {
      const itemIndex = prevState.findIndex(
        (value) => product._id === value.product._id
      );
      if (itemIndex < 0) {
        return prevState.concat({ quantity: 1, product });
      }

      const newCartItems = [...prevState];
      const item = newCartItems[itemIndex];
      newCartItems[itemIndex] = {
        ...item,
        quantity: item.quantity + 1,
      };

      return newCartItems;
    });
  };

  const handleDecrementCartItem = (product: ProductsType) => {
    if (!selectedTable) {
      setIsTableModalVisible(true);
      return;
    }
    setCartItems((prevState) => {
      const itemIndex = prevState.findIndex(
        (value) => product._id === value.product._id
      );
      if (itemIndex < 0) {
        return prevState.concat({ quantity: 1, product });
      }
      const newCartItems = [...prevState];
      const item = prevState[itemIndex];

      if (item.quantity === 1) {
        newCartItems.splice(itemIndex, 1);
        return newCartItems;
      }
      newCartItems[itemIndex] = {
        ...item,
        quantity: item.quantity - 1,
      };

      return newCartItems;
    });
  };

  return (
    <>
      <SafeAreaView style={styles.container}>
        <Header
          onCancelOrder={handleResetOrder}
          selectedTable={selectedTable}
        />
        {isLoading ? (
          <View style={styles.centeredContainer}>
            <ActivityIndicator color="#D73035" size="large" />
          </View>
        ) : (
          <>
            <View style={styles.categoriesContainer}>
              <Categories
                onSelectCategory={handleSelectCategory}
                categories={categories}
              />
            </View>

            {isLoadingProducts ? (
              <View style={styles.centeredContainer}>
                <ActivityIndicator color="#D73035" size="large" />
              </View>
            ) : (
              <>
                {products.length > 0 ? (
                  <View style={styles.menuContainer}>
                    <Menu products={products} onAddToCart={handleAddToCart} />
                  </View>
                ) : (
                  <View style={styles.centeredContainer}>
                    <Empty />
                    <TextComponent color="#666">
                      Nenhum produto foi encontrado !
                    </TextComponent>
                  </View>
                )}
              </>
            )}
          </>
        )}
      </SafeAreaView>
      <View style={styles.footer}>
        <SafeAreaView style={styles.footerContainer}>
          {!selectedTable && (
            <Button disabled={isLoading} onPress={handleTableModalVisible}>
              Novo Pedido
            </Button>
          )}
          {selectedTable && (
            <Cart
              selectedTable={selectedTable}
              onCofirmOrder={handleResetOrder}
              cartItems={cartItems}
              onAdd={handleAddToCart}
              onDecrement={handleDecrementCartItem}
            />
          )}
        </SafeAreaView>
      </View>
      <TableModal
        visible={isTableModalVisible}
        onClose={handleTableModalVisible}
        onSave={handleSaveTable}
      />
    </>
  );
};

export default Main;
