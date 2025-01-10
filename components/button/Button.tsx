import React from 'react'
import { ActivityIndicator, TouchableOpacity } from 'react-native'
import TextComponent from '../Text'
import { styles } from './style'

type ButtonProps = {
  children: React.ReactNode;
  onPress: () => void;
  disabled?: boolean;
  loading?: boolean;
}

const Button = ({children, onPress, disabled, loading}: ButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress} disabled={disabled || loading} style={[styles.container, disabled && {backgroundColor: '#999'}]}>
      {!loading && <TextComponent color='#fff' weight='600'>{children}</TextComponent>}
      {
        loading && (
          <ActivityIndicator color={"#fff"}/>
        )
      }
    </TouchableOpacity>
  )
}

export default Button