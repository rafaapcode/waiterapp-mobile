import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  Modal,
  Platform,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Button from "../button/Button";
import { Close } from "../Icons/Close";
import TextComponent from "../Text";
import { styles } from "./style";

type TableModalProps = {
  visible: boolean;
  onClose: () => void;
  onSave: (table: string) => void;
};

const TableModal = ({ visible, onClose, onSave }: TableModalProps) => {
  const [table, setTable] = useState("");

  const handleSave = () => {
    onSave(table);
    setTable('');
    onClose();
  };

  const handleClose = () => {
    setTable("");
    onClose();
  };

  return (
    <Modal transparent visible={visible} animationType="fade">
      <KeyboardAvoidingView
        style={styles.overlay}
        behavior={Platform.OS == "android" ? "height" : "padding"}
      >
        <View style={styles.modalBody}>
          <View style={styles.header}>
            <TextComponent weight="600">Informe a mesa</TextComponent>
            <TouchableOpacity onPress={handleClose}>
              <Close color="#666" />
            </TouchableOpacity>
          </View>
          <View style={styles.form}>
            <TextInput
              onChangeText={setTable}
              keyboardType="number-pad"
              placeholder="Número da mesa"
              placeholderTextColor="#666"
              style={styles.input}
            />
            <Button disabled={table.length === 0} onPress={handleSave}>
              Salvar
            </Button>
          </View>
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
};

export default TableModal;
