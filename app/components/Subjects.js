/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export const Subjects = () => {
  return (
    <View style={styles.content}>
      <Text style={styles.paragraph}>
        Subjects
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  paragraph: {
    marginVertical: 10,
    textAlign: 'center',
    color: 'black',
    fontSize: 17,
    fontWeight: '500',
  },
});
