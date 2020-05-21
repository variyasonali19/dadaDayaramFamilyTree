import * as React from 'react';
import {
  Text,
  StyleSheet,
  View,
  Image,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
  Button,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Alert,
  Keyboard,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {IMAGENAME} from '../src/Images';
import {Avatar, Card} from 'react-native-paper';

// screens
// import SelectUser from "./SelectUser";
// import Detailtreefunction from "./Detailtreefunction";
import TestAnimation from './TestAnimation';
import DetailPerson from './DetailPerson';
import FeedbackForm from './FeedbackForm';
// import ParentsDetails from "./ParentsDetails";
import selectMemberScreen from './selectMemberScreen';
import Appbar from './Appbar';

const Stack = createStackNavigator();

function Route() {
  return (
    <Stack.Navigator
      initialRouteName="selectMemberScreen"
      screenOptions={{
        headerTitleAlign: 'center',
        headerStyle: {
          // backgroundColor: "white",
          // opacity: 0.9,
          // flex: 1,
          // textAlign: "center",
          // alignSelf: "center",
        },
        // headerTintColor: "black",
        headerTitleStyle: {
          fontWeight: 'bold',
          // color: '#346c00',
          fontSize: 28,
          headerTitleAlign: 'center',

          // alignSelf: "center",
          // flex: 1,
          // textAlign: "center",
        },
        // cardStyle: { backgroundColor: "transparent" },
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
      }}
      // mode="modal"
      // headerMode="none"
    >
      {/* <Stack.Screen name="EachNode" component={EachNode} options={{}} /> */}
      <Stack.Screen
        name="selectMemberScreen"
        component={selectMemberScreen}
        options={{
          title: 'Dada Dayaram Family',
          // headerTitleStyle: { alignItems: "center" },
          headerStyle: {
            // flex: 1,
            // backgroundColor: "white",
            // backgroundColor: '#f4511e',
            //  / alignContent: 'center',
            // alignItems: "center",
            // marginLeft: 10,
            // marginHorizontal: 15,
            // borderWidth: 12,
            // textAlign: "center",
          },
          // headerLeft: () => <View />,
          //   headerLeft: () => (
          //     // <Button
          //     //   onPress={() => alert('This is a button!')}
          //     //   title="Info"
          //     //   color="#fff"
          //     // />
          //     <View style={styles.appIconView}>
          //       <Avatar.Image size={25} source={IMAGENAME.appIcon} />
          //     </View>
          //   ),
        }}
        // options={({navigation, route}) => ({
        //   headerTitle: props => <Appbar {...props} />,
        // })}
        // options={{
        //   title: 'Dada Dayaram Family',
        //   headerTitle: props => <Appbar {...props} />,
        //   headerRight: () => (
        //     <Button
        //       onPress={() => alert('This is a button!')}
        //       title="Info"
        //       color="#fff"
        //     />
        //   ),
        // }}
      />
      <Stack.Screen
        name="TestAnimation"
        component={TestAnimation}
        options={{
          title: 'Full Family Tree',

          // headerLeft: () => (
          //   <View style={styles.appIconView}>
          //     <TouchableOpacity onPress={() => console.log('its butn')}>
          //       <Icon name="arrow-circle-left" size={30} color="#d9217e" />
          //     </TouchableOpacity>
          //   </View>
          // ),

          // headerStyle: {
          //   // flex: 1,
          //   backgroundColor: 'black',
          //   //  / alignContent: 'center',
          //   // alignItems: 'center',
          //   // marginLeft: 10,
          //   // borderWidth: 12,
          //   opacity: 0.9,
          // },
        }}
        // options={({route}) => ({title: this.route.params.name})}
      />
      <Stack.Screen
        name="DetailPerson"
        component={DetailPerson}
        // options={{title: 'My Family Information'}}
        options={({route}) => ({
          title: route.params.name.split('(')[0] + "'s Family",
        })}
      />
      <Stack.Screen
        name="FeedbackForm"
        component={FeedbackForm}
        options={{title: 'Give your feedback'}}
      />
      {/* <Stack.Screen
        name="ParentsDetails"
        component={ParentsDetails}
        options={{ title: "Welcome" }}
      /> */}
    </Stack.Navigator>
  );
}

export default Route;

const styles = StyleSheet.create({
  // appIconView: {marginLeft: 20, borderWidth: 2, padding: 0},
});
