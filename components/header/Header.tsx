import React from "react";
import { View } from "react-native";
import TextComponent from "../Text";
import { styles } from "./style";

const Header = () => {
  return (
    <View style={styles.container}>
      <TextComponent size={14} opacity={0.9}>
        Bem vindo(a) ao
      </TextComponent>
      <TextComponent weight="700" size={24}>
        WAITER<TextComponent size={24}>APP</TextComponent>
      </TextComponent>
    </View>
  );
};

export default Header;
