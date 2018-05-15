import React, { Component } from 'react';
import { number, bool } from 'prop-types';
import { TextInput, StyleSheet, Keyboard } from 'react-native';

const style = StyleSheet.create({
  inputValueDisabled: {
    backgroundColor: '#DCDCDC'
  }
});

class CustomTextInput extends Component {
  handleKeyPress = e => {
    if (e.nativeEvent.key === 'Enter') {
      Keyboard.dismiss();
    }
  };

  render() {
    const { editable, style: customStyle } = this.props;
    const textInputStyle = [customStyle];

    if (!editable) {
      textInputStyle.push(style.inputValueDisabled);
    }
    return (
      <TextInput
        {...this.props}
        autoCapitalize="none"
        autoCorrect={false}
        style={textInputStyle}
        onKeyPress={this.handleKeyPress}
        underlineColorAndroid="transparent"
      />
    );
  }
}

CustomTextInput.defaultProps = {
  editable: true
};

CustomTextInput.propTypes = {
  style: number,
  editable: bool
};

export default CustomTextInput;
