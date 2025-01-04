import React from 'react'
import { Modal, TouchableOpacity, View } from 'react-native'
import { Close } from '../Icons/Close'
import TextComponent from '../Text'
import { styles } from './style'

const TableModal = () => {
  return (
    <Modal transparent> 
      <View style={styles.overlay}>
        <View style={styles.modalBody}>
          <View style={styles.header}>
            <TextComponent weight='600'>Informe a mesa</TextComponent>
            <TouchableOpacity>
              <Close color='#666'/>
            </TouchableOpacity>
          </View>
          <View style={styles.form}></View>
        </View>
      </View>
    </Modal>
  )
}

export default TableModal