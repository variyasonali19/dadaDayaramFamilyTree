/**
 * @format
 */
import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import firebase from 'firebase';
// Add the Firebase services that you want to use
import 'firebase/auth';
import 'firebase/firestore';
// firebase.initializeApp(config);
//

// Initialize the default app
// TODO: Replace the following with your app's Firebase project configuration
// var app = firebase.app();

// const firebaseConfig = {
//   apiKey: 'AIzaSyCS0_q5mxJECM_EIg2mPacy_AN82jbrt_M',
//   authDomain: 'rnfamilytreedada.firebaseapp.com',
//   databaseURL: 'https://rnfamilytreedada.firebaseio.com',
//   projectId: 'rnfamilytreedada',
//   storageBucket: 'rnfamilytreedada.appspot.com',
//   messagingSenderId: '974806330707',
//   appId: '1:974806330707:web:81921ac9ead9a3b02145a6',
//   measurementId: 'G-7TGW4R36BY',
// };
const config = {
  databaseURL: 'https://rnfamilytreedada.firebaseio.com/',
  projectId: 'rnfamilytreedada',
  //   storageBucket: 'rnfamilytreedada.appspot.com',
};
firebase.initializeApp(config);
// Initialize Firebase
// firebase.initializeApp(firebaseConfig);
// firebase.auth().signInAnonymously();
// var app = firebase.app();
// console.log('app' + app);

//
// const config = {
//   apiKey: 'AIzaSyCS0_q5mxJECM_EIg2mPacy_AN82jbrt_M',

//   databaseURL: 'https://rnfamilytreedada.firebaseio.com/',
//   projectId: 'rnfamilytreedada',
//   // storageBucket: 'rnfamilytreedada.appspot.com',
// };

// if (!firebase.apps.length) {
//   //   firebase.initializeApp(firebaseConfig);

//   firebase.initializeApp(config);
// }
// Set the configuration for your app
// TODO: Replace with your app's config object
// const firebaseConfig = {
// apiKey: 'AIzaSyCS0_q5mxJECM_EIg2mPacy_AN82jbrt_M',
//   authDomain: 'rnfamilytreedada.firebaseapp.com',
//   databaseURL: 'https://rnfamilytreedada.firebaseio.com',
//   projectId: 'rnfamilytreedada',
//   storageBucket: 'rnfamilytreedada.appspot.com',
//   messagingSenderId: '974806330707',
//   appId: '1:974806330707:web:81921ac9ead9a3b02145a6',
//   measurementId: 'G-7TGW4R36BY',
// };
// if (!firebase.apps.length) {
//   firebase.initializeApp(firebaseConfig);
// }

// firebase.analytics();
// if (!firebase.apps.length) {
//   firebase.initializeApp(config);
// }

AppRegistry.registerComponent(appName, () => App);
