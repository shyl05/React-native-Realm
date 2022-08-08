import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {TaskRealmContext} from './models';

import colors from './styles/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {AppMain} from './AppMain';
import {Subjects} from './components/Subjects';

const Tab = createBottomTabNavigator();

export const AppWrapper = () => {
  const {RealmProvider} = TaskRealmContext;

  return (
    <SafeAreaView style={styles.screen}>
      <RealmProvider>
        <NavigationContainer>
          <Tab.Navigator
            initialRouteName="Home"
            screenOptions={() => ({
              tabBarActiveTintColor: colors.header,
              tabBarInactiveTintColor: 'gray',
              tabBarOptions: {
                showIcon: true,
              },
              headerStyle: {
                backgroundColor: colors.header,
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            })}>
            <Tab.Screen
              name="Home"
              component={AppMain}
              options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({color, size}) => (
                  <Ionicons name="home-outline" color={color} size={size} />
                ),
              }}
            />
            <Tab.Screen
              name="Subjects"
              component={Subjects}
              options={{
                tabBarLabel: 'Subjects',
                tabBarIcon: ({color, size}) => (
                  <Ionicons name="layers-outline" color={color} size={size} />
                ),
              }}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </RealmProvider>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
