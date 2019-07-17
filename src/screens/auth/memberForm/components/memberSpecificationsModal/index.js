import React from 'react';
import {
  TouchableOpacity,
  Text,
  View,
  Switch,
  Modal,
} from 'react-native';
import styles from './styles';
import CheckBox from 'SmartFamily/src/components/checkBox/CheckBox.react';
import {
    SWITCH_TYPE,
}from 'SmartFamily/src/constants';

export default ({
  specifications,
  onUpdate,
  onSubmit,
  specificationsTitle,
  visible,
  onHide,
})=>{
  const _renderOptions = ()=>{
    return specifications.map(({title, description, type, value})=>{
      if(type === SWITCH_TYPE){
        return <View key={title} style={styles.switchContainer}>
          <Switch
            value={value}
            style={styles.switch}
            onValueChange={v=>onUpdate(title, v)}
          />
          <Text style={styles.switchTitle}>{description}</Text>
        </View>
      }

      return(
        <CheckBox
          key={title}
          title={description}
          checked={value}
          onPress={v=>onUpdate(title, v)}
        />
      )
    })
  };

  return (
    <Modal
      visible={visible}
      animationType="slide"
      onRequestClose={onHide}
    >
      <View style={styles.mainContainer}>
        <View style={styles.topContainer}>
          <Text style={styles.title}>{specificationsTitle}</Text>
        </View>

        <View style={styles.bottomContainer}>
          <View style={styles.optionsContainer}>
            {_renderOptions()}
            <TouchableOpacity
              style={styles.submitButton}
              onPress={onSubmit}
              activeOpacity={.8}
            >
              <Text style={styles.buttonTitle}>Submit</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}
