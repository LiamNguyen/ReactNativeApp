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
import CurrenciesConversionConstants from '../../constants/CurrenciesConversionConstants';

const {
  CHANGE_BASE_CURRENCY,
  CHANGE_QUOTE_CURRENCY
} = CurrenciesConversionConstants;

class HomeScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      baseValue: '',
      quoteValue: ''
    };
  }

  componentWillReceiveProps(nextProps) {
    const {
      CurrenciesConversion: { base: newBase, quote: newQuote }
    } = nextProps;
    const {
      CurrenciesConversion: { base: oldBase, quote: oldQuote }
    } = this.props;

    if (newBase !== oldBase || newQuote !== oldQuote) {
      this.setState({ baseValue: '', quoteValue: '' });
    }
  }

  componentDidMount() {
    this.props.getExchangeRates();
  }

  handleBaseChange = () => {
    this.props.navigation.navigate(currencySelectionScreen, {
      actionType: CHANGE_BASE_CURRENCY
    });
  };

  handleQuoteChange = () => {
    this.props.navigation.navigate(currencySelectionScreen, {
      actionType: CHANGE_QUOTE_CURRENCY
    });
  };

  handleSwapCurrencies = () => {
    this.setState({ baseValue: '', quoteValue: '' });
    this.props.swapCurrencies();
  };

  handleBaseValueChange = baseValue => {
    const {
      CurrenciesConversion: { quote, rates }
    } = this.props;
    const { rate } = rates.find(rate => rate.currency === quote);
    const quoteValue = _.isEmpty(baseValue)
      ? ''
      : `${(baseValue * rate).toFixed(4)}`;

    this.setState({ baseValue, quoteValue });
  };

  render() {
    const {
      CurrenciesConversion: { loading, base, quote, rates }
    } = this.props;
    const currentRate = rates.find(rate => rate.currency === quote);
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
              onPress={this.handleBaseChange}
              onChangeText={this.handleBaseValueChange}
            />
            <CurrencyInput
              value={quoteValue}
              buttonText={quote}
              editable={false}
              keyboardType="numeric"
              onPress={this.handleQuoteChange}
            />
            {!_.isEmpty(quoteValue) && (
              <LastConverted
                date={moment()}
                base={base}
                quote={quote}
                conversionRate={currentRate.rate || 0}
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
