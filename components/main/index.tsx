import React from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../button/Button";
import Categories from "../Categories/Categories";
import Header from "../header/Header";
import Menu from "../Menu/Menu";
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
          <Button>
            Salvar Pedido
          </Button>
        </SafeAreaView>
      </View>
    </>
  );
};

export default Main;
