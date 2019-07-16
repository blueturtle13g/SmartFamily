import React, { Component } from 'react';
import {
    Animated,
    View,
    ScrollView,
} from 'react-native';
import styles from './WelcomeScreen.style';
import {
    DEVICE_WIDTH,
} from '../../../constants/Layout';
import Slide from './components/slide';

const FIXED_BAR_WIDTH = 50
const BAR_SPACE = 5

export default class WelcomeScreen extends Component {
    state={
        slides: [
            {
                id: 0,
                title: 'welcome to smart family app',
                question: 'how many times do you go to restaurant per month?',
                buttonTitle: 'submit',
                value: '',
            },
            {
                id: 1,
                question: 'how many times do you go to pik nic per month?',
                buttonTitle: 'submit',
                value: '',
            },
            {
                id: 2,
                question: 'how is the regime of your family?',
                radioButtons:['normal', 'veg', 'regimist'],
                buttonTitle: 'send',
                value: 'normal',
            },
        ]
    };

    _updateValue = (q, value)=>{
        this.setState({slides: this.state.slides.map(slide=>{
            slide.question === q ? {...slide, value} : slide
        })})
    }

    numItems = 3;
    itemWidth = (FIXED_BAR_WIDTH / this.numItems) - ((this.numItems - 1) * BAR_SPACE)
    animVal = new Animated.Value(0)

    _renderDots = ()=>this.state.slides.map((_, i)=>{
        const scrollBarVal = this.animVal.interpolate({
            inputRange: [DEVICE_WIDTH * (i - 1), DEVICE_WIDTH * (i + 1)],
            outputRange: [-this.itemWidth, this.itemWidth],
            extrapolate: 'clamp',
        })
        const animatedViewStyle = [
            styles.bar,
            {
                width: this.itemWidth,
                transform: [
                    { translateX: scrollBarVal },
                ],
            },
        ];

        const containerStyle = [
            styles.track,
            {
                width: this.itemWidth,
                marginLeft: i === 0 ? 0 : BAR_SPACE,
            },
        ];

        return(
            <View key={`bar${i}`} style={containerStyle}>
                <Animated.View style={animatedViewStyle}/>
            </View>
        )
    })

    render(){
        const { slides } = this.state;
        return (
            <View style={styles.mainContainer}>
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    scrollEventThrottle={10}
                    pagingEnabled
                    onScroll={
                    Animated.event(
                        [{ nativeEvent: { contentOffset: { x: this.animVal } } }]
                    )
                    }
                >
                    {slides.map(slide=>{
                        return(
                            <Slide
                                key={slide.question}
                                slide={slide}
                                updateValue={this._updateValue}
                            />
                        )
                    })}
                </ScrollView>
                <View style={styles.barContainer}>
                    {this._renderDots()}
                </View>
            </View>
        )
    }
}