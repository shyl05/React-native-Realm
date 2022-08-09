/* eslint-disable prettier/prettier */
import React,{useMemo} from 'react';
import {View, StyleSheet, Text, FlatList} from 'react-native';
import {Task} from '../models/Task';
import {TaskRealmContext} from '../models';
import {Card} from '@rneui/base';
import colors from '../styles/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';

const {useQuery} = TaskRealmContext;

export const Subjects = () => {
  const result = useQuery(Task);
  const tasks = useMemo(() => result.sorted('createdAt'), [result]);

  const Item = ({task}) => {
    return (
      <Card containerStyle={styles.card} wrapperStyle={styles.cardInner}>
        <Card.Title style={styles.cardTitle}>{task.subject}</Card.Title>
        <Card.Divider style={styles.cardDiv} />
        <View style={styles.cardBody}>
          <Text style={styles.cardDate}>{task.createdAt.toString()}</Text>
          <Text style={styles.cardBodyText}>{task.body}</Text>
          {task.isComplete === true ? (
            <Ionicons name="checkmark-circle" size={20} color={colors.done}/>
          ) : (
            <Ionicons name="close-circle" size={20} color={colors.danger}/>
          )}
        </View>
      </Card>
    );
  };

  return (
    <FlatList
      data={tasks}
      renderItem={({item}) => (
        <Item task={item} />
      )}
      keyExtractor={(task) => task._id}
    />
  );
};

const styles = StyleSheet.create({
  card:{
    borderColor: colors.header,
    padding: 0,
    margin: 20,
  },
  cardInner:{
    padding: 0,
  },
  cardTitle:{
    fontSize : 18,
    fontWeight: 'bold',
    backgroundColor: colors.header,
    color: colors.white,
    padding: 0,
    marginBottom: 0,
  },
  cardDiv:{
    marginBottom: 0,
    color: colors.white,
    backgroundColor: colors.header,
  },
  cardBody: {
    marginTop: 0,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardDate:{
    color: colors.gray,
    fontSize: 10,
  },
  cardBodyText: {
    fontSize: 16,
  },
});
