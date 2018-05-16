import React from 'react';
import { string, bool, any, number, func } from 'prop-types';
import { Text, StyleSheet } from 'react-native';

import ListItemWrapper from './ListItemWrapper';
import Icon from './Icon/Icon';

const style = StyleSheet.create({
  item: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
    height: 30,
    justifyContent: 'center'
  }
});

const ListItem = ({
  id,
  item,
  selected,
  customIcon,
  customStyle,
  isThemeListIcon,
  shouldCheckmarkBeVisible,
  iconColor,
  onPressItem
}) => (
  <ListItemWrapper onPressItem={onPressItem} id={id}>
    <Text style={[style.item, customStyle]}>{item}</Text>
    {(selected || isThemeListIcon) && (
      <Icon
        shouldCheckmarkBeVisible={shouldCheckmarkBeVisible}
        color={iconColor}
      />
    )}
    {customIcon}
  </ListItemWrapper>
);

ListItem.defaultProps = {
  selected: false,
  customIcon: null,
  isThemeListIcon: false,
  shouldCheckmarkBeVisible: true,
  iconColor: null
};

ListItem.propTypes = {
  id: string.isRequired,
  item: string.isRequired,
  onPressItem: func.isRequired,
  selected: bool,
  customIcon: any,
  customStyle: number,
  isThemeListIcon: bool,
  shouldCheckmarkBeVisible: bool,
  iconColor: string
};

export default ListItem;
