import { ProductsType } from "@/types/Product";
import { formatCurrency } from "@/utils/formatCurrency";
import { useState } from "react";
import { FlatList, Image, TouchableOpacity, View } from "react-native";
import { PlusCircle } from "../Icons/PlusCircle";
import ProductModal from "../ProductModal/ProductModal";
import TextComponent from "../Text";
import { styles } from "./style";

type MenuProps = {
  onAddToCart: (product: ProductsType) => void;
  products: ProductsType[];
};

const Menu = ({onAddToCart, products}: MenuProps) => {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [selectedProduct, setSelectedProduct] = useState<ProductsType | null>(null);

  const handleOpenModal = (product: ProductsType) => {
    setIsModalVisible(prev => !prev);
    setSelectedProduct(product);
  };

  return (
    <>
      <FlatList
        data={products}
        style={{ marginTop: 32 }}
        contentContainerStyle={{ paddingHorizontal: 24 }}
        keyExtractor={(item) => item._id}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.product}
            onPress={() => handleOpenModal(item)}
          >
            <Image
              style={styles.productImage}
              source={{
                uri: `https://images.unsplash.com/photo-1674555650084-ae4c3dcfe79c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
              }}
            />
            <View style={styles.productDetails}>
              <TextComponent weight="600">{item.name}</TextComponent>
              <TextComponent size={14} color="#666">
                {item.description}
              </TextComponent>
              <TextComponent size={14} weight="600">
                {formatCurrency(item.price)}
              </TextComponent>
            </View>
            <TouchableOpacity style={styles.addToCartButton} onPress={() => onAddToCart(item)}>
              <PlusCircle />
            </TouchableOpacity>
          </TouchableOpacity>
        )}
      />
      <ProductModal
        onAddToCart={onAddToCart}
        visible={isModalVisible}
        onClose={() => setIsModalVisible((prev) => !prev)}
        product={selectedProduct}
      />
    </>
  );
};

export default Menu;
