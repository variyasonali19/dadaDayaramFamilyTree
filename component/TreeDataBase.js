import React, {Component} from 'react';
import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';

import {Database} from './Database';

export default class TreeDataBase extends Component {
  getRoot = Database => {
    console.log('getdata called');
    return Database.map(item => {
      if (item.motherId === 'root')
        return (
          <View key={item.id} style={styles.root}>
            <Text>{item.name}</Text>
          </View>
        );
    });
  };
  getChildren = () => {};
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.rootView}>{this.getRoot(Database)}</View>>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'red',
  },

  rootView: {
    flexDirection: 'row',
    padding: 20,
    alignItems: 'flex-end',
  },
  root: {
    flex: 1,
    padding: 10,
    margin: 5,
  },
});
