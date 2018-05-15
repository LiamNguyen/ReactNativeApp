import { Dimensions } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const imageWidth = Dimensions.get('window').width / 2;

export default EStyleSheet.create({
  $largeLogoBackgroundSize: imageWidth,
  $largeLogoSize: imageWidth / 2,
  $scaleLogoBackgroundSize: imageWidth / 2,
  $scaleLogoSize: imageWidth / 4,
  logoTextContainer: {
    alignItems: 'center'
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  logoBackground: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '$largeLogoBackgroundSize',
    height: '$largeLogoBackgroundSize'
  },
  logo: {
    width: '$largeLogoSize',
    position: 'absolute'
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 28,
    marginTop: 15
  }
});
