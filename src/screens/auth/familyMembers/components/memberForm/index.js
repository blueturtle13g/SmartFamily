import React from 'react';
import { 
    View,
    Picker,
    TouchableOpacity,
    Text,
    TextInput,
} from 'react-native';
import styles from './styles';

export default ({
    onUpdateMember,
    onAddMember,
    member:{
        generation,
        gender,
        age,
        name,
    }
})=>{
    return (
        <View style={styles.mainContainer}>
            <View style={styles.inputContainer}>
                <Picker
                    selectedValue={generation}
                    style={styles.picker}
                    onValueChange={v=>onUpdateMember('generation', v)}
                >
                    <Picker.Item label="Adult" value="Adult" />
                    <Picker.Item label="Baby" value="Baby" />
                    <Picker.Item label="Infant" value="Infant" />
                </Picker>
                <Picker
                    selectedValue={gender}
                    style={styles.picker}
                    onValueChange={v=>onUpdateMember('gender', v)}
                >
                    <Picker.Item label="Female" value="Female" />
                    <Picker.Item label="Male" value="Male" />
                </Picker>

                <TextInput
                    value={age}
                    onChangeText={v=>onUpdateMember('age', v)}
                    style={styles.textInput}
                    placeholder="age"
                    keyboardType="number-pad"
                />

                <TextInput
                    value={name}
                    onChangeText={v=>onUpdateMember('name', v)}
                    style={styles.textInput}
                    placeholder="name"
                />
            </View>

            <TouchableOpacity
                onPress={onAddMember}
                style={styles.submitButton}
            >
                <Text>Add</Text>
            </TouchableOpacity>

            <Modal
                animationType="slide"
                visible={visible}
            >
                <MemberSpecifications
                    specifications={member.specifications}
                    onUpdate={this._updateSpecifications}
                    onSubmit={this._onSubmit}
                    specificationsTitle={this._specificationsTitle}
                />
            </Modal>
        </View>
    )
}
