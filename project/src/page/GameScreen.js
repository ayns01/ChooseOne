import {Component} from "react";
import {TouchableOpacity, ImageBackground, StyleSheet, Text, View, Image} from "react-native";
import React from "react";
import {baseStyles} from "../style/base";

export default class GameScreen extends Component {
  render() {
    return (
        <View style={baseStyles.container}>
          <ImageBackground source={require('../image/bg-arrows.jpg')} style={{width: '100%', height: '100%'}}>
            <View style={baseStyles.main}>
              <Text style={styles.question}>文字が赤色はどっち？</Text>
              <View style={styles.wrapper}>
                <View style={styles.answer}>
                  <Text style={styles.fontColor}>あか</Text>
                </View>
                <View style={styles.answer}>
                  <Text style={styles.fontColor}>くろ</Text>
                </View>
              </View>
              <View style={styles.wrapperButtons}>
                <TouchableOpacity >
                  <Image source={require('../image/arrow-l.png')} resizeMode={'contain'} style={styles.arrowButton}>
                  </Image>
                </TouchableOpacity>
                <TouchableOpacity style={styles.arrowButton}>
                  <Image source={require('../image/arrow-r.png')} resizeMode={'contain'} style={styles.arrowButton}>
                  </Image>
                </TouchableOpacity>
              </View>
            </View>
          </ImageBackground>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  question: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#878789',
    textAlign: 'center',
    marginBottom: 40,
  },
  wrapper: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 50,
  },
  wrapperButtons: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
  },
  answer: {
    backgroundColor: '#FFEDBC',
    borderRadius: 140,
    width: 140,
    height: 140,
    alignItems: 'center',
    justifyContent: 'center'
  },
  fontColor: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  arrowButton: {
    width: 100,
  },
});
