import React from "react";
import { TouchableOpacity, View } from "react-native";
import TextComponent from "../Text";
import { styles } from "./style";

type HeaderProps = {
  selectedTable: string;
  onCancelOrder: () => void;
};

const Header = ({ selectedTable, onCancelOrder }: HeaderProps) => {
  return (
    <View style={styles.container}>
      {!selectedTable && (
        <>
          <TextComponent size={14} opacity={0.9}>
            Bem vindo(a) ao
          </TextComponent>
          <TextComponent weight="700" size={24}>
            WAITER<TextComponent size={24}>APP</TextComponent>
          </TextComponent>
        </>
      )}
      {selectedTable && (
        <View style={styles.content}>
          <View style={styles.orderHeader}>
            <TextComponent size={24} weight="600">
              Pedido
            </TextComponent>
            <TouchableOpacity onPress={onCancelOrder}>
              <TextComponent color="#D73035" weight="600" size={14}>
                cancelar pedido
              </TextComponent>
            </TouchableOpacity>
          </View>
          <View style={styles.table}>
            <TextComponent color="#666">Mesa {selectedTable}</TextComponent>
          </View>
        </View>
      )}
    </View>
  );
};

export default Header;
