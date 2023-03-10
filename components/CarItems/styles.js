import { StyleSheet, Dimensions } from 'react-native';
const styles = StyleSheet.create({
  carContainer: {
    width: '100%',
    height: Dimensions.get('window').height,
  },
  titles: {
    marginTop: '30%',
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
  title: {
    fontSize: 40,
    fontWeight: '500',
    color: '#fff',
  },
  subtitle: {
    fontSize: 16,
    color: '#5c5e62',
  },
  subtileCity: {
    textDecorationLine: 'underline',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    position: 'absolute',
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 180,
    width: '100%',
  },
});

export default styles;
