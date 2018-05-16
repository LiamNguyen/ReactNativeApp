import React, { Component } from 'react';
import { func, object } from 'prop-types';
import { View } from 'react-native';
import { connect } from 'react-redux';
import moment from 'moment';
import { bindActionCreators } from 'redux';
import _ from 'lodash';

import style from './style';
import ScreenContainer from '../../components/ScreenContainer';
import Logo from '../../components/Logo';
import CurrencyInput from '../../components/CurrencyInput';
import LastConverted from '../../components/LastConverted';
import CurrenciesSwap from '../../components/CurrenciesSwap';
import CurrenciesConversionActions from '../../actions/CurrenciesConversionActions';
import LoadingOverlay from '../../components/LoadingOverlay';
import { currencySelectionScreen } from '../../constants/ScreenNameConstants';

class HomeScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      baseValue: '',
      quoteValue: ''
    };
  }

  componentDidMount() {
    this.props.getExchangeRates();
  }

  componentWillReceiveProps(nextProps) {
    const {
      CurrenciesConversion: { rates }
    } = nextProps;
    if (rates) {
      this.props.navigation.navigate(currencySelectionScreen, {
        actionType: 'CHANGE_BASE_CURRENCY'
      });
    }
  }

  handleSwapCurrencies = () => {
    this.setState({ baseValue: '', quoteValue: '' });
    this.props.swapCurrencies();
  };

  handleBaseValueChange = baseValue => {
    const {
      CurrenciesConversion: { quote, rates }
    } = this.props;
    const quoteValue = _.isEmpty(baseValue)
      ? ''
      : `${(baseValue * rates[quote]).toFixed(4)}`;

    this.setState({ baseValue, quoteValue });
  };

  render() {
    const {
      CurrenciesConversion: { loading, base, quote, rates }
    } = this.props;
    const { baseValue, quoteValue } = this.state;

    return (
      <ScreenContainer>
        <LoadingOverlay visible={loading} />
        <View style={style.homeScreen}>
          <Logo />
          <View style={style.currencyConversionContainer}>
            <CurrencyInput
              value={baseValue}
              buttonText={base}
              editable
              keyboardType="numeric"
              onPress={() => {}}
              onChangeText={this.handleBaseValueChange}
            />
            <CurrencyInput
              value={quoteValue}
              buttonText={quote}
              editable={false}
              keyboardType="numeric"
              onPress={() => {}}
              onChangeText={() => {}}
            />
            {!_.isEmpty(quoteValue) && (
              <LastConverted
                date={moment()}
                base={base}
                quote={quote}
                conversionRate={rates[quote]}
              />
            )}
            <CurrenciesSwap onPress={this.handleSwapCurrencies} />
          </View>
        </View>
      </ScreenContainer>
    );
  }
}

HomeScreen.propTypes = {
  getExchangeRates: func.isRequired,
  swapCurrencies: func.isRequired,
  CurrenciesConversion: object.isRequired
};

export default connect(
  state => _.pick(state, ['CurrenciesConversion']),
  dispatch => bindActionCreators({ ...CurrenciesConversionActions }, dispatch)
)(HomeScreen);
