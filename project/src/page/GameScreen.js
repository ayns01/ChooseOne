import {Component} from "react";
import {TouchableOpacity, ImageBackground, StyleSheet, Text, View, Image} from "react-native";
import React from "react";
import {baseStyles} from "../style/base";

import Answers from "../component/Answers";
import {jsonPatternData} from "../data/patternData";

export default class GameScreen extends Component {
  render() {
    const data = jsonPatternData.data.filter(function(item){
      if (item.id === 1) return true;
    });

    return (
        <View style={baseStyles.container}>
          <ImageBackground source={require('../image/bg-arrows.jpg')} style={{width: '100%', height: '100%'}}>
            <View style={baseStyles.main}>
              <Text style={styles.question}>{data[0].question}</Text>

              <Answers data={data[0]}/>

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
  wrapperButtons: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
  },
  arrowButton: {
    width: 100,
  },
});
