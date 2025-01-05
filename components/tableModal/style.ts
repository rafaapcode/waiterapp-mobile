import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
    textAlign: 'center',
    paddingHorizontal: 24
  },
  modalBody: {
    backgroundColor: '#FAFAFA',
    borderRadius: 8,
    padding: 24,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  form: {
    marginTop: 32,
  },
  input: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'rgba(204,204,204,0.5)',
    borderRadius: 8,
    padding: 16,
    marginBottom: 24
  }
});