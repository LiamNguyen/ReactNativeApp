import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  currencyInputContainer: {
    height: 45,
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
    width: '90%'
  },
  currencyButton: {
    flex: 0.2,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: 'black',
    shadowOffset: { width: 2, height: 0 },
    shadowRadius: 2,
    shadowOpacity: 1,
    zIndex: 2,
    borderBottomLeftRadius: 5,
    borderTopLeftRadius: 5
  },
  currencyButtonText: {
    color: '#4F6D7A',
    fontWeight: 'bold',
    fontSize: 20
  },
  inputValue: {
    paddingLeft: 10,
    paddingRight: 10,
    flex: 0.8,
    backgroundColor: 'white',
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5
  }
});
