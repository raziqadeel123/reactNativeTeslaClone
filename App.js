import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import CarItem from './components/CarItems';
import CarsList from './components/CarsList';
import Header from './components/Header';

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <CarsList />
      {/* <CarItem
        name={'model X'}
        tagline={'Order Online for'}
        taglineCity={'touchless delivery'}
        image={require('./assets/images/Tesla-img.jpg')}
      /> */}
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
