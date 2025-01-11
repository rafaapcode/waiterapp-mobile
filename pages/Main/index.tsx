import Cart from "@/components/cart/Cart";
import { Empty } from "@/components/Icons/Empty";
import TableModal from "@/components/tableModal/TableModal";
import TextComponent from "@/components/Text";
import { CartItem } from "@/types/CartItem";
import { Category } from "@/types/Categorie";
import { ProductsType } from "@/types/Product";
import axios from "axios";
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
  const [isLoading] = useState<boolean>(false);
  const [products] = useState<ProductsType[]>([]);
  const [categories] = useState<Category[]>([]);

  useEffect(() => {
    axios.get("http://192.168.18.5:3001/categories");
  }, []);

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
              <Categories categories={categories}/>
            </View>
            {products.length > 0 ? (
              <View style={styles.menuContainer}>
                <Menu products={products} onAddToCart={handleAddToCart} />
              </View>
            ) : (
              <View style={styles.centeredContainer}>
                <Empty />
                <TextComponent color="#666">Nenhum produto foi encontrado !</TextComponent>
              </View>
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
