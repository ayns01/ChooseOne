import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const Button = (props) => {
  const {
    children,
    colors,
    onPress,
  } = props;

  return (
      <TouchableOpacity
          style={styles.button}
          onPress={onPress}
      >
        <LinearGradient colors={colors} style={styles.linearGradient}>
          <Text style={styles.textStyle}>{children}</Text>
        </LinearGradient>
      </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
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
