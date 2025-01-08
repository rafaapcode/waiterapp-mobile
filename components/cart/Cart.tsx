import { CartItem } from "@/types/CartItem";
import { formatCurrency } from "@/utils/formatCurrency";
import React from "react";
import { FlatList, Image, TouchableOpacity, View } from "react-native";
import Button from "../button/Button";
import { MinusCircle } from "../Icons/MinusCircle";
import { PlusCircle } from "../Icons/PlusCircle";
import TextComponent from "../Text";
import { styles } from "./style";

interface CartProps {
  cartItems: CartItem[];
}

const Cart = ({ cartItems }: CartProps) => {
  return (
    <>
      {cartItems.length > 0 && (
        <FlatList
          data={cartItems}
          keyExtractor={(item) => item.product._id}
          showsVerticalScrollIndicator={false}
          style={{ marginBottom: 20, maxHeight: 130 }}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <View style={styles.productContainer}>
                <Image
                  style={styles.image}
                  source={{
                    uri: `https://images.unsplash.com/photo-1674555650084-ae4c3dcfe79c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
                  }}
                />
                <View style={styles.quantityContainer}>
                  <TextComponent size={14} color="#666">
                    {item.quantity}x
                  </TextComponent>
                </View>
                <View style={styles.productDetails}>
                  <TextComponent size={14} weight="600">
                    {item.product.name}
                  </TextComponent>
                  <TextComponent size={14} color="#666">
                    {formatCurrency(item.product.price)}
                  </TextComponent>
                </View>
              </View>
              <View style={styles.actions}>
                <TouchableOpacity style={{ marginRight: 14 }}>
                  <PlusCircle />
                </TouchableOpacity>
                <TouchableOpacity>
                  <MinusCircle />
                </TouchableOpacity>
              </View>
            </View>
          )}
        />
      )}
      <View style={styles.summary}>
        <View style={styles.totalContainer}>
          {cartItems.length > 0 ? (
            <>
              <TextComponent color="#666">Total</TextComponent>
              <TextComponent size={20} weight="600">
                {formatCurrency(120)}
              </TextComponent>
            </>
          ) : (
            <TextComponent color="#999">Seu carrinho está vazio</TextComponent>
          )}
        </View>
        <Button onPress={() => {}} disabled={cartItems.length === 0}>Confirmar pedido</Button>
      </View>
    </>
  );
};

export default Cart;
