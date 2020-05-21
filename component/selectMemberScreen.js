import React, {Component, useState, useEffect, Fragment} from 'react';

import {
  Text,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  SafeAreaView,
  TouchableWithoutFeedback,
  View,
  ImageBackground,
  Keyboard,
  Button,
  Linking,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

// import {Database} from './Database';

// import screens
// import DetailTree from "./DetailTree";
import {IMAGENAME} from '../src/Images';
import {TouchableRipple, Card, Title, Paragraph} from 'react-native-paper';
import Appbar from './Appbar';
// import {database} from './DatabasePrajapati';
import {database} from './JsonEvaluted';

import SearchableDropdown from 'react-native-searchable-dropdown';
export default class selectMemberScreen extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    // dataInObject: [],
  };
  dataInObject = [];
  //   componentWillMount() {
  //     // this.getDatabaseFormat(database[0]);
  //   }

  getDatabaseFormat = datas => {
    console.log('getDatabase called');
    // const dataFormated = [];
    // adding root member

    datas.items.map(item => {
      let whoclickedMain = '';
      let whoClickedSpouse = '';

      if (item.sex == 'male') {
        whoclickedMain = 'nameMaleClicked';
        whoClickedSpouse = 'spouceFemaleClicked';
      } else {
        whoclickedMain = 'nameFemaleClicked';
        whoClickedSpouse = 'spouceMaleClicked';
      }
      this.dataInObject.push(
        {
          id: item.value,
          name: item.name + '(' + item.home + ')',
          whoclicked: whoclickedMain,
          dateOfBirth: item.dateOfBirth,
          sex: item.sex,
          age: item.age,
          level: item.level,
          home: item.home,
          spouce: item.spouce,
          spouceDateOfBirth: item.spouceDateOfBirth,
          spouceAge: item.spouceAge,
          spouceHome: item.spouceHome,
          imagePath: item.imagePath,
          imagePathSpouse: item.imagePathSpouse,
        },
        {
          id: item.value,
          name: item.spouce + '(' + item.spouceHome + ')',
          whoclicked: whoClickedSpouse,
          dateOfBirth: item.spouceDateOfBirth,
          sex: item.sex,
          age: item.age,
          level: item.level,
          home: item.home,
          spouce: item.name,
          spouceDateOfBirth: item.dateOfBirth,
          spouceAge: item.spouceAge,
          spouceHome: item.spouceHome,
          imagePath: item.imagePath,
          imagePathSpouse: item.imagePathSpouse,
        },
      );

      //   this.setState(prevState => ({
      //     dataInObject: [...prevState.dataInObject, dataFormated],
      //   }));
      //   this.setState({
      //     dataInObject: [...this.state.dataInObject, dataFormated],
      //   });

      if (item.items) {
        this.getDatabaseFormat(item);
      }
    });
    // console.log('valueof dataFormated+' + JSON.stringify(this.dataInObject));

    // return dataFormated;
  };
  getView = () => {
    this.getDatabaseFormat(database[0]);
    // adding root member in created object
    this.dataInObject.push({
      id: database[0].value,
      name: database[0].name + '(' + database[0].home + ')',
      whoclicked: 'nameMaleClicked',
      sex: database[0].sex,
      dateOfBirth: database[0].dateOfBirth,
      age: database[0].age,
      level: database[0].level,
      home: database[0].home,
      spouce: database[0].spouce,
      spouceAge: database[0].spouceAge,
      spouceHome: database[0].spouceHome,
      imagePath: database[0].imagePath,
      imagePathSpouse: database[0].imagePathSpouse,
    });

    if (this.dataInObject) {
      return this.dataInObject.map(item => {
        return (
          <View>
            <Text>
              {item.name}-{item.home}
            </Text>
          </View>
        );
      });
    }
  };
  //   handling navigation on bootom buttons
  handleNavigatetoHome = () => {
    this.props.navigation.navigate('selectMemberScreen');
  };
  handleNavigatetoFamilyTree = () => {
    this.props.navigation.navigate('TestAnimation');
  };
  handleNavigatetoFeedback = () => {
    this.props.navigation.navigate('FeedbackForm');
  };

  loadInBrowser = () => {
    Linking.openURL(
      'https://www.youtube.com/channel/UCKM84xsQck3vetilaBI1QZA?view_as=subscriber',
    ).catch(err => console.error("Couldn't load page", err));
  };
  render() {
    this.getView();
    return (
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : null}
        style={{flex: 1}}>
        <Fragment style={styles.container}>
          <SafeAreaView style={styles.container}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
              <View
                styles={{
                  justifyContent: 'flex-end',
                  padding: 50,
                  marginTop: 50,
                  flex: 1,
                }}>
                <ImageBackground
                  source={IMAGENAME.background}
                  style={{width: '100%', height: '100%', opacity: 0.9}}>
                  {/* <Appbar title={'Dada Dayaram Family Tree'} /> */}
                  <View
                    style={styles.searchableView}
                    keyboardShouldPersistTaps="handled">
                    <SearchableDropdown
                      onItemSelect={e => {
                        Keyboard.dismiss();
                        // have to send selectedObj based on who clicked... if spose has clicked then have to swap name and dob
                        // to send expected obj

                        let nameVal = e.name.split('(')[0];
                        let spouceVal = e.spouce;
                        let dateOfBirthSpouce = e.spouceDateOfBirth;
                        let dateOfBirthMain = e.dateOfBirth;
                        if (
                          e.whoclicked == 'spouceFemaleClicked' ||
                          e.whoclicked == 'spouceMaleClicked'
                        ) {
                          nameVal = e.spouce;
                          spouceVal = e.name.split('(')[0];
                          dateOfBirthMain = e.spouceDateOfBirth;
                          dateOfBirthSpouce = e.dateOfBirth;
                        }

                        let selectedObj = {
                          id: e.value,
                          name: nameVal,
                          whoclicked: e.whoclicked,
                          sex: e.sex,
                          dateOfBirth: dateOfBirthMain,

                          age: e.age,
                          level: e.level,
                          home: e.home,
                          spouce: spouceVal,
                          spouceAge: e.spouceAge,
                          spouceHome: e.spouceHome,
                          spouceDateOfBirth: dateOfBirthSpouce,
                          imagePath: e.imagePath,
                          imagePathSpouse: e.imagePathSpouse,
                        };
                        // const items = this.state.selectedItems;
                        // items.push(item);
                        // this.setState({selectedItems: items});
                        // eventTO.name = eventTO.name.split('(')[0];
                        console.log(
                          '*************************value of e' +
                            JSON.stringify(e),
                        );
                        console.log(
                          '*************************value of selectedObj' +
                            JSON.stringify(selectedObj),
                        );

                        this.props.navigation.navigate('DetailPerson', {
                          item: selectedObj,
                          name: e.name,
                        });
                      }}
                      containerStyle={{
                        padding: 5,
                        marginTop: 75,
                        elevation: 5,
                      }}
                      //   onRemoveItem={(item, index) => {
                      //     const items = this.state.selectedItems.filter(
                      //       sitem => sitem.id !== item.id,
                      //     );
                      //     this.setState({selectedItems: items});
                      //   }}
                      itemStyle={{
                        padding: 8,
                        marginTop: 2,
                        backgroundColor: 'white',
                        borderColor: '#bbb',
                        borderWidth: 1,
                        elevation: 5,
                        borderRadius: 50,
                      }}
                      itemTextStyle={{
                        color: 'black',
                        fontSize: 20,
                        fontWeight: 'bold',
                        paddingLeft: 15,
                      }}
                      itemsContainerStyle={{
                        maxHeight: 142,
                      }}
                      items={this.dataInObject}
                      //   defaultIndex={2}
                      resetValue={true}
                      textInputProps={{
                        placeholder: 'Search for family member',
                        underlineColorAndroid: 'transparent',
                        style: {
                          color: 'black',
                          elevation: 10,
                          backgroundColor: 'white',
                          fontSize: 22,
                          textAlign: 'center',
                          //   fontWeight: 'bold',
                          padding: 10,
                          borderWidth: 5,
                          borderColor: 'white',
                          borderRadius: 50,
                        },
                        // onTextChange: text => alert(text),
                      }}
                      listProps={{
                        nestedScrollEnabled: true,
                      }}
                    />
                  </View>
                  {/* owner info */}
                  <View>
                    <Card style={styles.ownerInfoCard}>
                      {/* <Card.Title title="Design and Created By" subtitle="Owner Info" /> */}
                      <Card.Content>
                        <View style={styles.ownerInfoView}>
                          <View style={styles.ownerInfoSubView}>
                            <Text style={styles.ownerCardText}>Designer</Text>
                            <Paragraph style={styles.ownerCardSubText}>
                              Vishal
                            </Paragraph>
                          </View>
                          <View style={styles.ownerInfoSubView}>
                            <Text style={styles.ownerCardText}>Developer</Text>

                            <Paragraph style={styles.ownerCardSubText}>
                              Sonali
                            </Paragraph>
                          </View>
                          <View style={styles.ownerInfoSubView}>
                            <Text style={styles.ownerCardText}>Concept</Text>
                            <Paragraph style={styles.ownerCardSubText}>
                              Chirag
                            </Paragraph>
                          </View>
                        </View>
                      </Card.Content>
                    </Card>
                  </View>
                  {/* Bottom Button for Home and Full tree */}
                  <View style={styles.bottomView}>
                    {/* full family tree bottom view */}
                    <View style={styles.bottomBtnView}>
                      <Icon
                        name="pagelines"
                        size={30}
                        // color="#d9217e"
                        color="#346c00"
                        onPress={() => this.handleNavigatetoFamilyTree()}
                      />
                    </View>
                    {/* info Bottom Button View  */}
                    <View style={styles.bottomBtnView}>
                      <Icon
                        name="question-circle"
                        size={32}
                        // color="#d9217e"
                        color="#346c00"
                        onPress={() => this.loadInBrowser()}
                      />
                    </View>
                    {/* Feddback bottom view */}
                    <View style={styles.bottomBtnView}>
                      <Icon
                        name="comments"
                        size={30}
                        // color="#d9217e"
                        color="#346c00"
                        onPress={() => this.handleNavigatetoFeedback()}
                      />
                    </View>
                  </View>
                </ImageBackground>
              </View>
            </TouchableWithoutFeedback>
          </SafeAreaView>
        </Fragment>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {display: 'flex'},
  searchableView: {
    flex: 1,
    marginHorizontal: 5,
    alignItems: 'stretch',
    borderRadius: 25,
    justifyContent: 'center',
    // flexWrap: 'wrap',
  },
  ownerInfoView: {flexDirection: 'row'},
  ownerInfoCard: {
    // backgroundColor: '#d9217e50',
    backgroundColor: 'black',
    opacity: 0.75,
    // borderRadius: 25,

    // paddingBottom: 20,
  },
  ownerInfoSubView: {
    // borderWidth: 1,
    flex: 1,
    alignItems: 'center',
    alignContent: 'space-around',
  },

  ownerCardText: {
    fontWeight: 'bold',
    fontFamily: '',
    color: 'white',
    fontSize: 15,
  },
  ownerCardSubText: {color: 'white'},
  bottomView: {
    // backgroundColor: 'white',
    // textAlign: 'center',
    // elevation: 2,
    // borderWidth: 1,
    alignItems: 'center',
    flexDirection: 'row',
    // alignContent: 'space-between',
  },
  bottomBtnView: {
    // backgroundColor: 'white',
    // flexDirection: 'row',
    backgroundColor: 'white',

    // elevation: 1,
    // borderLeftWidth: 0.5,
    // borderRadius: 1,
    flex: 1,
    // flex: 1,
    // textAlign: 'center',
    alignItems: 'center',
    padding: 5,
  },
});
