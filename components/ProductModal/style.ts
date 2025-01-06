import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 200,
    alignItems: 'flex-end',
  },
  closeButton: {
    width: 32,
    height: 32,
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 24
  },
  modalBody: {
    flex: 1,
    backgroundColor: '#FAFAFA',
    paddingTop: 32,
    paddingHorizontal: 24
  },
  header: {
    gap: 8
  },
  ingredientsContainer: {
    marginTop: 32,
    flex: 1
  },
  ingredient: {
    borderWidth: 1,
    borderRadius: 8,
    borderColor: 'rgba(204,204,204,0.3)',
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    gap: 20,
    marginBottom: 4
  },
  footer: {
    minHeight: 110,
    backgroundColor: '#fff',
    paddingHorizontal: 24,
    paddingVertical: 16
  },
  footerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },

});