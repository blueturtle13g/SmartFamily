import React from 'react';
import { Text } from 'react-native';

export default (props) => {
  const customStyle = Array.isArray(props.style)
    ? props.style.map(style => {
        if (style) {
          return style;
        }
      })
    : props.style;

    let fontFamily = 'iranSans';
    switch(props.fontWeight){
      case 'Bold':
        fontFamily = 'iranSansBold';
        break;
      case 'Light':
        fontFamily = 'iranSansLight';
        break;
      case 'Medium':
        fontFamily = 'iranSansMedium';
        break;
      case 'UltraLight':
        fontFamily = 'iranSansUltraLight';
    }

  return (
    <Text
      {...props}
      style={[
        {fontFamily},
        customStyle,
      ]}
    >
      {props.children}
    </Text>
  );
};