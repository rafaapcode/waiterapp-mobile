import React from "react";
import { Modal, TouchableOpacity, View } from "react-native";
import { CheckCircle } from "../Icons/CheckCircle";
import TextComponent from "../Text";
import { styles } from "./style";

type OrderConfirmedModalProps = {
  visible: boolean;
  onOk: () => void;
};

const OrderConfirmed = ({ visible, onOk }: OrderConfirmedModalProps) => {
  return (
    <Modal visible={visible} animationType="fade">
      <View style={styles.container}>
        <CheckCircle />
        <View style={{ gap: 4 }}>
          <TextComponent size={20} weight="600" color="#fff">
            Pedido Confirmado
          </TextComponent>
          <TextComponent color="#fff" opacity={0.9}>
            O pedido já entrou na fila de produção
          </TextComponent>
        </View>
        <TouchableOpacity style={styles.okButton} onPress={onOk}>
          <TextComponent color="#D73035" weight="600">OK</TextComponent>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

export default OrderConfirmed;
