import {Component} from "react";
import {Button, Text, View} from "react-native";
import React from "react";

export default class GameScreen extends Component {
  render() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Game Screen</Text>
          <Button
              title="Go to Result"
              onPress={() => this.props.navigation.navigate('Result')}
          />
        </View>
    );
  }
}
