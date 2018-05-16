import React, { Component } from 'react';
import { bool, string } from 'prop-types';
import { Image, View, StyleSheet } from 'react-native';

import style from './style';

class Icon extends Component {
  render() {
    const { shouldCheckmarkBeVisible, color } = this.props;
    const iconContainerStyle = [style.iconContainer];

    if (color) {
      iconContainerStyle.push(
        StyleSheet.create({ icon: { backgroundColor: color } }).icon
      );
    }

    return (
      <View style={iconContainerStyle}>
        {shouldCheckmarkBeVisible && (
          <Image
            source={require('../../assets/images/check.png')}
            resizeMode="contain"
            style={style.checkIcon}
          />
        )}
      </View>
    );
  }
}

Icon.defaultProps = {
  color: null
};

Icon.propTypes = {
  shouldCheckmarkBeVisible: bool.isRequired,
  color: string
};

export default Icon;
