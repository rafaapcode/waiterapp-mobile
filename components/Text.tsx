import React from 'react';
import { StyleSheet, Text } from 'react-native';

interface TextProps {
  weight?: '400' | '600' | '700';
  color?: string;
  size?: number;
  opacity?: number;
  children: React.ReactNode;
}

const TextComponent = ({children, color, opacity, size, weight}: TextProps) => {
  return (
    <Text style={[defaultStyles.text, color ? {color} : null, opacity ? {opacity} : null, size ? {fontSize: size} : null, weight ? {fontFamily: `GeneralSans-${weight}`} :null]}>{children}</Text>
  )
}

const defaultStyles = StyleSheet.create({
  text: {
    fontFamily: 'GeneralSans-400',
    color: '#333',
    fontSize: 16,
    opacity: 1,
  }
});

export default TextComponent