/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { createSwitchNavigator } from 'react-navigation';
import HomeScreen from "./src/page/HomeScreen";
import ResultScreen from "./src/page/ResultScreen";
import GameScreen from "./src/page/GameScreen";

const RootStack = createSwitchNavigator(
    {
      Home: HomeScreen,
      Game: GameScreen,
      Result: ResultScreen,
    },
    {
      initialRouteName: 'Home',
    }
);

export default class App extends Component {
  render() {
    return <RootStack />;
  }
}

