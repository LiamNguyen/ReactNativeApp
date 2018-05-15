import React from 'react';
import { func, string, bool } from 'prop-types';
import { View, Text, TouchableOpacity } from 'react-native';

import CustomTextInput from '../CustomTextInput';
import style from './style';

const CurrencyInput = ({ onPress, buttonText, editable, ...props }) => (
  <View style={style.currencyInputContainer}>
    <TouchableOpacity onPress={onPress} style={style.currencyButton}>
      <Text style={style.currencyButtonText}>{buttonText}</Text>
    </TouchableOpacity>
    <CustomTextInput {...props} style={style.inputValue} editable={editable} />
  </View>
);

CurrencyInput.defaultProps = {
  editable: true
};

CurrencyInput.propTypes = {
  onPress: func.isRequired,
  buttonText: string.isRequired,
  editable: bool,
  onChangeText: func.isRequired
};

export default CurrencyInput;
