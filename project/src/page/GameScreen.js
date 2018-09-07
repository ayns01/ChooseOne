import {Component} from "react";
import {ImageBackground, StyleSheet, Text, View, Image} from "react-native";
import React from "react";
import {baseStyles} from "../style/base";

import Answers from "../component/Answers";
import GameButton from "../component/GameButton";
import {jsonPatternData} from "../data/patternData";

import { connect } from 'react-redux'
import { addScore } from '../action'

class GameScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }
  onPress = (isCorrect) => () => {
    // Number of games : 8
    if (this.state.count < 8) {
      if (isCorrect) {
        this.props.dispatch(addScore());
      }
      this.setState({count: this.state.count + 1});
    } else {
      this.setState({count: 0});
      this.props.navigation.navigate('Result');
    }
  };

  render() {
    const random = Math.floor( Math.random() * jsonPatternData.total ) + 1;
    const data = jsonPatternData.data.filter(function(item){
      if (item.id === random) return true;
    });

    return (
        <View style={baseStyles.container}>
          <ImageBackground source={require('../image/bg-arrows.jpg')} style={{width: '100%', height: '100%'}}>
            <View style={baseStyles.main}>
              <Text style={styles.question}>{data[0].question}</Text>

              <Answers data={data[0]}/>

              <View style={styles.wrapperButtons}>
                <GameButton onPress={this.onPress(data[0].answer === 'left')}>{require('../image/arrow-l.png')}</GameButton>
                <GameButton onPress={this.onPress(data[0].answer === 'right')}>{require('../image/arrow-r.png')}</GameButton>
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
});

export default connect()(GameScreen);
