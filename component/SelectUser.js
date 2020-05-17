import React, {component, useState, useEffect} from 'react';

import {Text, TouchableOpacity, Button, StyleSheet, View} from 'react-native';
// import {Database} from './Database';
import Appbar from './Appbar';
// import screens
import DetailTree from './DetailTree';
import {database} from './DatabasePrajapati';

const SelectUser = () => {
  const [dataInObject, setDataInObject] = useState([]);

  const [showGetView, setShowGetView] = useState(true);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    // document.title = `You clicked ${count} times`;
    getDatabaseFormat(database[0]);
    // getView();
  });

  let getView = () => {
    if (dataInObject) {
      return dataInObject.map(item => {
        return (
          <View>
            <Text>{item}</Text>
          </View>
        );
      });
    }
  };
  // let toUpdate = () => {
  //   setShowGetView(false);
  // };
  return (
    <View>
      {/* {showGetView && toUpdate()} */}
      {getView()}

      <Text>hi</Text>
    </View>
  );
};

export default SelectUser;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'red',
  },
  itemView: {
    flexDirection: 'column',
    // padding: 20,
    alignItems: 'center',
    margin: 20,
    flex: 1,
  },
  rootView: {
    flexDirection: 'column',
    // padding: 20,
    alignItems: 'center',
  },
  root: {
    // flex: 1,
    // padding: 10,
    // margin: 5,
  },
});
