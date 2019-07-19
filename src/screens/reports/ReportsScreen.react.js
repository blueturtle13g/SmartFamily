import React, { Component } from 'react'
import styles from './ReportsScreen.style';
import { View, StatusBar } from 'react-native';
import IranSansText from 'SmartFamily/src/components/iranSansText';
import { NavigationEvents } from 'react-navigation';
import { ACTIVE_STACK, REPORTS_STACK } from 'SmartFamily/src/store/redux/types';
import { updateProp } from 'SmartFamily/src/store/redux/actions';
import { connect } from 'react-redux';
import DrawerButton from 'SmartFamily/src/components/navigation/DrawerButton';

class ReportsScreen extends Component {

    static navigationOptions = ({ navigation }) => {
        return{
            headerRight: <DrawerButton
                title={'گزارش مخارج'}
                onPress={()=>{}}
            />
        }
    };

    render() {
        return (
            <View style={styles.mainContainer}>
                <NavigationEvents
                    onWillFocus={() =>this.props.updateProp(ACTIVE_STACK, REPORTS_STACK)}
                />
                <StatusBar backgroundColor={'#1A98A7'}/>
            </View>
        )
    }
}

export default connect(null,{updateProp})(ReportsScreen)