import {StyleSheet, Dimensions} from 'react-native'

export const dimensions = {
  fullHeight: Dimensions.get('window').height,
  fullWidth: Dimensions.get('window').width
};

export const baseStyles = StyleSheet.create({
  container: {
    paddingHorizontal: 0,
    paddingVertical: 0,
    width: dimensions.fullWidth,
    height: dimensions.fullHeight,
  },
  main: {
    width: '80%',
    maxWidth: 400,
    marginLeft: 'auto',
    marginRight: 'auto',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  backgroundImage: {
    width: dimensions.fullWidth,
    height: dimensions.fullHeight,
  },
});
