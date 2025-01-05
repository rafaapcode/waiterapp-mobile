import TableModal from "@/components/tableModal/TableModal";
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

  const handleTableModalVisible = useCallback(() => {
    setIsTableModalVisible((prev) => !prev);
  }, []);

  const handleSaveTable = (table: string) => {
    setSelectedTable(table);
  };

  return (
    <>
      <SafeAreaView style={styles.container}>
        <Header />
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
