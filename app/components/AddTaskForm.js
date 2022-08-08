import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Pressable,
  Platform,
  StyleSheet,
} from 'react-native';

import {buttonStyles} from '../styles/button';
import colors from '../styles/colors';
import {shadows} from '../styles/shadows';

export const AddTaskForm = ({onSubmit}) => {
  const [subject, setSubject] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = () => {
    onSubmit(subject, body);
    setSubject('');
    setBody('');
  };

  return (
    <View style={styles.form}>
      <View style={styles.inputs}>
        <TextInput
          value={subject}
          placeholder="Enter Subject"
          onChangeText={setSubject}
          autoCorrect={false}
          autoCapitalize="none"
          style={styles.textInput}
        />
        <TextInput
          value={body}
          placeholder="Enter Body"
          onChangeText={setBody}
          autoCorrect={false}
          autoCapitalize="none"
          style={styles.textInput}
        />
      </View>
      <Pressable onPress={handleSubmit} style={styles.submit}>
        <Text style={styles.icon}>＋</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  form: {
    marginBottom: 20,
    flexDirection: 'row',
    ...shadows,
  },
  inputs: {
    width: '85%',
    height: 110,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  textInput: {
    height: 50,
    paddingHorizontal: 15,
    paddingVertical: Platform.OS === 'ios' ? 15 : 0,
    borderRadius: 5,
    backgroundColor: colors.white,
    fontSize: 17,
  },
  submit: {
    ...buttonStyles.button,
    width: 50,
    height: 50,
    paddingHorizontal: 0,
    paddingVertical: 0,
  },
  icon: {
    ...buttonStyles.text,
  },
});
