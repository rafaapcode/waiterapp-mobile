import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  product: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  productImage: {
    width: 120,
    height: 96,
    borderRadius: 8
  },
  productDetails: {
    marginLeft: 16,
    flex: 1,
    gap: 8,
  },
  separator: {
    width: '100%',
    height: 1,
    backgroundColor: 'rgba(204,204,204,0.3)',
    marginVertical: 24,
    marginHorizontal: 0
  },
  addToCartButton: {
    position: 'absolute',
    bottom: 0,
    right: 0
  }
});