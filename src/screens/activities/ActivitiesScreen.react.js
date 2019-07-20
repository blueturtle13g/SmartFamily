import React, { Component } from 'react'
import styles from './ActivitiesScreen.style';
import { View, StatusBar, TouchableOpacity } from 'react-native';
import IranSansText from 'SmartFamily/src/components/iranSansText';
import { NavigationEvents } from 'react-navigation';
import { ACTIVE_STACK, ACTIVITIES_STACK } from 'SmartFamily/src/store/redux/types';
import { updateProp } from 'SmartFamily/src/store/redux/actions';
import { connect } from 'react-redux';
import Colors from 'SmartFamily/src/constants/Colors';

class ActivitiesScreen extends Component {

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.mainContainer}>
                <NavigationEvents
                    onWillFocus={() =>this.props.updateProp(ACTIVE_STACK, ACTIVITIES_STACK)}
                />
                <StatusBar backgroundColor={Colors.statusbar}/>
                <TouchableOpacity onPress={()=>navigate('DashboardScreen')}>
                    <IranSansText>
                        dashboard
                    </IranSansText>
                </TouchableOpacity>
            </View>
        )
    }
}

export default connect(null,{updateProp})(ActivitiesScreen)