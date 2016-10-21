/**
 * React Native App
 *
 * Extended from sample app https://github.com/facebook/react-native
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
        let pic = {uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Vincent_Willem_van_Gogh_-_Pont_de_Langlois_-_Kr%C3%B6ller-M%C3%BCller.jpg/589px-Vincent_Willem_van_Gogh_-_Pont_de_Langlois_-_Kr%C3%B6ller-M%C3%BCller.jpg'};

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          React Native App
        </Text>
        <Text style={styles.instructions}>
          Edited in Android Studio and Codepen.io{'\n'}
        </Text>
        <Text style={styles.references}>
          Rob Anderson, 2016 {'\n'}
        </Text>
        

        <View>
          <Image source={pic} style={{width: 316, height: 258}}/>
        </View>
        
        <Text style={styles.instructions}>
          Langlois Bridge - France
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
    fontSize: 14,
    textAlign: 'center',
    color: '#333333',
    marginTop: 5,    
    marginBottom: 5,
  },
  references: {
    fontSize: 10,
    textAlign: 'center',
    margin: 10,
  },
  imageContainer: {
    flex: 1,
  },
});

AppRegistry.registerComponent('rnApp', () => rnApp);

