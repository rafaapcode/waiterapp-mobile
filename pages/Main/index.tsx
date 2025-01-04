import TableModal from "@/components/tableModal/TableModal";
import React from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../../components/button/Button";
import Categories from "../../components/Categories/Categories";
import Header from "../../components/header/Header";
import Menu from "../../components/Menu/Menu";
import { styles } from "./style";

const Main = () => {
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
          <Button onPress={() => {}}>
            Salvar Pedido
          </Button>
        </SafeAreaView>
      </View>
      <TableModal />
    </>
  );
};

export default Main;
