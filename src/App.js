import React from 'react';
import expo from 'expo';
import { createStackNavigator } from 'react-navigation';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Provider } from 'react-redux';

import HomeScreen from './screens/HomeScreen';
import { homeScreen } from './constants/ScreenNameConstants';
import config from './config';
import createStore from './store';

config.init();

EStyleSheet.build({
  $themeBackgroundColor: '#4F6D7A',
  $darkText: '#868686'
});

const initialState = window.__INITIAL_STATE__;
const store = createStore(initialState);
const RootStackNavigator = createStackNavigator({
  [homeScreen]: {
    screen: HomeScreen,
    navigationOptions: {
      header: null
    }
  }
});

export default expo.registerRootComponent(() => (
  <Provider store={store}>
    <RootStackNavigator />
  </Provider>
));
