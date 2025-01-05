import React from 'react';
import { Modal } from 'react-native';
import TextComponent from '../Text';

type ProductModalProps = {
  visible: boolean;
  onClose: () => void;
}

const ProductModal = ({visible, onClose}: ProductModalProps) => {
  return (
    <Modal visible={visible} animationType='slide' presentationStyle='pageSheet' onRequestClose={onClose}>
      <TextComponent>Teste</TextComponent>
    </Modal>
  )
}

export default ProductModal