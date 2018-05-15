import React from 'react';
import { func } from 'prop-types';
import { View, TouchableOpacity, Text, Image } from 'react-native';

import style from './style';
import Locale from './Locale';

const CurrenciesSwap = ({ onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <View style={style.container}>
      <Image
        source={require('../../assets/images/icon.png')}
        style={style.swapIcon}
        resizeMode="contain"
      />
      <Text style={style.buttonLabel}>{Locale.swapCurrencies}</Text>
    </View>
  </TouchableOpacity>
);

CurrenciesSwap.propTypes = {
  onPress: func.isRequired
};

export default CurrenciesSwap;
