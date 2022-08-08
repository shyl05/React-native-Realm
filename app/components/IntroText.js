import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import colors from '../styles/colors';

export const IntroText = () => {
  return (
    <View style={styles.content}>
      <Text style={styles.paragraph}>No Tasks Available</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    marginHorizontal: 20,
    justifyContent: 'center',
  },
  paragraph: {
    marginVertical: 10,
    textAlign: 'center',
    color: colors.black,
    fontSize: 17,
    fontWeight: '500',
  },
});
