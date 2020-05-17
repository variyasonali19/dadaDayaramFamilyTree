import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
// screens
import SelectUser from './SelectUser';
import Detailtreefunction from './Detailtreefunction';
import TestAnimation from './TestAnimation';
import DetailPerson from './DetailPerson';

import ParentsDetails from './ParentsDetails';
import selectMemberScreen from './selectMemberScreen';
const Stack = createStackNavigator();

function RouteTree() {
  return (
    <Stack.Navigator
      initialRouteName="TestAnimation"
      screenOptions={
        {
          // cardStyle: {backgroundColor: 'transparent'},
          // cardOverlayEnabled: true,
          // cardStyleInterpolator: ({current: {progress}}) => ({
          //   cardStyle: {
          //     opacity: progress.interpolate({
          //       inputRange: [0, 0.5, 0.9, 1],
          //       outputRange: [0, 0.25, 0.7, 1],
          //     }),
          //   },
          //   overlayStyle: {
          //     opacity: progress.interpolate({
          //       inputRange: [0, 1],
          //       outputRange: [0, 0.5],
          //       extrapolate: 'clamp',
          //     }),
          //   },
          // }),
        }
      }
      // mode="modal"
      headerMode="none">
      {/* <Stack.Screen name="EachNode" component={EachNode} options={{}} /> */}

      <Stack.Screen
        name="TestAnimation"
        component={TestAnimation}
        options={{}}
      />
      <Stack.Screen
        name="DetailPerson"
        component={DetailPerson}
        options={{title: 'Family Tree'}}
      />
      {/* <Stack.Screen
        name="ParentsDetails"
        component={ParentsDetails}
        options={{title: 'Welcome'}}
      /> */}
    </Stack.Navigator>
  );
}

export default RouteTree;
