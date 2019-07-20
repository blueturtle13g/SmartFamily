import React, { Component } from 'react'
import styles from './ActivitiesScreen.style';
import { View, StatusBar, TouchableOpacity } from 'react-native';
import IranSansText from 'SmartFamily/src/components/iranSansText';
import { NavigationEvents } from 'react-navigation';
import { ACTIVE_STACK, ACTIVITIES_STACK } from 'SmartFamily/src/store/redux/types';
import { updateProp } from 'SmartFamily/src/store/redux/actions';
import { connect } from 'react-redux';
import Colors from 'SmartFamily/src/constants/Colors';
import SectionCard from './components/sectionCard';

const SECTIONS = [
    {
        name: 'waletBoard',
        title: 'کیف پول',
    },
    {
        name: 'waletCar',
        title: 'طرح ترافیک',
    },
    {
        name: 'waletMoney',
        title: 'کیف پول',
    },
    {
        name: 'waletVeg',
        title: 'تره بار',
    },
];

class ActivitiesScreen extends Component {

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.mainContainer}>
                <NavigationEvents
                    onWillFocus={() =>this.props.updateProp(ACTIVE_STACK, ACTIVITIES_STACK)}
                />
                <StatusBar backgroundColor={Colors.statusbar}/>
                <View style={styles.sectionsContainer}>
                    {SECTIONS.map(({title,name})=>{
                        return<SectionCard
                            onPress={()=>navigate('DashboardScreen')}
                            key={name}
                            name={name}
                            title={title}
                        />
                    })}
                </View>
            </View>
        )
    }
}

export default connect(null,{updateProp})(ActivitiesScreen)