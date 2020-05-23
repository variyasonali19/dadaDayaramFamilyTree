import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import firebase from 'firebase';
let databasePraja;
const FireBaseLogin = () => {
  useEffect(() => {
    // writeUserData('email', 'fname', 'lname');
    readUserData();
  }, []);

  const writeUserData = (email, fname, lname) => {
    firebase
      .database()
      .ref('Users/')
      .set({
        email,
        fname,
        lname,
      })
      .then(data => {
        //success callback
        console.log('data ', data);
      })
      .catch(error => {
        //error callback
        console.log('error ', error);
      });
  };
  const readUserData = () => {
    firebase
      .database()
      .ref('userData/')
      .once('value', function(snapshot) {
        console.log(snapshot.val());
      });
  };
  return (
    <View>
      <Text />
    </View>
  );
};

export default FireBaseLogin;

const styles = StyleSheet.create({});
