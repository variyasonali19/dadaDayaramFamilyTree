import TreeView from 'react-native-animated-tree-view';
import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  Image,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {Avatar, Card, Chip, icon} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';

import {database} from './DatabasePrajapati';

import {IMAGENAME} from '../src/Images';
import Appbar from './Appbar';
export default class TestAnimation extends Component {
  // //   handling navigation on bootom buttons
  // handleNavigatetoHome = () => {
  //   this.props.navigation.navigate('selectMemberScreen');
  // };
  // handleNavigatetoFamilyTree = () => {
  //   this.props.navigation.navigate('TestAnimation');
  // };
  // handleNavigatetoFeedback = () => {
  //   this.props.navigation.navigate('FeedbackForm');
  // };
  render() {
    return (
      <ImageBackground
        source={IMAGENAME.backgroundYellow}
        style={{width: '100%', height: '100%', opacity: 1}}>
        <ScrollView>
          <View>
            {/* <Appbar title={'Dada Dayaram Family Tree'} /> */}

            <TreeView
              data={database}
              containerStyle={{}}
              textStyle={styles.treeText}
              // rightImage

              onClick={e => {
                let whoClicked = '';
                if (e.sex == 'male') {
                  this.whoclicked = 'nameMaleClicked';
                } else {
                  this.whoclicked = 'nameFaleClicked';
                }
                // console.log(
                //   'value of iiiiiiiiiiiiii in test animation',
                //   JSON.stringify({e, ...this.whoclickedObj}),
                // );
                //making  key value pair obj to push it into e
                // let whoclickedObj = {whoclicked: this.whoclicked};
                // e.push('whoclicked', this.whoclicked);
                //  can not use e.whoclicked as its value is dynamic
                // can not use e.push as its an object..
                e['whoclicked'] = this.whoclicked;
                console.log(
                  'value of iiiiiiiiiiiiii in test animation',
                  JSON.stringify(e),
                );
                console.log(
                  'value of iiiiiiiiiiiiii in test animation',
                  JSON.stringify(e),
                );

                this.props.navigation.navigate('DetailPerson', {
                  item: e,
                  name: e.name,
                });
              }}
              textStyle={styles.treeText}
              listContainerStyle={{}}
              rightImage={IMAGENAME.ArrowIcon}
              rightImageStyle={{
                height: 30,
                fontweight: 'bold',

                width: 20,
                borderRadius: 400 / 2,
              }}
              // listItemStyle={{fontWeight: 'bold'}}

              leftImage={IMAGENAME.flower}
              leftImageStyle={{height: 30, width: 30, borderRadius: 400 / 2}}
            />
          </View>
        </ScrollView>
        {/* Bottom Button for Home and Full tree */}
        {/* <View style={styles.bottomView}> */}
        {/* Home Bottom Button View  */}
        {/* <View style={styles.bottomBtnView}>
            <Icon
              name="home"
              size={30}
              color="#d9217e"
              onPress={() => this.handleNavigatetoHome()}
            />
          </View> */}
        {/* full family tree bottom view */}
        {/* <View style={styles.bottomBtnView}>
            <Icon
              name="pagelines"
              size={30}
              color="#d9217e"
              onPress={() => this.handleNavigatetoFamilyTree()}
            />
          </View> */}
        {/* Feddback bottom view */}
        {/* <View style={styles.bottomBtnView}>
            <Icon
              name="comments"
              size={30}
              color="#d9217e"
              onPress={() => this.handleNavigatetoFeedback()}
            />
          </View>
        </View> */}
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  treeView: {
    marginLeft: 10,

    backgroundColor: 'white',
    borderRadius: 50,
    // width: 295,
    // alignItems: 'center',
  },
  treeText: {fontWeight: 'bold', marginLeft: 5, fontFamily: '', fontSize: 20},
  // bottomView: {
  //   // backgroundColor: 'white',
  //   // textAlign: 'center',
  //   elevation: 2,
  //   // borderWidth: 1,
  //   // alignItems: 'center',
  //   flexDirection: 'row',
  //   alignContent: 'space-between',
  // },
  // bottomBtnView: {
  //   // backgroundColor: 'white',
  //   // flexDirection: 'row',
  //   backgroundColor: 'white',

  //   elevation: 1,
  //   // borderLeftWidth: 0.5,
  //   // borderRadius: 1,
  //   flex: 1,
  //   // flex: 1,
  //   // textAlign: 'center',
  //   alignItems: 'center',
  //   padding: 5,
  // },
});
