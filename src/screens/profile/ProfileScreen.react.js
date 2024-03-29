import React, { Component } from 'react'
import styles from './ProfileScreen.style';
import { View, ScrollView, StatusBar } from 'react-native';
import IranSansText from 'SmartFamily/src/components/iranSansText';
import HeaderRight from 'SmartFamily/src/components/navigation/headerRight';
import { NavigationEvents } from 'react-navigation';
import { ACTIVE_STACK, PROFILE_STACK } from 'SmartFamily/src/store/redux/types';
import { updateProp } from 'SmartFamily/src/store/redux/actions';
import { connect } from 'react-redux';
import EmptyFamily from './components/emptyFamily';
import SettingModal from './components/settingModal';
import MemberCard from './components/memberCard';
import AddCard from './components/addCard';
import Colors from 'SmartFamily/src/constants/Colors';

const MEMBERS = [
    {
        name: 'سارا',
        description: 'خانم ۱۵ ساله',
        generation: 'girl',
    },
    {
        name: 'بیتا',
        description: 'خانم ۳۰ ساله',
        generation: 'woman',
    },
    {
        name: 'بابک',
        description: 'اقای ۳۵ ساله',
        generation: 'man',
    },
    {
        name: 'سعید',
        description: 'اقای ۱۲ ساله',
        generation: 'boy',
    },
];

class ProfileScreen extends Component {
    state={
        modalVisible: this.props.navigation.state.params
        && this.props.navigation.state.params.modalVisible,
        membersAdded: false,
    };

    static navigationOptions = ({ navigation }) => {
        return{
            headerRight: <HeaderRight
                title={'خوش آمدید'}
                onPress={()=>{}}
            />
        }
    };

    render() {
        const { modalVisible, membersAdded } = this.state;
        return (
            <ScrollView style={styles.mainContainer}>
                <NavigationEvents
                    onWillFocus={() =>this.props.updateProp(ACTIVE_STACK, PROFILE_STACK)}
                />
                <StatusBar backgroundColor={Colors.statusbar}/>
                
                {membersAdded ?
                    (
                        <View style={styles.membersContainer}>
                            <AddCard
                                onPress={()=>this.setState({modalVisible: true})}
                            />
                            {MEMBERS.map(member=>{
                                return(
                                    <MemberCard
                                        key={member.name}
                                        member={member}
                                    />
                                )
                            })}
                        </View>
                    )
                    :
                    (
                        <EmptyFamily
                            onPress={()=>this.setState({modalVisible: true})}
                        />
                    )
                }

                <SettingModal
                    isVisible={modalVisible}
                    onHide={()=>this.setState({modalVisible: false})}
                    onDone={()=>this.setState({
                        membersAdded: true,
                        modalVisible: false
                    })}
                />
            </ScrollView>
        )
    }
}

export default connect(null,{updateProp})(ProfileScreen)