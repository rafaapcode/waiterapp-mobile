import { Category } from "@/types/Categorie";
import { useState } from "react";
import { FlatList, TouchableOpacity, View } from "react-native";
import TextComponent from "../Text";
import { styles } from "./style";

interface CategoriesProps {
  categories: Category[];
  onSelectCategory: (categoryId: string) => Promise<void>;
}

const Categories = ({ categories, onSelectCategory}: CategoriesProps) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const handleSelectCategory = (categoryId: string) => {
    const category = selectedCategory === categoryId ? "" : categoryId;

    onSelectCategory(category);
    setSelectedCategory(category);
  };

  return (
    <>
      <FlatList
        data={categories}
        horizontal
        contentContainerStyle={{ paddingRight: 24 }}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => {
          const isSelected = selectedCategory === item._id;
          return (
            <TouchableOpacity
              onPress={() => handleSelectCategory(item._id)}
              style={styles.category}
              key={item._id}
            >
              <View style={styles.icon}>
                <TextComponent opacity={isSelected ? 1 : 0.5}>
                  {item.icon || ""}
                </TextComponent>
              </View>
              <TextComponent
                size={14}
                weight="600"
                opacity={isSelected ? 1 : 0.5}
              >
                {item.name}
              </TextComponent>
            </TouchableOpacity>
          );
        }}
      />
    </>
  );
};

export default Categories;
