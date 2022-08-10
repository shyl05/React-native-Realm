/* eslint-disable prettier/prettier */
import React,{useMemo,useCallback} from 'react';
import {StyleSheet, Text, ScrollView, Alert} from 'react-native';
import {Task} from '../models/Task';
import {TaskRealmContext} from '../models';
import {ListItem, Button} from '@rneui/themed';
import colors from '../styles/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';

const {useQuery} = TaskRealmContext;
const {useRealm} = TaskRealmContext;

export const Subjects = () => {
  const result = useQuery(Task);
  const realm = useRealm();
  const tasks = useMemo(() => result.sorted('createdAt'), [result]);

  const handleDeleteTask = useCallback(
    task => {
      realm.write(() => {
        realm.delete(task);
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

  return (
    <ScrollView style={styles.content}>
      {tasks.map((task)=>{
        let iconType;
        switch (task.type){
          case 'Medical':
            iconType = 'bandage-outline';
            break;
          case 'Fitness':
            iconType = 'barbell-sharp';
            break;
          case 'Study':
            iconType = 'book-outline';
            break;
          case 'Work':
            iconType = 'briefcase-outline';
            break;
          case 'Technology':
            iconType = 'bulb-outline';
            break;
          case 'Environment':
            iconType = 'earth-outline';
            break;
          case 'Food':
            iconType = 'fast-food-outline';
            break;
          case 'Entertainment':
            iconType = 'film-outline';
            break;
          case 'Sports':
            iconType = 'football';
            break;
          case 'Social':
            iconType = 'logo-instagram';
            break;
          default:
            iconType = 'help-outline';
        }

        let taskStatus;
        let taskColor;
        if (task.isComplete){
          taskStatus = 'check';
          taskColor = colors.done;
        }
        else {
          taskStatus = 'info';
          taskColor = colors.black;
        }
        return (
          <ListItem.Swipeable
            key={task._id}
            leftContent={() => (
                <Button
                  title="Status"
                  onPress={() => handleToggleTaskStatus(task)}
                  icon={{ name: taskStatus, color: colors.white }}
                  buttonStyle={{ minHeight: '100%', backgroundColor:taskColor }}
                />
              )}
            rightContent={(reset) => (
              <Button
                title="Delete"
                onPress={() => handleDeleteTask(task)}
                icon={{ name: 'delete', color: colors.white }}
                buttonStyle={{ minHeight: '100%', backgroundColor: colors.danger }}
              />
          )}>
            <Ionicons name={iconType} size={25} color={colors.header} />
            <ListItem.Content>
              <ListItem.Title>{task.subject}</ListItem.Title>
              <Text>{task.body}</Text>
            </ListItem.Content>
            <ListItem.Chevron />
          </ListItem.Swipeable>
        );
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
content:{
  marginTop: 10,
},
});
