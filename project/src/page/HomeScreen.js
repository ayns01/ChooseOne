import {Component} from "react";
import {Button, Text, View} from "react-native";
import React from "react";

export default class HomeScreen extends Component {
  render() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Home Screen</Text>
          <Button
              title="Go to Game"
              onPress={() => this.props.navigation.navigate('Game')}
          />
        </View>
    );
  }
}
