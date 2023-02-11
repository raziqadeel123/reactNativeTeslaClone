import { Text, View, Pressable } from 'react-native';
import React from 'react';
import styles from './styles';

const StyledButtons = (props) => {
  const { type, content, onPress } = props;

  const backgroundColor = type === 'primary' ? 'white' : 'black';
  const textColor = type === 'primary' ? 'black' : 'white';
  return (
    <View style={styles.container}>
      <Pressable
        style={[styles.button, { backgroundColor: backgroundColor }]}
        onPress={() => {
          onPress();
        }}
      >
        <Text style={[styles.text, { color: textColor }]}>{content}</Text>
      </Pressable>
    </View>
  );
};

export default StyledButtons;
