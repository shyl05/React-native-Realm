import React, {useState, useRef} from 'react';
import SelectDropdown from 'react-native-select-dropdown';
import Ionicons from 'react-native-vector-icons/Ionicons';

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
  const [type, setType] = useState('');
  const dropdownRef = useRef({});

  const typeSelect = [
    'Medical',
    'Fitness',
    'Study',
    'Work',
    'Technology',
    'Environment',
    'Food',
    'Entertainment',
    'Sports',
    'Social',
  ];

  const handleSubmit = () => {
    onSubmit(subject, body, type);
    setSubject('');
    setBody('');
    dropdownRef.current.reset();
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
        <SelectDropdown
          data={typeSelect}
          defaultButtonText={'Type'}
          ref={dropdownRef}
          buttonStyle={styles.select}
          onSelect={selectedItem => {
            setType(selectedItem);
          }}
          buttonTextAfterSelection={(selectedItem, index) => {
            return selectedItem;
          }}
          rowTextForSelection={(item, index) => {
            return item;
          }}
          renderDropdownIcon={() => (
            <Ionicons name="chevron-down-sharp" size={30} />
          )}
          dropdownIconPosition={'left'}
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
    marginBottom: 10,
    flexDirection: 'row',
    backgroundColor: colors.white,
  },
  inputs: {
    width: '85%',
    height: 180,
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
    color: colors.header,
    textDecorationLine: 'none',
    borderColor: colors.header,
    borderWidth: 1,
  },
  submit: {
    ...buttonStyles.button,
    width: '15%',
    height: 50,
    paddingHorizontal: 0,
    paddingVertical: 0,
  },
  icon: {
    ...buttonStyles.text,
  },
  select: {
    width: '100%',
    borderColor: colors.header,
    borderWidth: 1,
  },
});
