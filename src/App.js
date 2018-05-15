import React from 'react';
import expo from 'expo';
import { createStackNavigator } from 'react-navigation';
import EStyleSheet from 'react-native-extended-stylesheet';

import HomeScreen from './screens/HomeScreen';
import { homeScreen } from './constants/ScreenNameConstants';

EStyleSheet.build({
  $themeBackgroundColor: '#4F6D7A',
  $darkText: '#868686'
});

const RootStackNavigator = createStackNavigator({
  [homeScreen]: {
    screen: HomeScreen,
    navigationOptions: {
      header: null
    }
  }
});

export default expo.registerRootComponent(() => <RootStackNavigator />);
