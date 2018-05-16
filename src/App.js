import React from 'react';
import expo from 'expo';
import { createStackNavigator } from 'react-navigation';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Provider } from 'react-redux';

import HomeScreen from './screens/HomeScreen';
import CurrencySelectionScreen from './screens/CurrencySelectionScreen';
import {
  homeScreen,
  currencySelectionScreen
} from './constants/ScreenNameConstants';
import config from './config';
import createStore from './store';

// Initial configuration
config.init();
const initialState = window.__INITIAL_STATE__;
const store = createStore(initialState);

// Global style
EStyleSheet.build({
  $themeBackgroundColor: '#4F6D7A',
  $darkText: '#868686'
});

// Navigator
const HomeStackNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        header: () => null
      }
    }
  },
  {
    headerMode: 'screen'
  }
);
const RootStackNavigator = createStackNavigator(
  {
    [homeScreen]: {
      screen: HomeStackNavigator
    },
    [currencySelectionScreen]: {
      screen: CurrencySelectionScreen,
      navigationOptions: {
        header: () => null
      }
    }
  },
  {
    mode: 'modal',
    headerMode: 'none'
  }
);

export default expo.registerRootComponent(() => (
  <Provider store={store}>
    <RootStackNavigator />
  </Provider>
));
