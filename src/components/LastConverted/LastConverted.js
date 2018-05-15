import React from 'react';
import { object, string, number } from 'prop-types';
import { Text } from 'react-native';
import moment from 'moment';

import style from './style';

const LastConverted = ({ date, base, quote, conversionRate }) => (
  <Text style={style.text}>
    1 {base} = {conversionRate} {quote} as of{' '}
    {moment(date).format('MMMM D, YYYY')}
  </Text>
);

LastConverted.propTypes = {
  date: object.isRequired,
  base: string.isRequired,
  quote: string.isRequired,
  conversionRate: number.isRequired
};

export default LastConverted;
