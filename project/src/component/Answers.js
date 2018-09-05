import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import React from "react";

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
        <View style={styles.answer}>
          <Text style={setFontColor(data.left.color)}>{data.left.text}</Text>
        </View>
        <View style={styles.answer}>
          <Text style={setFontColor(data.right.color)}>{data.right.text}</Text>
        </View>
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
