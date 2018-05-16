import React, { PureComponent } from 'react';
import { any, number, func, string } from 'prop-types';
import { View, TouchableHighlight, StyleSheet } from 'react-native';

const style = StyleSheet.create({
  itemContainer: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});

class ListItemWrapper extends PureComponent {
  handlePress = () => {
    const { onPressItem, id } = this.props;
    onPressItem(id);
  };

  render() {
    const { children, customStyle } = this.props;
    const itemContainerStyle = [style.itemContainer, customStyle];

    return (
      <TouchableHighlight underlayColor="#E2E2E2" onPress={this.handlePress}>
        <View style={itemContainerStyle}>{children}</View>
      </TouchableHighlight>
    );
  }
}

ListItemWrapper.propTypes = {
  children: any.isRequired,
  customStyle: number,
  onPressItem: func.isRequired,
  id: string.isRequired
};

export default ListItemWrapper;
