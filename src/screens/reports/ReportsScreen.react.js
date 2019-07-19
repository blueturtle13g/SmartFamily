import React, { Component } from 'react'
import styles from './ReportsScreen.style';
import { View, StatusBar } from 'react-native';
import IranSansText from 'SmartFamily/src/components/iranSansText';
import { NavigationEvents } from 'react-navigation';
import { ACTIVE_STACK, REPORTS_STACK } from 'SmartFamily/src/store/redux/types';
import { updateProp } from 'SmartFamily/src/store/redux/actions';
import { connect } from 'react-redux';
import HeaderRight from 'SmartFamily/src/components/navigation/headerRight';
import Colors from 'SmartFamily/src/constants/Colors';

class ReportsScreen extends Component {

    static navigationOptions = ({ navigation }) => {
        return{
            headerRight: <HeaderRight
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
                <StatusBar backgroundColor={Colors.statusbar}/>
            </View>
        )
    }
}

export default connect(null,{updateProp})(ReportsScreen)