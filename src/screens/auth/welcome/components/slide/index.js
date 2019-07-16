import React from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
} from 'react-native';
import RadioButtons from '../radioButtons';
import styles from './styles';

export default ({
    slide:{
        id, 
        title, 
        radioButtons,
        question,
        value,
        placeholder,
        buttonTitle,
    },
    updateValue,
})=> {
    return (
        <View
            key={id}
            style={styles.mainContainer}
        >
            <View style={styles.topContainer}>
                <Text style={styles.title}>{title}</Text>
                <View style={styles.image}></View>
            </View>
            <View style={styles.bottomContainer}>
                <Text style={styles.question}>{question}</Text>
                {
                    radioButtons ?
                        (
                            <RadioButtons
                                options={radioButtons}
                                value={value}
                                onUpdate={v=>updateValue(question, v)}
                            />
                        )
                    :
                        (
                            <TextInput
                                value={value}
                                placeholder={placeholder}
                                onChangeText={v=>updateValue(question, v)}
                                style={styles.input}
                            />
                        )
                }

                <TouchableOpacity
                    style={styles.button}
                    onPress={()=>{}}
                >
                    <Text style={styles.buttonTitle}>{buttonTitle}</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
