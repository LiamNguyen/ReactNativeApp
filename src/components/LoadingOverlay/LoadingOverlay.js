import React from 'react';
import { bool } from 'prop-types';
import { PacmanIndicator } from 'react-native-indicators';

import style from './style';
import Fade from '../Fade';

const LoadingOverlay = ({ visible }) => (
  <Fade visible={visible} style={style.loadingOverlayContainer}>
    <PacmanIndicator color="white" size={80} />
  </Fade>
);

LoadingOverlay.propTypes = {
  visible: bool.isRequired
};

export default LoadingOverlay;
