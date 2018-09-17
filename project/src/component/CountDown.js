import {Component} from "react";
import {Animated, ImageBackground, StyleSheet, View} from "react-native";
import React from "react";
import {COUNTIMAGE} from "../util/CountImage";
import {baseStyles} from "../style/base";

class CountDown extends Component {
  constructor(props) {
    super(props);

    this.state = {
      countDown3: new Animated.Value(0),
      countDown2: new Animated.Value(0),
      countDown1: new Animated.Value(0),
      countDown0: new Animated.Value(0),
    };
  }

  componentDidMount() {
    const createAnimation = function (value, delay = 0) {
      return Animated.sequence([
        Animated.timing(
            value,
            {
              toValue: 1,
              duration: 1,
              delay
            }
        ),
        Animated.timing(
            value,
            {
              toValue: 1,
              duration: 1000,
            }
        ),
        Animated.timing(
            value,
            {
              toValue: 0,
              duration: 1,
            }
        ),
      ])
    };
    Animated.parallel([
      createAnimation(this.state.countDown3),
      createAnimation(this.state.countDown2, 1000),
      createAnimation(this.state.countDown1, 2000),
      createAnimation(this.state.countDown0, 3000),
    ]).start();
  }

  render() {
    return (
        <ImageBackground source={require('../image/bg-arrows.jpg')} style={{width: '100%', height: '100%'}}>
          <View style={baseStyles.main}>
            <View style={styles.imageWrapper}>
              <Animated.Image source={COUNTIMAGE[3]} style={[styles.image, {opacity: this.state.countDown3}]}
                              resizeMode={'contain'}/>
              <Animated.Image source={COUNTIMAGE[2]} style={[styles.image, {opacity: this.state.countDown2}]}
                              resizeMode={'contain'}/>
              <Animated.Image source={COUNTIMAGE[1]} style={[styles.image, {opacity: this.state.countDown1}]}
                              resizeMode={'contain'}/>
              <Animated.Image source={COUNTIMAGE[0]} style={[styles.image, {opacity: this.state.countDown0}]}
                              resizeMode={'contain'}/>
            </View>
          </View>
        </ImageBackground>
    );
  }
}

export default CountDown;

const styles = StyleSheet.create({
  imageWrapper: {
    width: 200,
    height: 200,
    position: 'relative',
  },
  image: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
  }
});

