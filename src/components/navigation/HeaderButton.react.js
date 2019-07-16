import React from 'react';
import { TouchableOpacity } from 'react-native';
import styles from './HeaderButton.style';

export default ({ disabled, onPress, children }) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={styles.mainContainer}
    >
      {children}
    </TouchableOpacity>
  );
};
