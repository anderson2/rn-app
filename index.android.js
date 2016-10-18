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
  View,
  Image
} from 'react-native';


export default class rnApp extends Component {
  render() {
        let pic = {uri: 'https://upload.wikimedia.org/wikipedia/commons/c/ca/Vincent_Willem_van_Gogh_-_Pont_de_Langlois_-_Kr%C3%B6ller-M%C3%BCller.jpg'};


    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          React Native App
        </Text>
        <Text style={styles.instructions}>
          Edited in Android Studio{'\n'}
        </Text>
        <Text style={styles.instructions}>
          v 1.0.3 {'\n'}
        </Text>
        
        <Image source={pic} style={{width: 193, height: 110}}/>

        <Text style={styles.instructions}>
          Langlois Bridge
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
