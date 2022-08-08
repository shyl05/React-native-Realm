import React from 'react';
import {View, Text, Pressable, StyleSheet} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';

import {shadows} from '../styles/shadows';
import colors from '../styles/colors';

export const TaskItem = React.memo(({task, onToggleStatus, onDelete}) => {
  return (
    <View style={styles.task}>
      <Pressable
        onPress={onToggleStatus}
        style={[styles.status, task.isComplete && styles.completed]}>
        {task.isComplete ? (
          <Ionicons name="play-circle-outline" size={40} color={colors.white} />
        ) : (
          <Ionicons
            name="pause-circle-outline"
            size={40}
            color={colors.black}
          />
        )}
      </Pressable>
      <View style={styles.descriptionContainer}>
        <Text numberOfLines={1} style={styles.subject}>
          {task.subject}
        </Text>
        <Text numberOfLines={1} style={styles.description}>
          {task.body}
        </Text>
        <Text numberOfLines={1} style={styles.date}>
          {task.createdAt.toString()}
        </Text>
      </View>
      <Pressable onPress={onDelete} style={styles.deleteButton}>
        <Ionicons
          name="trash-outline"
          color={styles.deleteButton.color}
          size={styles.deleteButton.fontSize}
        />
      </Pressable>
    </View>
  );
});

const styles = StyleSheet.create({
  task: {
    height: 100,
    alignSelf: 'stretch',
    flexDirection: 'row',
    marginVertical: 8,
    backgroundColor: colors.white,
    borderRadius: 5,
    ...shadows,
  },
  descriptionContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  subject: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingHorizontal: 10,
    color: colors.header,
  },
  description: {
    paddingHorizontal: 10,
    color: colors.black,
    fontSize: 17,
  },
  date: {
    paddingHorizontal: 10,
    color: colors.gray,
    fontSize: 14,
  },
  status: {
    width: 50,
    height: '100%',
    justifyContent: 'center',
    paddingHorizontal: 5,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    backgroundColor: colors.gray,
  },
  completed: {
    backgroundColor: colors.header,
  },
  deleteButton: {
    justifyContent: 'center',
    color: colors.danger,
    fontSize: 30,
    paddingHorizontal: 5,
  },
  icon: {
    color: colors.white,
    textAlign: 'center',
    fontSize: 17,
    fontWeight: 'bold',
  },
});
