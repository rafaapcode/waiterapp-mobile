import React from 'react'
import { TouchableOpacity } from 'react-native'
import TextComponent from '../Text'
import { styles } from './style'

type ButtonProps = {
  children: React.ReactNode;
  onPress: () => void;
  disabled?: boolean;
}

const Button = ({children, onPress, disabled}: ButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress} disabled={disabled} style={[styles.container, disabled && {backgroundColor: '#999'}]}>
      <TextComponent color='#fff' weight='600'>{children}</TextComponent>
    </TouchableOpacity>
  )
}

export default Button