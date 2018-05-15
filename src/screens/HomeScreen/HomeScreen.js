import React from 'react';
import { View } from 'react-native';
import moment from 'moment';

import style from './style';
import ScreenContainer from '../../components/ScreenContainer';
import Logo from '../../components/Logo';
import CurrencyInput from '../../components/CurrencyInput';
import LastConverted from '../../components/LastConverted';
import CurrenciesSwap from '../../components/CurrenciesSwap';

const HomeScreen = () => (
  <ScreenContainer>
    <View style={style.homeScreen}>
      <Logo />
      <View style={style.currencyConversionContainer}>
        <CurrencyInput
          value={'200'}
          buttonText={'USD'}
          editable
          keyboardType="numeric"
          onPress={() => {}}
          onChangeText={() => {}}
        />
        <CurrencyInput
          value={'200'}
          buttonText={'EUR'}
          editable
          keyboardType="numeric"
          onPress={() => {}}
          onChangeText={() => {}}
        />
        <LastConverted
          date={moment()}
          base={'USD'}
          quote={'EUR'}
          conversionRate={1.1111}
        />
        <CurrenciesSwap onPress={() => {}} />
      </View>
    </View>
  </ScreenContainer>
);

export default HomeScreen;
