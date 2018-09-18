import {Component} from "react";
import {ImageBackground, Text, View, StyleSheet, Image} from "react-native";
import React from "react";

import {baseStyles} from "../style/base";
import Button from "../component/Button";

import store from '../../index';
import { resetAction } from '../action'

export default class ResultScreen extends Component {
  constructor(props) {
    super(props);
  }
  
  onPress = () => {
    this.props.navigation.navigate('Game');
    store.dispatch(resetAction());
  }

  render() {
    const finalscore = store.getState().score[0].value;
    let resultImage;

    switch (finalscore) {
      case 8:
        resultImage = <Image source={require('../image/result/star-s.png')} resizeMode={'contain'} style={styles.resultImage}/>;
        break;
      case 7:
        resultImage = <Image source={require('../image/result/star-a.png')} resizeMode={'contain'} style={styles.resultImage}/>;
        break;
      case 6:
        resultImage = <Image source={require('../image/result/star-b.png')} resizeMode={'contain'} style={styles.resultImage}/>;
        break;
      case 5:
        resultImage = <Image source={require('../image/result/star-c.png')} resizeMode={'contain'} style={styles.resultImage}/>;
        break;
      case 4:
        resultImage = <Image source={require('../image/result/star-d.png')} resizeMode={'contain'} style={styles.resultImage}/>;
        break;
      case 3:
        resultImage = <Image source={require('../image/result/star-e.png')} resizeMode={'contain'} style={styles.resultImage}/>;
        break;
      case 2:
        resultImage = <Image source={require('../image/result/star-f.png')} resizeMode={'contain'} style={styles.resultImage}/>;
        break;
      case 1:
        resultImage = <Image source={require('../image/result/star-f.png')} resizeMode={'contain'} style={styles.resultImage}/>;
        break;
      default:
        resultImage = <Image source={require('../image/result/star-f.png')} resizeMode={'contain'} style={styles.resultImage}/>;

    }

    return (
      <View style={baseStyles.container}>
      <ImageBackground source={require('../image/bg-arrows.jpg')} style={{width: '100%', height: '100%'}}>
      <Text style={styles.result}>RESULT</Text>
        <View style={baseStyles.main}>
          <View style={styles.star}>
            {resultImage}
          </View>
          <View style={styles.restartBtn}>
            <Button
                onPress={this.onPress}
                colors={['#3333FF', '#9933FF']}
            >RESTART</Button>
          </View>
        </View>
      </ImageBackground>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  result: {
    textAlign: 'center',
    fontWeight: 'bold',
    paddingTop: 80,
    fontSize: 32,
    color: 'dimgrey',
  },
  star: {
    width: '100%',
    position: 'relative',
    marginBottom: 90,
  },
  resultImage: {
    width: '100%',
  },
  restartBtn: {
    width: '100%',
    position: 'relative',
    marginBottom: 60,
  }
});