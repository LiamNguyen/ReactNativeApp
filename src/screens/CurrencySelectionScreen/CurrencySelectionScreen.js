import React, { Component } from 'react';
import { object, func } from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import _ from 'lodash';

import style from './style';
import ScreenContainer from '../../components/ScreenContainer';
import CustomTextInput from '../../components/CustomTextInput';
import CloseButton from '../../components/CloseButton';
import CurrencyList from './CurrencyList';
import CurrenciesConversionConstants from '../../constants/CurrenciesConversionConstants';
import CurrenciesConversionActions from '../../actions/CurrenciesConversionActions';

const { CHANGE_BASE_CURRENCY } = CurrenciesConversionConstants;

class CurrencySelectionScreen extends Component {
  handleClose = () => {
    this.props.navigation.goBack();
  };

  handleCurrencyChosen = item => {
    const {
      navigation: {
        state: {
          params: { actionType }
        }
      },
      changeBaseCurrency,
      changeQuoteCurrency
    } = this.props;

    if (actionType === CHANGE_BASE_CURRENCY) {
      changeBaseCurrency(item);
    } else {
      changeQuoteCurrency(item);
    }
    this.handleClose();
  };

  render() {
    const {
      navigation: {
        state: {
          params: { actionType }
        }
      },
      CurrenciesConversion: { base, quote, rates }
    } = this.props;
    const currentCurrency = actionType === CHANGE_BASE_CURRENCY ? base : quote;
    const currencies = Object.keys(rates).sort();

    return (
      <ScreenContainer customStyle={style.screenContainer}>
        <CloseButton handleClose={this.handleClose} />
        <CustomTextInput
          style={style.textInputCurrencySearch}
          placeholder="Search currency"
          placeholderTextColor="white"
          returnKeyType="done"
        />
        <CurrencyList
          currencies={currencies}
          onCurrencyChosen={this.handleCurrencyChosen}
          currentCurrency={currentCurrency}
        />
      </ScreenContainer>
    );
  }
}

CurrencySelectionScreen.propTypes = {
  navigation: object.isRequired,
  changeBaseCurrency: func.isRequired,
  changeQuoteCurrency: func.isRequired,
  CurrenciesConversion: object.isRequired
};

export default connect(
  state => _.pick(state, ['CurrenciesConversion']),
  dispatch => bindActionCreators({ ...CurrenciesConversionActions }, dispatch)
)(CurrencySelectionScreen);
