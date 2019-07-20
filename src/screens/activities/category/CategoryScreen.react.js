import React, { Component } from 'react'
import styles from './CategoryScreen.style';
import { View, StatusBar, TouchableOpacity } from 'react-native';
import IranSansText from 'SmartFamily/src/components/iranSansText';
import { NavigationEvents } from 'react-navigation';
import { ACTIVE_STACK, ACTIVITIES_STACK } from 'SmartFamily/src/store/redux/types';
import { updateProp } from 'SmartFamily/src/store/redux/actions';
import { connect } from 'react-redux';
import Colors from 'SmartFamily/src/constants/Colors';
import CategoryHeader from '../components/categoryHeader';
import ProductCard from '../components/productCard';

class CategoryScreen extends Component {

    render() {
        const { navigate, state:{params={}} } = this.props.navigation;
        return (
            <View style={styles.mainContainer}>
                <NavigationEvents
                    onWil
                    lFocus={() =>this.props.updateProp(ACTIVE_STACK, ACTIVITIES_STACK)}
                />
                <StatusBar backgroundColor={Colors.statusbar}/>

                <CategoryHeader
                    layout={'grid'}
                    onToggle={()=>{}}
                    onlyDiscounts={false}
                />
                <ProductCard
                    onPress={()=>{}}
                    product={
                        {
                            title: 'تخم مرغ',
                            pack: 'بسته ۱۵ عددی',
                            description: 'کالاهای این گروه :‌ ۷ کالا',
                            eachText: 'هر بسته',
                            price: '۱۵،۰۰۰ تومان',
                        }
                    }
                />
            </View>
        )
    }
}

export default connect(null,{updateProp})(CategoryScreen)