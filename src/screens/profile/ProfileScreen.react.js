import React, { Component } from 'react'
import styles from './ProfileScreen.style';
import { View, StatusBar } from 'react-native';
import IranSansText from 'SmartFamily/src/components/iranSansText';
import DrawerButton from 'SmartFamily/src/components/navigation/DrawerButton';
import { NavigationEvents } from 'react-navigation';
import { ACTIVE_STACK, PROFILE_STACK } from 'SmartFamily/src/store/redux/types';
import { updateProp } from 'SmartFamily/src/store/redux/actions';
import { connect } from 'react-redux';
import AddCard from './components/addCard';
import SettingModal from './components/settingModal';

class ProfileScreen extends Component {
    state={
        modalVisible: false,
    };

    static navigationOptions = ({ navigation }) => {
        return{
            headerRight: <DrawerButton
                title={'خوش آمدید'}
                onPress={()=>{}}
            />
        }
    };

    render() {
        const { modalVisible } = this.state;
        return (
            <View style={styles.mainContainer}>
                <NavigationEvents
                    onWillFocus={() =>this.props.updateProp(ACTIVE_STACK, PROFILE_STACK)}
                />
                <StatusBar backgroundColor={'#1A98A7'}/>
                <AddCard onPress={()=>this.setState({modalVisible: true})}/>
                <SettingModal
                    isVisible={modalVisible}
                    onHide={()=>this.setState({modalVisible: false})}
                />
            </View>
        )
    }
}

export default connect(null,{updateProp})(ProfileScreen)