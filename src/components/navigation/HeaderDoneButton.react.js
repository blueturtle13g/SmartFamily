import React from 'react';
import HeaderButton from '@components/navigation/HeaderButton.react';
import { ActivityIndicator } from 'react-native';
import Colors from '@constants/Colors';
import RalewayText from '@components/share/RalewayText';
import styles from './HeaderDoneButton.style';

export default ({ onPress, saving }) => {
  return (
    <HeaderButton disabled={saving} onPress={onPress}>
      {saving ? (
        <ActivityIndicator
          size="small"
          color={Colors.grey1}
          style={styles.indicator}
        />
      ) : (
        <RalewayText fontWeight="Bold" style={styles.doneText}>
          Done
        </RalewayText>
      )}
    </HeaderButton>
  );
};
