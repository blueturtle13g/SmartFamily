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
import ChartModal from '../components/chartModal';
import FloatButton from '../components/floatButton';

class CategoryScreen extends Component {
    state={
        modalVisible: false,
    }

    render() {
        const { modalVisible } = this.state;
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
                    onPress={()=>navigate('ProductDetailScreen')}
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

export default connect(null,{updateProp})(CategoryScreen)