/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Platform,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
// import SplashScreen from 'react-native-splash-screen';
import {NavigationContainer} from '@react-navigation/native';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';

// import screens
// import Home from './component/Home';
// import TreeScreen from './component/TreeScreen';
import Route from './component/Route';
import JsonToCsv from './component/JsonToCsv';
import CsvToJson from './component/CsvToJson';

// import TreeDataBase from './component/TreeDataBase';
// import SelectUser from './component/SelectUser';
// import TestTree from './component/TestTree';
// import TestAnimation from './component/TestAnimation';
// import BottomNavigatorScreen from './component/BottomNavigatorScreen';

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#3498db',
    accent: '#f1c40f',
  },
};

const App: () => React$Node = () => {
  // useEffect(() => {
  //   SplashScreen.hide();
  // });
  console.disableYellowBox = true;
  return (
    <PaperProvider theme={theme}>
      {/* <StatusBar barStyle="dark-content"/> */}
      {/* {Platform.OS === 'ios' && <StatusBar barStyle="light-content" />} */}
      <NavigationContainer>
        <Route />
      </NavigationContainer>
      {/* <JsonToCsv /> */}
      {/* <CsvToJson /> */}
    </PaperProvider>
    // <View>

    //   <TestAnimation />
    // </View>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
