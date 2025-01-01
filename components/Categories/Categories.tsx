import { categories } from "@/constants/categories";
import { FlatList, View } from "react-native";
import TextComponent from "../Text";
import { styles } from "./style";

const Categories = () => {
  return (
    <>
      <FlatList
        data={categories}
        horizontal
        contentContainerStyle={{paddingRight: 24}}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <View style={styles.category} key={item._id}>
            <View style={styles.icon}>
              <TextComponent>{item.icon}</TextComponent>
            </View>
            <TextComponent size={14} weight="600">
              {item.name}
            </TextComponent>
          </View>
        )}
      />
    </>
  );
};

export default Categories;
