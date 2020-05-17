import {Avatar, Card, Chip, icon, BottomNavigation} from 'react-native-paper';
import Route from './Route.js';
import selectMemberScreen from './selectMemberScreen';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer, StackActions} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TestAnimation from './TestAnimation';
import Icon from 'react-native-vector-icons/FontAwesome';
// screens
import FeedbackForm from './FeedbackForm';
import RouteTree from './RouteTree';
const Tab = createBottomTabNavigator();
const BottomNavigatorScreen = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home';
          } else if (route.name === 'FamilyTree') {
            iconName = focused ? 'pagelines' : 'pagelines';
          }

          // You can return any component that you like here!
          //   return <Ionicons name={iconName} size={size} color={color} />;
          return <Icon name={iconName} size={25} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#d9217e',
        inactiveTintColor: 'gray',
      }}>
      <Tab.Screen
        name="Home"
        component={Route}
        onPress={() => navigation.dispatch(StackActions.push('Home'))}
      />
      <Tab.Screen name="FamilyTree" component={RouteTree} />
    </Tab.Navigator>
  );
};

export default BottomNavigatorScreen;

const styles = StyleSheet.create({});
