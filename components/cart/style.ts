import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  item: {
    paddingVertical: 8,
    paddingHorizontal: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  productContainer: {
    flexDirection: 'row',
  },
  actions: {
    flexDirection: 'row',
  },
  image: {
    width: 48,
    height: 40,
    borderRadius: 6
  },
  quantityContainer: {
    minWidth: 20,
    marginLeft: 12
  },
  productDetails: {
    gap: 4
  },
  summary: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  totalContainer: {
    width: '45%',
  }
});