import React, { Component } from 'react'
import styles from './DashboardScreen.style';
import { View, ScrollView, TouchableOpacity, Image } from 'react-native';
import IranSansText from 'SmartFamily/src/components/iranSansText';
import { NavigationEvents } from 'react-navigation';
import { ACTIVE_STACK, ACTIVITIES_STACK } from 'SmartFamily/src/store/redux/types';
import { updateProp } from 'SmartFamily/src/store/redux/actions';
import { connect } from 'react-redux';
import CategoryCard from '../components/categoryCard';
import HeaderRight from 'SmartFamily/src/components/navigation/headerRight';
import HeaderLeft from 'SmartFamily/src/components/navigation/headerLeft';
import FloatButton from '../components/floatButton';
import DashboardChart from '../components/dashboardChart';
import ChartModal from '../components/chartModal';

const CATEGORIES = [
    {
        title: 'پروتئین',
        description: 'کالا های این گروه:‌۷ کالا',
        name: 'protein',
    },
    {
        title: 'لبنیات',
        description: 'کالا های این گروه:‌۷ کالا',
        name: 'dairy',
        discount: '30%',
    },
    {
        title: 'میوه',
        description: 'کالا های این گروه:‌۷ کالا',
        name: 'fruits',
    },
    {
        title: 'سبزیجات',
        description: 'کالا های این گروه:‌۷ کالا',
        name: 'veg',
    },
    {
        title: 'خوار و بار',
        description: 'کالا های این گروه:‌۷ کالا',
        name: 'grocery',
        discount: '16%',
    },
    {
        title: 'آجیل و خشکبار',
        description: 'کالا های این گروه:‌۷ کالا',
        name: 'nuts',
    },
    {
        title: 'غذاهای نیمه آماده',
        description: 'کالا های این گروه:‌۷ کالا',
        name: 'junkFoods',
    },
];

class DashboardScreen extends Component {
    state={
        modalVisible: false,
    };

    static navigationOptions = ({navigation})=>{
        return{
            headerRight: <HeaderRight
                title={'میوه و تره بار'}
                onPress={()=>navigation.goBack()}
                isBack
            />,
            headerLeft:(
                <HeaderLeft onPress={()=>{}}>
                    <Image
                        source={require('SmartFamily/assets/images/basket.png')}
                        style={styles.headerImage}
                    />
                </HeaderLeft>
            )
        }
    };

    _renderCategories = ()=> CATEGORIES.map(category=>
        <CategoryCard
            onPress={()=>this.props.navigation.navigate('CategoryScreen', {
                category: category.name
            })}
            key={category.name}
            category={category}
        />
    )
    

    render() {
        const { modalVisible } = this.state;
        const { navigation:{navigate} } = this.props;
        return (
            <View>
                <NavigationEvents
                    onWillFocus={() =>this.props.updateProp(ACTIVE_STACK, ACTIVITIES_STACK)}
                />
                <ScrollView style={styles.mainContainer}>
                    <DashboardChart/>
                    <View style={styles.categoriesContainer}>
                        {this._renderCategories()}
                    </View>
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

export default connect(null,{updateProp})(DashboardScreen)