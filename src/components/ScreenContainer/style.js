import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  container: {
    paddingLeft: 15,
    paddingRight: 15,
    flex: 1,
    backgroundColor: '$themeBackgroundColor'
  },
  safeAreaContainer: {
    flex: 1
  }
});

export default styles;
