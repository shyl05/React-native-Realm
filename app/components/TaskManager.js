import React, {useCallback} from 'react';
import {View, StyleSheet} from 'react-native';
import {Task} from '../models/Task';
import {TaskRealmContext} from '../models';
import {IntroText} from './IntroText';
import {AddTaskForm} from './AddTaskForm';
import TaskList from './TaskList';

const {useRealm} = TaskRealmContext;

export const TaskManager = ({tasks}) => {
  const realm = useRealm();

  const handleAddTask = useCallback(
    (subject, body, type) => {
      if (!subject && !body && !type) {
        return;
      }

      realm.write(() => {
        realm.create('Task', Task.generate(subject, body, type));
      });
    },
    [realm],
  );

  const handleToggleTaskStatus = useCallback(
    task => {
      realm.write(() => {
        task.isComplete = !task.isComplete;
      });
    },
    [realm],
  );

  const handleDeleteTask = useCallback(
    task => {
      realm.write(() => {
        realm.delete(task);
      });
    },
    [realm],
  );

  return (
    <View style={styles.content}>
      <AddTaskForm onSubmit={handleAddTask} />
      {tasks.length === 0 ? (
        <IntroText />
      ) : (
        <TaskList
          tasks={tasks}
          onToggleTaskStatus={handleToggleTaskStatus}
          onDeleteTask={handleDeleteTask}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 20,
  },
});
