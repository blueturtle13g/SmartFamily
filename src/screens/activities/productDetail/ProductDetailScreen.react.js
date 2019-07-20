import React, { Component } from 'react'
import styles from './ProductDetailScreen.style';
import { View, ScrollView, StatusBar, Image } from 'react-native';
import IranSansText from 'SmartFamily/src/components/iranSansText';
import { NavigationEvents } from 'react-navigation';
import { ACTIVE_STACK, ACTIVITIES_STACK } from 'SmartFamily/src/store/redux/types';
import { updateProp } from 'SmartFamily/src/store/redux/actions';
import { connect } from 'react-redux';
import Colors from 'SmartFamily/src/constants/Colors';
import SectionCard from '../components/sectionCard';
import FloatButton from '../components/floatButton';
import ChartModal from '../components/chartModal';

class ProductDetailScreen extends Component {
    state={
        modalVisible: false,
    }
    
    render() {
        const { navigate } = this.props.navigation;
        const { modalVisible } = this.state;
        return (
            <View style={{flex: 1}}>
                <ScrollView style={styles.mainContainer}>
                    <NavigationEvents
                        onWillFocus={() =>this.props.updateProp(ACTIVE_STACK, ACTIVITIES_STACK)}
                    />
                    <StatusBar backgroundColor={Colors.statusbar}/>
                    <Image
                        style={styles.fakeImage}
                        source={require('SmartFamily/assets/images/productDetail.png')}
                    />
                </ScrollView>
                <FloatButton
                    onPress={()=>this.setState({modalVisible: true})}
                />
                <ChartModal
                    isVisible={modalVisible}
                    onHide={()=>this.setState({modalVisible: false})}
                />
            </View>
        )
    }
}

export default connect(null,{updateProp})(ProductDetailScreen)