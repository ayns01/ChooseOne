import {Component} from "react";
import {ImageBackground, StyleSheet, Text, View, Modal, Image, TouchableOpacity} from "react-native";
import React from "react";
import {baseStyles} from "../style/base";

import Answers from "../component/Answers";
import GameButton from "../component/GameButton";
import {jsonPatternData} from "../data/patternData";

import { connect } from 'react-redux'
import { addScore } from '../action'
import CountDown from "../component/CountDown";
import LinearGradient from 'react-native-linear-gradient';

class GameScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      modalVisible: true,
      answerModalVisible: false,
      answerModal: null,
      gameData: getGameData(),
    };
  }

  componentDidMount() {
    setTimeout(() => this.setState({modalVisible: false}), 4000);
  }

  onPress = (isCorrect) => () => {
    // Number of games : 8
    if (this.state.count < 8) {
      if (isCorrect) {
        this.props.dispatch(addScore());
        this.setState({
          answerModal: <View style={styles.answerModal}><LinearGradient colors={['#00B09B', '#96C93D']} style={styles.answerModalBackground}><Image source={require('../image/correct2.png')} style={styles.answerModalImage} resizeMode={'contain'} /></LinearGradient></View>
        });
      } else {
        this.setState({
          answerModal: <View style={styles.answerModal}><LinearGradient colors={['#EB3349', '#DA9183']} style={styles.answerModalBackground}><Image source={require('../image/incorrect2.png')} style={styles.answerModalImage} resizeMode={'contain'} /></LinearGradient></View>
        });
      }
      this.setState({count:this.state.count + 1});
      this.setState({answerModalVisible: true});
      setTimeout(
          async () => {
            await this.setState({answerModalVisible: false});
            await this.setState({gameData: getGameData()});
          }, 600);
    } else {
      this.props.navigation.navigate('Result');
    }
  };

  render() {
    const data = this.state.gameData;

    return (
        <View style={baseStyles.container}>
          <Modal
              visible={this.state.modalVisible}
              animationType={'none'}
          >
            <CountDown/>
          </Modal>
          <Modal animationType="fade"
                 transparent={true}
                 visible={this.state.answerModalVisible}>
            {this.state.answerModal}
          </Modal>
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

const getGameData = () => {
  const random = Math.floor( Math.random() * jsonPatternData.total ) + 1;
  const data = jsonPatternData.data.filter(function(item){
    if (item.id === random) return true;
  });

  return data;
};


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
  answerModal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, .6)',
  },
  answerModalBackground: {
    width: 200,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 100,
    borderRadius: 10,
  },
  answerModalImage: {
    width: 100,
    height: 100,
  }

});

export default connect()(GameScreen);
