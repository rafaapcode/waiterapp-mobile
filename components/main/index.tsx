import React from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../header/Header";
import { styles } from "./style";

const Main = () => {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <Header />
        <View style={styles.categoriesContainer}></View>
        <View style={styles.menuContainer}></View>
      </SafeAreaView>
      <View style={styles.footer}>
        <SafeAreaView style={styles.footerContainer}>

        </SafeAreaView>
      </View>
    </>
  );
};

export default Main;
