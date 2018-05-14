import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import expo from 'expo';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
        <Text>Yooo hoo</Text>
      </View>
    );
  }
}

export default expo.registerRootComponent(App);
