import {StyleSheet, Text, Image, View} from "react-native";
import React from "react";

import { IMAGE } from "../util/GameImage";

const AnswerBox = (props) => {
  const {
    type,
    data
  } = props;

  const setFontColor = (color) => {
    let style = {
      fontSize: 32,
      fontWeight: 'bold',
    };
    style["color"] = color;
    return style;
  };


  if (type === 'fontColor') {
    return (
        <View style={styles.answer}>
          <Text style={setFontColor(data.color)}>{data.text}</Text>
        </View>
    );
  }
  if (type === 'junken' || type === 'clock') {
    return (
        <View style={styles.answer}>
          <Image source={IMAGE[data]} style={{maxWidth: 100}} resizeMode={'contain'}></Image>
        </View>
    );
  }
};

const Answers = (props) => {
  const {
    data
  } = props;

  const setFontColor = (color) => {
    let style = {
      fontSize: 32,
      fontWeight: 'bold',
    };
    style["color"] = color;
    return style;
  };

  return (
      <View style={styles.wrapper}>
        <AnswerBox data={data.left} type={data.type}></AnswerBox>
        <AnswerBox data={data.right} type={data.type}></AnswerBox>
      </View>
  );
};

export default Answers;

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 50,
  },
  answer: {
    backgroundColor: '#FFEDBC',
    borderRadius: 140,
    width: 140,
    height: 140,
    alignItems: 'center',
    justifyContent: 'center'
  },
});
