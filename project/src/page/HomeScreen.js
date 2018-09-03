import {Component} from "react";
import {ImageBackground, Text, View, StyleSheet, TouchableOpacity, Image} from "react-native";
import React from "react";
import LinearGradient from 'react-native-linear-gradient';

import {baseStyles} from "../style/base";

export default class HomeScreen extends Component {
  render() {
    return (
        <View style={baseStyles.container}>
          <ImageBackground source={require('../image/bg-arrows.jpg')} style={{width: '100%', height: '100%'}}>
            <View style={baseStyles.main}>
              <View style={styles.logo}>
                <Image source={require('../image/circle.png')} resizeMode={'contain'} style={styles.logoImage}/>
                <View style={styles.logoTitle}>
                  <Text style={styles.logoTitleText}>Choose</Text>
                  <Text style={styles.logoTitleText}>ONE!</Text>
                </View>
              </View>

              <TouchableOpacity
                  style={styles.button}
                  onPress={() => this.props.navigation.navigate('Game')}
              >
                <LinearGradient colors={['#F28C81', '#F5AF19']} style={styles.linearGradient}>
                  <Text style={styles.textStyle}>START</Text>
                </LinearGradient>
              </TouchableOpacity>

            </View>
          </ImageBackground>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  logo: {
    width: '100%',
    position: 'relative',
    marginBottom: 30,
  },
  logoImage: {
    width: '100%',
  },
  logoTitle: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    alignItems: 'center',
    justifyContent: 'center'
  },
  logoTitleText: {
    color: '#5F5654',
    lineHeight: 44,
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  button: {
    width: '100%',
    shadowOffset: {width: 0, height: 3,},
    shadowColor: '#000',
    shadowOpacity: 0.6,
  },
  linearGradient: {
    borderRadius: 30,
  },
  textStyle: {
    paddingTop: 20,
    paddingBottom: 20,
    fontSize: 25,
    color: '#fff',
    textAlign: 'center',
    fontFamily: 'Arial',
  },
});
