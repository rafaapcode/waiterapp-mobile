import Cart from "@/components/cart/Cart";
import TableModal from "@/components/tableModal/TableModal";
import { CartItem } from "@/types/CartItem";
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

  const handleCancelOrder = () => {
    setSelectedTable("");
  };

  return (
    <>
      <SafeAreaView style={styles.container}>
        <Header
          onCancelOrder={handleCancelOrder}
          selectedTable={selectedTable}
        />
        <View style={styles.categoriesContainer}>
          <Categories />
        </View>
        <View style={styles.menuContainer}>
          <Menu />
        </View>
      </SafeAreaView>
      <View style={styles.footer}>
        <SafeAreaView style={styles.footerContainer}>
          {!selectedTable && (
            <Button onPress={handleTableModalVisible}>Novo Pedido</Button>
          )}
          {selectedTable && <Cart cartItems={cartItems} />}
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
