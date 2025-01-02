import React from 'react'
import { TouchableOpacity } from 'react-native'
import TextComponent from '../Text'
import { styles } from './style'

type ButtonProps = {
  children: React.ReactNode;
}

const Button = ({children}: ButtonProps) => {
  return (
    <TouchableOpacity style={styles.container}>
      <TextComponent color='#fff' weight='600'>{children}</TextComponent>
    </TouchableOpacity>
  )
}

export default Button