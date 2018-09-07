import {Image, StyleSheet, TouchableOpacity, View} from "react-native";
import React from "react";

const GameButton = (props) => {
  const {
    children,
    onPress,
  } = props;
  return (
      <TouchableOpacity onPress={onPress}>
        <Image source={children} resizeMode={'contain'} style={styles.arrowButton}>
        </Image>
      </TouchableOpacity>
  )
};
export default GameButton;

const styles = StyleSheet.create({
  arrowButton: {
    width: 100,
  },
});
