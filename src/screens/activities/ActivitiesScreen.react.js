import React, { Component } from 'react'
import styles from './ActivitiesScreen.style';
import { View, StatusBar } from 'react-native';
import IranSansText from 'SmartFamily/src/components/iranSansText';
import { NavigationEvents } from 'react-navigation';
import { ACTIVE_STACK, ACTIVITIES_STACK } from 'SmartFamily/src/store/redux/types';
import { updateProp } from 'SmartFamily/src/store/redux/actions';
import { connect } from 'react-redux';

class ReportsScreen extends Component {

    render() {
        return (
            <View style={styles.mainContainer}>
                <NavigationEvents
                    onWillFocus={() =>this.props.updateProp(ACTIVE_STACK, ACTIVITIES_STACK)}
                />
                <StatusBar backgroundColor={'#1A98A7'}/>
            </View>
        )
    }
}

export default connect(null,{updateProp})(ReportsScreen)