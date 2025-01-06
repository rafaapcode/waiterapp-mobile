import { ProductsType } from "@/types/Product";
import { formatCurrency } from "@/utils/formatCurrency";
import React from "react";
import {
  FlatList,
  ImageBackground,
  Modal,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../button/Button";
import { Close } from "../Icons/Close";
import TextComponent from "../Text";
import { styles } from "./style";

type ProductModalProps = {
  visible: boolean;
  onClose: () => void;
  product: ProductsType | null;
};

const ProductModal = ({ visible, onClose, product }: ProductModalProps) => {
  if (!product) {
    return null;
  }

  return (
    <Modal
      visible={visible}
      animationType="slide"
      presentationStyle="pageSheet"
      onRequestClose={onClose}
    >
      <ImageBackground
        source={{
          uri: `https://images.unsplash.com/photo-1674555650084-ae4c3dcfe79c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
        }}
        style={styles.image}
      >
        <TouchableOpacity style={styles.closeButton} onPress={onClose}>
          <Close />
        </TouchableOpacity>
      </ImageBackground>
      <View style={styles.modalBody}>
        <View style={styles.header}>
          <TextComponent weight="600" size={24}>
            {product.name}
          </TextComponent>
          <TextComponent color="#666" size={14}>
            {product.description}
          </TextComponent>
        </View>
        <View style={styles.ingredientsContainer}>
          <TextComponent weight="600" color="#666">
            Ingredientes
          </TextComponent>
          <FlatList
            data={product.ingredients}
            style={{ marginTop: 16 }}
            keyExtractor={(ingredient) => ingredient._id}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <View style={styles.ingredient}>
                <TextComponent>{item.icon}</TextComponent>
                <TextComponent size={14} color="#666">
                  {item.name}
                </TextComponent>
              </View>
            )}
          />
        </View>
      </View>
      <View style={styles.footer}>
        <SafeAreaView style={styles.footerContainer}>
          <View>
            <TextComponent color="#666">Preço</TextComponent>
            <TextComponent size={20} weight="600">
              {formatCurrency(product.price)}
            </TextComponent>
          </View>
          <Button onPress={() => {}}>Adicionar ao pedido</Button>
        </SafeAreaView>
      </View>
    </Modal>
  );
};

export default ProductModal;
