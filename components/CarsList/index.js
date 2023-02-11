import { FlatList, Text, View, Dimensions } from 'react-native';
import React from 'react';
import CarItem from '../CarItems';
import Styles from './styles';

import cars from './cars.js';

const CarsList = (props) => {
  return (
    <View style={Styles.container}>
      <FlatList
        snapToAlignment={'start'}
        decelerationRate={'fast'}
        showsVerticalScrollIndicator={false}
        snapToInterval={Dimensions.get('window').height}
        data={cars}
        renderItem={({ item }) => <CarItem car={item} />}
      />
    </View>
  );
};

export default CarsList;
