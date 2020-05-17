import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import {Colors} from '../Colors';
import {Avatar, Card, Title, Paragraph, Button} from 'react-native-paper';

const Appbar = props => {
  console.log('props passed in Appbar' + JSON.stringify(props.navigation));
  console.log('props passed in Appbar ptops' + JSON.stringify(props));

  return (
    <View style={styles.container}>
      <View style={styles.headerLeft}>
        <View style={styles.iconView}>
          {/* <Icon name="home" size={26} color="white" onPress={props.goToHome} /> */}
        </View>
        <View style={styles.titleView}>
          <Title style={styles.title}>{props.children}</Title>
        </View>
      </View>
      {/* <View style={styles.headerRight}>
        <Icon
          name="search"
          // size={20}
          style={styles.Icon}
          onPress={() => navigate('DrawerOpen')}
        />
        <Icon
          name="user"
          style={styles.Icon}
          onPress={() => props.navigation.navigate('AddTodo')}
        />
      </View> */}
      {/* <Appbar.Header style={styles.appbarHeader}>
         <Icon
            name="three-bars"
            style={styles.hamburgerIcon}
            onPress={() => navigation.navigate('HomeScreen')}
          /> 
        <Icon name="home" size={30} color="red" />;
        <Appbar.Content style={{Color: 'red'}} title="ToDo" />
        <Icon
          name="search"
          style={styles.Icon}
          onPress={() => navigate('DrawerOpen')}
        />
        <Icon
          name="ellipsis"
          style={styles.ellipsis}
          onPress={() => navigate('DrawerOpen')}
        />
      </Appbar.Header> */}
    </View>
  );
};

export default Appbar;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // alignItems: 'flex-start',
    // alignItems: 'center',

    // flexDirection: 'row',
    // backgroundColor: '#890c66',
    backgroundColor: 'transparent',
    // borderRadius: 25,
    borderWidth: 0.4,
    // elevation: 2,
    // opacity: 0.7,
    // elevation: 12,
  },

  headerLeft: {margin: 10, alignItems: 'center', flexDirection: 'row'},
  titleView: {
    // alignItems: 'center',
    // paddingLeft: 10,
  },
  title: {color: 'black', opacity: 0.8, fontSize: 27, fontWeight: 'bold'},
  // headerRight: {flex: 1, flexDirection: 'row', marginLeft: 155},
  // iconView: {
  //   alignItems: 'center',
  // },
  // Icon: {
  //   color: 'white',
  //   fontSize: 25,
  //   alignItems: 'center',
  //   // padding: 15,
  // },
});
