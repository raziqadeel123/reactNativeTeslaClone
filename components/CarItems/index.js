import { Text, View, ImageBackground } from 'react-native';
import React from 'react';
import styles from './styles.js';
import StyledButtons from '../Buttons';

export default function CarItem(props) {
  const { name, tagline, image, taglineCity } = props.car;
  return (
    <View style={styles.carContainer}>
      <ImageBackground source={image} style={styles.image} />
      <View style={styles.titles}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subtitle}>
          {tagline} <Text style={styles.subtileCity}>{taglineCity}</Text>
        </Text>
        <View style={styles.buttonContainer}>
          <StyledButtons
            type='primary'
            content={'Custom Order'}
            onPress={() => {
              console.warn('Custom order was pressed');
            }}
          />

          <StyledButtons
            type='secondary'
            content={'Existing Inventory'}
            onPress={() => {
              console.warn('Exisiting Inventory order was pressed');
            }}
          />
        </View>
      </View>
    </View>
  );
}
