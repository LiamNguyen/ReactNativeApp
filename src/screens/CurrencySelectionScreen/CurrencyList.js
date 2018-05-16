import React, { PureComponent } from 'react';
import { func, string, array } from 'prop-types';
import { FlatList, KeyboardAvoidingView } from 'react-native';

import ListItem from '../../components/ListItem';

class CurrencyList extends PureComponent {
  keyExtractor = item => item;

  handlePressItem = item => {
    this.props.onCurrencyChosen(item);
  };

  renderItem = ({ item }) => (
    <ListItem
      id={item}
      item={item}
      selected={this.props.currentCurrency === item}
      onPressItem={this.handlePressItem}
    />
  );

  render() {
    const { currencies } = this.props;

    return (
      <KeyboardAvoidingView behavior="padding">
        <FlatList
          data={currencies}
          extraData={this.state}
          keyExtractor={this.keyExtractor}
          renderItem={this.renderItem}
        />
      </KeyboardAvoidingView>
    );
  }
}

CurrencyList.propTypes = {
  onCurrencyChosen: func.isRequired,
  currentCurrency: string.isRequired,
  currencies: array.isRequired
};

export default CurrencyList;
