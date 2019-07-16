// @flow
import type { AlertButton } from '@constants/Types';
import type { Node } from 'react';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Modal from 'react-native-modal';
import styles from './AlertPopup.style';
import GradientButton from '@components/buttons/GradientButton.react';
import RalewayText from '@components/share/RalewayText';
import colors from '@constants/Colors';
import string from '@utils/String.utils';

type Props = {
  buttons?: Array<AlertButton>,
  isError: ?boolean,
  isVisible: boolean,
  leftToRightTransition?: boolean,
  // since deleteConfirm, in imageUploader doesn't
  // provide onPress, we have to make it optional
  onPress?: () => void,
  text?: string,
  title?: string,
};

export default ({
  buttons,
  isError,
  isVisible,
  leftToRightTransition = true,
  onPress,
  text,
  title,
}: Props) => {
  return (
    <Modal
      animationIn={leftToRightTransition && 'slideInLeft'}
      animationOut={leftToRightTransition && 'slideOutRight'}
      backdropOpacity={0.6}
      isVisible={isVisible}
    >
      <View style={styles.modalContent} onPress={onPress}>
        <RalewayText style={[styles.title]}>
          {isError ? 'Error' : title}
        </RalewayText>
        {!string.isNullOrEmpty(text) && (
          <View style={styles.textContainer}>
            <RalewayText style={[styles.text]}>{text}</RalewayText>
          </View>
        )}
        <View style={{ justifyContent: 'space-between' }}>
          {_renderButtons(buttons, onPress)}
        </View>
      </View>
    </Modal>
  );
};

const normalButton = (
  title: string,
  style: string,
  onPress: () => void,
): Node => {
  return (
    <View style={styles.buttonContainer} key={title}>
      <GradientButton
        colors={
          style === 'normal'
            ? [colors.red1, colors.red1, colors.red1]
            : [colors.white1, colors.white1, colors.white1]
        }
        onPress={onPress}
        fontWeight="Bold"
        style={style === 'normal' ? 'modalButton' : 'modalButtonBordered'}
        title={title}
      />
    </View>
  );
};

const _renderButtons = (buttons: ?Array<Object>, onPress: ?() => void): any => {
  if (buttons) {
    return buttons.map(button =>
      normalButton(button.title, button.style, button.onPress),
    );
  }
  if (onPress) {
    return normalButton('close', 'normal', onPress);
  }
};
