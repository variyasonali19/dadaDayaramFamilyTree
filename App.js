/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState} from 'react';
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
import {Avatar, Card} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import {IMAGENAME} from './src/Images';

// import SplashScreen from 'react-native-splash-screen';
import {NavigationContainer} from '@react-navigation/native';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';

// import screens
// import Home from './component/Home';
// import TreeScreen from './component/TreeScreen';
import Route from './component/Route';
import JsonToCsv from './component/JsonToCsv';
import CsvToJson from './component/CsvToJson';
import storage from '@react-native-firebase/storage';
// import FireBaseLogin from './component/FireBaseLogin';

import AsyncImage from './component/AsyncImage';
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
  const [show, setShow] = useState(true);
  // useEffect(() => {
  //   console.log('useEffect called');
  //   setTimeout(console.log('Icon'), 10000);
  // }, []);

  function myFunction() {
    setTimeout(alertFunc, 1000);
  }
  function alertFunc() {
    // alert('Hello!');
    setShow(false);
  }
  // const showIcon = () => {
  //   console.log('useEffect called');
  //   // setShow(false);
  // };
  console.disableYellowBox = true;
  return (
    <PaperProvider theme={theme}>
      {show && myFunction()}
      {show && (
        <View style={styles.container}>
          <View style={styles.iconNImageView}>
            <View style={styles.iconImage}>
              <Avatar.Image size={80} source={IMAGENAME.appIcon} />
            </View>
            <View style={styles.textView}>
              <Text style={styles.text}>DadaDayaram </Text>
              <Text style={{fontSize: 18, fontFamily: ''}}>Family Tree</Text>
            </View>
          </View>
        </View>
      )}
      {/* <StatusBar barStyle="dark-content"/> */}
      {/* {Platform.OS === 'ios' && <StatusBar barStyle="light-content" />} */}
      {!show && (
        <NavigationContainer>
          <Route />
        </NavigationContainer>
      )}
      {/* <AsyncImage /> */}
      {/* <FireBaseLogin /> */}
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
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  iconNImageView: {
    padding: 'auto',
    // borderWidth: 5,
  },
  iconImage: {alignItems: 'center'},
  textView: {padding: 'auto', marginTop: 10, alignItems: 'center'},
  text: {fontWeight: 'bold', fontSize: 28, fontFamily: ''},
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
