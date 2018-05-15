import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  loadingOverlayContainer: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    zIndex: 1000,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  }
});
