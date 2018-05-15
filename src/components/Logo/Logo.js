import React, { Component } from 'react';

import { View, Text, Keyboard, Animated, Platform } from 'react-native';

import style from './style';
import Locale from './Locale';

const ANIMATED_DURATION = 250;
const imagesPath = '../../assets/images';
const logoBackgroundPath = `${imagesPath}/background.png`;
const logoPath = `${imagesPath}/logo.png`;

class Logo extends Component {
  constructor(props) {
    super(props);

    this.logoBackgroundSize = new Animated.Value(
      style.$largeLogoBackgroundSize
    );
    this.logoSize = new Animated.Value(style.$largeLogoSize);
  }

  componentDidMount() {
    const keyboardWillShowListenerKey =
      Platform.OS === 'android' ? 'keyboardDidShow' : 'keyboardWillShow';
    const keyboardWillHideListenerKey =
      Platform.OS === 'android' ? 'keyboardDidHide' : 'keyboardWillHide';

    this.onKeyBoardShowListener = Keyboard.addListener(
      keyboardWillShowListenerKey,
      this.handleKeyBoardShow
    );
    this.onKeyBoardHideListener = Keyboard.addListener(
      keyboardWillHideListenerKey,
      this.handleKeyBoardHide
    );
  }

  componentWillUnmount() {
    this.onKeyBoardShowListener.remove();
    this.onKeyBoardHideListener.remove();
  }

  handleKeyBoardShow = () => {
    Animated.parallel([
      Animated.timing(this.logoBackgroundSize, {
        toValue: style.$scaleLogoBackgroundSize,
        duration: ANIMATED_DURATION
      }),
      Animated.timing(this.logoSize, {
        toValue: style.$scaleLogoSize,
        duration: ANIMATED_DURATION
      })
    ]).start();
  };

  handleKeyBoardHide = () => {
    Animated.parallel([
      Animated.timing(this.logoBackgroundSize, {
        toValue: style.$largeLogoBackgroundSize,
        duration: ANIMATED_DURATION
      }),
      Animated.timing(this.logoSize, {
        toValue: style.$largeLogoSize,
        duration: ANIMATED_DURATION
      })
    ]).start();
  };

  render() {
    const logoBackgroundStyle = [
      style.logoBackground,
      {
        width: this.logoBackgroundSize,
        height: this.logoBackgroundSize
      }
    ];
    const logoStyle = [
      style.logo,
      { width: this.logoSize, height: this.logoSize }
    ];

    return (
      <View style={style.logoTextContainer}>
        <View style={style.logoContainer}>
          <Animated.Image
            source={require(logoBackgroundPath)}
            style={logoBackgroundStyle}
            resizeMode="contain"
          />
          <Animated.Image
            source={require(logoPath)}
            style={logoStyle}
            resizeMode="contain"
          />
        </View>
        <Text style={style.title}>{Locale.appTitle}</Text>
      </View>
    );
  }
}

export default Logo;
