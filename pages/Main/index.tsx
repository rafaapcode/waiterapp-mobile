import Cart from "@/components/cart/Cart";
import TableModal from "@/components/tableModal/TableModal";
import { CartItem } from "@/types/CartItem";
import { ProductsType } from "@/types/Product";
import React, { useCallback, useState } from "react";
import { View } from "react-native";
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
        <View style={styles.categoriesContainer}>
          <Categories />
        </View>
        <View style={styles.menuContainer}>
          <Menu onAddToCart={handleAddToCart} />
        </View>
      </SafeAreaView>
      <View style={styles.footer}>
        <SafeAreaView style={styles.footerContainer}>
          {!selectedTable && (
            <Button onPress={handleTableModalVisible}>Novo Pedido</Button>
          )}
          {selectedTable && (
            <Cart onCofirmOrder={handleResetOrder} cartItems={cartItems} onAdd={handleAddToCart} onDecrement={handleDecrementCartItem}/>
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
