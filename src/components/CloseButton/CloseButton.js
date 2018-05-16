import React from 'react';
import { func } from 'prop-types';
import { View, TouchableOpacity, Image } from 'react-native';

import style from './style';

const CloseButton = ({ handleClose }) => (
  <View style={style.container}>
    <TouchableOpacity onPress={handleClose} style={style.touchableHighlight}>
      <Image
        source={require('../../assets/images/closeIcon.png')}
        resizeMode="contain"
        style={style.closeButton}
      />
    </TouchableOpacity>
  </View>
);

CloseButton.propTypes = {
  handleClose: func.isRequired
};

export default CloseButton;
