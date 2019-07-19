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
    }

    render() {
        const { navigate } = this.props;
        return (
            <View>
                <NavigationEvents
                    onWillFocus={() =>this.props.updateProp(ACTIVE_STACK, ACTIVITIES_STACK)}
                />
                <ScrollView style={styles.mainContainer}>
                    <View style={styles.categoriesContainer}>
                        {CATEGORIES.map(category=>{
                            return(
                                <CategoryCard
                                    key={category.name}
                                    category={category}
                                />
                            )
                        })}
                    </View>
                </ScrollView>
                <FloatButton onPress={()=>{}}/>
            </View>
        )
    }
}

export default connect(null,{updateProp})(DashboardScreen)