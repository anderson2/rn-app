/**
 * React Native App
 *
 * Extended from sample app 
 * https://github.com/facebook/react-native
 * @flow
 */


import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';


export default class rnApp extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          React Native App
        </Text>
        <Text style={styles.instructions}>
          To reload the screen, set a focus on the emulator window
          then double tap the R character on your computer keyboard
        </Text>
        <Text style={styles.instructions}>
          Edited in Android Studio{'\n'}
          v 1.0.2{'\n'}

        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('rnApp', () => rnApp);
