import React, { Component } from 'react';
import { any, number } from 'prop-types';
import {
  View,
  TouchableWithoutFeedback,
  Keyboard,
  SafeAreaView
} from 'react-native';
import style from './style';

class ScreenContainer extends Component {
  render() {
    const { children, customStyle } = this.props;
    const screenContainerStyle = [style.container, customStyle];

    return (
      <SafeAreaView style={style.safeAreaContainer}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={screenContainerStyle}>{children}</View>
        </TouchableWithoutFeedback>
      </SafeAreaView>
    );
  }
}

ScreenContainer.propTypes = {
  children: any,
  customStyle: number
};

export default ScreenContainer;
