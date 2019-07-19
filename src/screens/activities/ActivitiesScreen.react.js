import React, { Component } from 'react'
import styles from './ActivitiesScreen.style';
import { View, StatusBar, TouchableOpacity } from 'react-native';
import IranSansText from 'SmartFamily/src/components/iranSansText';
import { NavigationEvents } from 'react-navigation';
import { ACTIVE_STACK, ACTIVITIES_STACK } from 'SmartFamily/src/store/redux/types';
import { updateProp } from 'SmartFamily/src/store/redux/actions';
import { connect } from 'react-redux';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import NutritionBar from 'SmartFamily/src/components/nutritionBar';
import StarBorder from 'SmartFamily/src/components/border/star';
import CrementButton from 'SmartFamily/src/components/crementButton';
import NutritionControl from 'SmartFamily/src/components/nutritionControl';

class ReportsScreen extends Component {

    render() {
        return (
            <View style={styles.mainContainer}>
                <NavigationEvents
                    onWillFocus={() =>this.props.updateProp(ACTIVE_STACK, ACTIVITIES_STACK)}
                />
                <StatusBar backgroundColor={'#1A98A7'}/>
                <StarBorder/>
                <NutritionControl
                    title={'۱ کیلو ۱۰۰۰۰ تومان'}
                    minusActive={false}
                    plusActive={true}
                />
            </View>
        )
    }
}

export default connect(null,{updateProp})(ReportsScreen)