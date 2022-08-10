import React, {useCallback, useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {Task} from '../models/Task';
import {TaskRealmContext} from '../models';
import {IntroText} from './IntroText';
import {AddTaskForm} from './AddTaskForm';
import TaskList from './TaskList';
import {Button, Dialog, Divider} from '@rneui/base';
import colors from '../styles/colors';

const {useRealm} = TaskRealmContext;

export const TaskManager = ({tasks}) => {
  const realm = useRealm();

  const [visible, setVisible] = useState(false);

  const toggleDialog = () => {
    setVisible(!visible);
  };

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
      <Button
        title="Add New Task"
        onPress={toggleDialog}
        buttonStyle={styles.addBtn}
        icon={{name: 'add-circle-outline'}}
        iconContainerStyle={styles.addBtnIcon}
      />
      {tasks.length === 0 ? (
        <IntroText />
      ) : (
        <TaskList
          tasks={tasks}
          onToggleTaskStatus={handleToggleTaskStatus}
          onDeleteTask={handleDeleteTask}
        />
      )}
      <Dialog
        isVisible={visible}
        onBackdropPress={toggleDialog}
        overlayStyle={styles.dialogInner}>
        <Dialog.Title title="Add New" titleStyle={styles.dialogTitle} />
        <Divider color={colors.header} style={styles.dialogDiv} />
        <AddTaskForm onSubmit={handleAddTask} />
      </Dialog>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    paddingTop: 10,
    paddingHorizontal: 20,
  },
  addBtn: {
    color: colors.white,
    backgroundColor: colors.header,
  },
  addBtnIcon: {
    color: colors.white,
  },
  dialogDiv: {
    marginBottom: 10,
  },
  dialogInner: {
    backgroundColor: colors.white,
  },
  dialogTitle: {
    color: colors.header,
  },
});
