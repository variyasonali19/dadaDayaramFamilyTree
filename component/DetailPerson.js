import React, {Component} from 'react';
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
import moment from 'moment';
import {Avatar, Card} from 'react-native-paper';
// import screen
// import {database} from './DatabasePrajapati';
// import {database} from './JsonEvaluted';

import TreeView from 'react-native-animated-tree-view';
import Icon from 'react-native-vector-icons/FontAwesome';
import {IMAGENAME} from '../src/Images';
import Appbar from './Appbar';
// import ParentsDetails from "./ParentsDetails";
// const dismissKeyboard = require('dismissKeyboard');
export default class DetailPerson extends Component {
  constructor(props) {
    super(props);
    // Alert.alert('constructor called');
  }
  state = {
    show: true,
    totalItem: [],
    name: 'sonali',
    getParentsDetail: true,
    fatherData: [],
    showParentNode: true,
    parent: [],
    whoClicked: '',
    FatherTag: 'Father',
    MotherTag: 'Mother',
    selectedPerson: [],
    showGetSelectedPersonData: true,
  };

  spouseName = this.props.route.params.item.spouce;
  Persondt = [];
  selectedPersonVar = [];
  imagePathsForChild;

  componentWillMount() {
    // Alert.alert('compenentWillMount');
    // this.getSelectedPersonData(database[0]);

    Keyboard.dismiss();
    // this.getImages();
    this.getSelectedPersonData(this.props.route.params.databaseNavigated);
    this.getParentNode(this.props.route.params.databaseNavigated);
    // on Load of this page setting father and mother tag based on passed route from select memeber screen
    // Keyboard.addListener('keyboardDidHide');

    if (this.props.route.params.item.whoclicked) {
      this.setState({
        whoClicked: this.props.route.params.item.whoclicked,
      });
    }
    if (
      this.props.route.params.item.whoclicked == 'spouceFemaleClicked' ||
      this.props.route.params.item.whoclicked == 'spouceMaleClicked'
    ) {
      this.setState({
        FatherTag: 'Father In-law',
        MotherTag: 'Mother In-law',
      });
    } else {
      this.setState({
        FatherTag: 'Father',
        MotherTag: 'Mother',
      });
    }
  }
  componentDidMount() {
    // Keyboard.dismiss();
    // Alert.alert('componentDidMount');

    // this.props.navigation.setOptions({
    //   title: this.props.route.params.item.name + " 's Family",
    // });

    setTimeout(() => {
      Keyboard.dismiss();
    });
  }

  componentWillUnmount() {
    // Alert.alert('componentWillUnmount');

    Keyboard.dismiss();
    this.setState({
      showGetSelectedPersonData: true,
      showParentNode: true,
    });
    // Alert.alert('componentWillUnmount+showGetSelectedPersonData');
  }
  componentDidUpdate(prevProps, prevState) {
    // Alert.alert('componentWillUnmount');
    if (prevProps.route.params.item !== this.props.route.params.item) {
      this.props.navigation.setOptions({
        title: this.props.route.params.item.name + " 's Family",
      });
    }
    Keyboard.dismiss();
    if (prevState.whoClicked !== this.state.whoClicked) {
      if (
        this.state.whoClicked == 'spouceFemaleClicked' ||
        this.state.whoClicked == 'spouceMaleClicked'
      ) {
        this.setState({
          FatherTag: 'Father In-law',
          MotherTag: 'Mother In-law',
        });
      } else {
        this.setState({
          FatherTag: 'Father',
          MotherTag: 'Mother',
        });
      }
    }
  }
  getLevelOfParent = () => {
    let firstStr = this.props.route.params.item.level.substring(0, 1);
    let propLevel = Number(firstStr);
    // ////console.log('num' + propLevel);
    let level = Math.floor(propLevel);
    return level;
  };

  getSelectedPersonData = data => {
    if (data.level == this.props.route.params.item.level) {
      return (this.selectedPersonVar = data);
    } else {
      return data.items.filter(item => {
        if (item.level == this.props.route.params.item.level) {
          // console.log('value of item' + JSON.stringify(item));

          return (this.selectedPersonVar = item);
          // *****************************changed here for db
        } else if (item.hasOwnProperty('items') && item.items.length > 0) {
          this.getSelectedPersonData(item);
        }
      });
    }
    this.setState({
      showGetSelectedPersonData: false,
    });
  };
  getChildrenData = () => {
    if (this.selectedPersonVar) {
      console.log(
        'this.selectedPersonVar' + JSON.stringify(this.selectedPersonVar),
      );
      //*************** */ changed here due to db
      if (
        this.selectedPersonVar.items &&
        this.selectedPersonVar.items.length > 0
      ) {
        return this.selectedPersonVar.items.map(x => {
          {
            x.imagePath
              ? (this.imagePathsForChild =
                  'https://firebasestorage.googleapis.com/v0/b/rnfamilytreedada.appspot.com/o/imagesUser%2F' +
                  x.imagePath +
                  '?alt=media&token=067d9add-e6f8-4181-b67b-fa6777102127')
              : x.sex == 'female'
              ? (this.imagePathsForChild = IMAGENAME.girl)
              : (this.imagePathsForChild = IMAGENAME.boy);
          }
          console.log('sex is' + x.sex);
          return (
            // <View style={styles.childrenDetailView}>
            <TouchableOpacity
              onPress={() => {
                if (x.sex == 'male') {
                  this.handleNavigation('nameMaleClicked', x);
                } else {
                  this.handleNavigation('nameFemaleClicked', x);
                }
              }}>
              {/* <Card style={styles.childrenDetailCard}> */}
              <View style={styles.childrenDetailsubView}>
                <View style={styles.childrenDetailsubViewImage}>
                  {x.imagePath ? (
                    <Avatar.Image
                      size={30}
                      source={{uri: this.imagePathsForChild}}
                    />
                  ) : (
                    <Avatar.Image size={30} source={this.imagePathsForChild} />
                  )}
                </View>
                <View style={styles.childrenDetailsubViewText}>
                  <Text
                    style={{
                      fontWeight: 'bold',
                      fontFamily: '',
                      fontSize: 18,
                    }}>
                    {x.name}
                  </Text>
                </View>
              </View>
              {/* </Card> */}
            </TouchableOpacity>
            // </View>
          );
        });
      } else {
        return (
          <View style={styles.childrenDetailView}>
            <Card style={styles.childrenDetailCard}>
              <View style={{}}>
                <View style={{paddingVertical: 5}}>
                  <Text
                    style={{
                      fontSize: 18,
                      paddingHorizontal: 25,
                      fontWeight: 'bold',
                    }}>
                    No Children{'  '}
                  </Text>
                </View>
              </View>
            </Card>
          </View>
        );
      }
    }
  };

  //   getFather's deatail
  getParentsDetail = () => {
    let length = this.props.route.params.item.level.length;
    if (length == 5) {
      let fatherlevel = this.props.route.params.item.level.substring(0, 3);
      let fatherlevel1 = fatherlevel.substring(0, 1);
      let fatherlevel2 = fatherlevel.substring(2);
      let num1 = Number(fatherlevel1);
      //console.log(num1);
      let num2 = Number(fatherlevel2);
      //console.log(num2);
      let father = this.props.route.params.databaseNavigated.items[num1 - 2]
        .items[num2 - 1];
      //console.log('father is1' + JSON.stringify(father));

      this.setState({
        fatherData: father,
        showgetParentsDetail: false,
      });
      //console.log('fatherdata n' + JSON.stringify(this.state.fatherData));
    } else {
      let fatherLevel = this.props.route.params.item.level.substring(0, 1);
      let fatherNum = Number(fatherLevel);
      let father = this.props.route.params.databaseNavigated.items[fatherNum];
      //console.log('father is2' + JSON.stringify(father));
    }
  };
  //   getting parent data on based of item passed from Animation screen item of person is passed here as single onject item of person with ites item
  // to get its parent node e.g. 2.2.1 's parent will be 2.2
  // we are getting 2.2 here only onces when rendering happen
  // setting state show false so that will not call again
  // have to pass who clicked key here so that will set state whoclicked on the base of passed value
  // and when getView will called it will chose proper case..
  getParentNode = data => {
    let levelstr;

    if (this.props.route.params.item.level.length == 1) {
      // levelstr = 1;
      if (this.props.route.params.item.level == 1) {
        levelstr = 0;
      } else {
        levelstr = 1;
      }
    } else {
      levelstr = this.props.route.params.item.level.substr(
        0,
        this.props.route.params.item.level.length - 2,
      );
    }
    //console.log('levelstr in get pARENTnODE' + levelstr);
    // let levelNum=Number(levelstr);
    // *******************changed here becoz of db
    if (data.hasOwnProperty('items') && data.items.length > 0) {
      if (levelstr == 0) {
        this.setState({
          parent: {level: 0, name: 'no clue', spouce: 'no clue'},
        });
      }
      if (data.level == levelstr) {
        this.setState({
          parent: data,
        });
      } else {
        data.items.map(item => {
          this.getParentNode(item);
        });
      }
    } else {
      if (data.level == levelstr) {
        let pers;
        pers.push(data);
        //console.log('pers' + pers);
      }
    }

    //console.log('***************this.state.parent' + this.state.parent);

    this.setState({
      showParentNode: false,
    });
  };
  handleNavigation = (whoClickeds, cases) => {
    if (
      whoClickeds == 'spouceFemaleClicked' ||
      whoClickeds == 'spouceMaleClicked'
    ) {
      this.setState({
        FatherTag: 'Father In-law',
        MotherTag: 'Mother In-law',
      });
    } else {
      this.setState({
        FatherTag: 'Father',
        MotherTag: 'Mother',
      });
    }
    this.setState({
      showParentNode: true,
      show: true,
      whoClicked: whoClickeds,
      showGetSelectedPersonData: true,
    });
    // if clicked on parent name then navigate with parent id (level)
    if (cases == 1) {
      this.props.navigation.navigate('DetailPerson', {
        item: this.state.parent,
      });
    } else {
      // if clicked on parent name then navigate with parent id (level)

      this.props.navigation.navigate('DetailPerson', {
        item: cases,
      });
    }
  };
  getSubView = (
    name,
    age,
    home,
    spouce,
    sex,
    imagePathMain,
    imagePathSub,
    cases,
    level,
    dateOfBirth,
  ) => {
    // this.getSelectedPersonData(database[0], level);
    // let imagePath = require(imagepathtext);
    //console.log('date of birth', dateOfBirth);
    let imageId = this.props.route.params.item.value;

    let whoClickedhere;

    if (cases == 1) {
      whoClickedhere = 'nameFemaleClicked';
    } else if (cases == 2) {
      whoClickedhere = 'spouceFemaleClicked';
    } else if (cases == 3) {
      whoClickedhere = 'nameMaleClicked';
    } else if (cases == 4) {
      whoClickedhere = 'spouceMaleClicked';
    } else if (cases == 5) {
      if (sex == 'male') {
        whoClickedhere = 'spouceMaleClicked';
      } else if (sex == 'female') {
        whoClickedhere = 'spouceFemaleClicked';
      }
    }

    //console.log('date of birth', typeof dateOfBirth);

    let today = moment().format('DD/MM/YYYY');
    let ages;
    let ageStr;
    if (dateOfBirth == null) {
      ages = 'Not ';
      ageStr = 'Available';
    } else {
      let dateOfBirthMoment = moment().format(dateOfBirth);
      // let newDate = new Date();
      //console.log('newDate' + dateOfBirthMoment);
      // let dateOfBirthMoment = moment(dateOfBirth).format('DD/mm/YYYY');
      //console.log('today' + today);
      // //console.log('dateOfBirthMoment' + dateOfBirthMoment);
      ages = moment().diff(dateOfBirth, 'years');
      ageStr = ' years';
      if (ages < 1) {
        ages = moment().diff(dateOfBirth, 'months');
        ageStr = ' months';

        // console.log('years**' + year);
        if (ages < 1) {
          ages = moment().diff(dateOfBirth, 'days');
          ageStr = ' days';
          // console.log('years##' + year);
          if (ages == 0) {
            ages = 'Not known';
            ageStr = '';
          }
        }
      }
    }

    return (
      <View>
        <Card style={styles.personDeatailCard}>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-around',
              // alignItems: 'center',
            }}>
            {/* {console.log(
              'props  coming in detail screen',
              JSON.stringify(this.props),
            )} */}
            <View style={{flex: 2, marginLeft: 15, marginTop: 5}}>
              <Text style={styles.personDeatailName}>{name}</Text>
              <View style={{marginTop: 10}}>
                <Text style={styles.personDeatailText}>
                  Age: {ages}
                  {ageStr}
                </Text>
              </View>

              <View style={{}}>
                <Text style={styles.personDeatailText}>Place: {home}</Text>
              </View>
            </View>
            <View style={styles.imageView}>
              {/* <Image style={styles.stretch} source={IMAGENAME[imageId]} /> */}

              {/* <Avatar.Image size={120} source={require(imagePath)} /> */}
              {/* <Image style={styles.image} source={IMAGENAME.Sonali} /> */}
              {imagePathMain ? (
                <Avatar.Image
                  size={120}
                  source={{
                    uri:
                      'https://firebasestorage.googleapis.com/v0/b/rnfamilytreedada.appspot.com/o/imagesUser%2F' +
                      imagePathMain +
                      '?alt=media&token=067d9add-e6f8-4181-b67b-fa6777102127',
                  }}
                />
              ) : sex == 'female' ? (
                <Avatar.Image size={120} source={IMAGENAME.girl} />
              ) : (
                <Avatar.Image size={120} source={IMAGENAME.boy} />
              )}
            </View>
          </View>
          {spouce ? (
            // <Text style={styles.personDeatailText}>
            //   Married to {spouce}
            // </Text>
            <Card style={styles.spouseDeatailCard}>
              <TouchableOpacity
                onPress={() => this.setState({whoClicked: whoClickedhere})}>
                <View style={styles.spouseDeatailImagenTextView}>
                  <View style={styles.spouseDeatailTextView}>
                    <Text style={styles.spouseDeatailText}>
                      Married to {spouce}
                    </Text>
                  </View>

                  <View style={styles.spouseDeatailImageView}>
                    {imagePathSub ? (
                      <Avatar.Image
                        size={30}
                        source={{
                          uri:
                            'https://firebasestorage.googleapis.com/v0/b/rnfamilytreedada.appspot.com/o/imagesUser%2F' +
                            imagePathSub +
                            '?alt=media&token=067d9add-e6f8-4181-b67b-fa6777102127',
                        }}
                      />
                    ) : sex == 'female' ? (
                      <Avatar.Image size={30} source={IMAGENAME.boy} />
                    ) : (
                      <Avatar.Image size={30} source={IMAGENAME.girl} />
                    )}
                    {/* <Avatar.Image size={30} source={imagePathSub} /> */}
                  </View>
                </View>
              </TouchableOpacity>
            </Card>
          ) : (
            <Card style={styles.spouseDeatailCard}>
              <View style={styles.spouseDeatailImagenTextView}>
                <View style={styles.spouseDeatailTextView}>
                  <Text style={styles.spouseDeatailText}>Not Married Yet!</Text>
                </View>
              </View>
            </Card>
          )}
        </Card>
        {/* view of child */}
        {/* {this.selectedPersonVar && this.getChildrendataView()} */}
      </View>
    );
  };
  getViews = () => {
    //console.log(this.state.whoClicked);

    if (this.state.whoClicked == 'spouceMaleClicked') {
      return this.getSubView(
        this.props.route.params.item.spouce,
        this.props.route.params.item.spouceAge,
        this.props.route.params.item.spouceHome,
        this.props.route.params.item.name,
        'male',
        this.props.route.params.item.imagePathSpouse,
        this.props.route.params.item.imagePath,

        1,
        this.props.route.params.item.level,
        this.props.route.params.item.spouceDateOfBirth,
      );
    } else if (this.state.whoClicked == 'nameMaleClicked') {
      return this.getSubView(
        this.props.route.params.item.name,
        this.props.route.params.item.age,
        this.props.route.params.item.home,
        this.props.route.params.item.spouce,
        'male',
        this.props.route.params.item.imagePath,
        this.props.route.params.item.imagePathSpouse,
        2,
        this.props.route.params.item.level,
        this.props.route.params.item.dateOfBirth,
      );
    } else if (this.state.whoClicked == 'spouceFemaleClicked') {
      return this.getSubView(
        this.props.route.params.item.spouce,
        this.props.route.params.item.spouceAge,
        this.props.route.params.item.spouceHome,
        this.props.route.params.item.name,
        'female',
        this.props.route.params.item.imagePathSpouse,
        this.props.route.params.item.imagePath,

        3,
        this.props.route.params.item.level,
        this.props.route.params.item.spouceDateOfBirth,
      );
    } else if (this.state.whoClicked == 'nameFemaleClicked') {
      return this.getSubView(
        this.props.route.params.item.name,
        this.props.route.params.item.age,
        this.props.route.params.item.home,
        this.props.route.params.item.spouce,
        'female',

        this.props.route.params.item.imagePath,
        this.props.route.params.item.imagePathSpouse,
        4,
        this.props.route.params.item.level,
        this.props.route.params.item.dateOfBirth,
      );
    } else {
      return this.getSubView(
        this.props.route.params.item.name,
        this.props.route.params.item.age,
        this.props.route.params.item.home,
        this.props.route.params.item.spouce,
        this.props.route.params.item.sex,
        this.props.route.params.item.imagePath,
        this.props.route.params.item.imagePathSpouse,
        5,
        this.props.route.params.item.level,
        this.props.route.params.item.dateOfBirth,
      );
    }
  };
  // get children View
  getChildrendataView = () => {
    console.log(
      'getChildrendataView ' + JSON.stringify(this.selectedPersonVar),
    );
    //checking selected person has child or not
    if (this.selectedPersonVar.length > 0) {
      if (
        this.selectedPersonVar[0].hasOwnProperty('items') &&
        this.selectedPersonVar[0].items.length > 0
      ) {
        return this.selectedPersonVar[0].items.map(item => {
          return (
            <View>
              <Text>{item.name}</Text>
              <Text>here</Text>
            </View>
          );
        });
      } else {
        return (
          <View>
            <Text>has no children</Text>
          </View>
        );
      }
    }
  };
  // get Children array from passed

  //   handling navigation on bootom buttons
  // handleNavigatetoHome = () => {
  //   this.props.navigation.navigate('selectMemberScreen');
  // };
  // handleNavigatetoFamilyTree = () => {
  //   this.props.navigation.navigate('TestAnimation');
  // };
  // handleNavigatetoFeedback = () => {
  //   this.props.navigation.navigate('TestAnimation');
  // };
  render() {
    // //console.log('props' + JSON.stringify(this.props));
    // //console.log('props' + JSON.stringify(this));
    //console.log('render called');
    //console.log('this.stae.parent' + JSON.stringify(this.state.parent));
    {
      this.state.showGetSelectedPersonData &&
        this.getSelectedPersonData(this.props.route.params.databaseNavigated);
    }
    return (
      <ImageBackground
        source={IMAGENAME.background}
        style={{width: '100%', height: '100%', opacity: 0.9}}>
        <ScrollView>
          <View>
            {this.state.showParentNode &&
              this.getParentNode(this.props.route.params.databaseNavigated)}

            {/* {this.state.showChildrenData && this.getChildrenData(database[0])} */}
            {/* {this.state.show && this.getSubTree()} */}
            {/* {this.getSelectedPersonData} getSelectedPersonData */}
            {/* {this.state.getParentsDetail && this.getParentsDetail()} */}
            {/* <Appbar title={` ${this.props.route.params.item.name}'s Family`} /> */}
            {/* Detail of person */}

            <View style={styles.container}>
              <View style={{marginTop: 15}}>
                <View>{this.getViews()}</View>
              </View>

              {/* get Father Details */}

              {this.state.parent && (
                <Card style={styles.parentInfoCard}>
                  <View>
                    <View style={styles.parentInfoView}>
                      <View style={styles.firstParentSubView}>
                        {this.state.parent.sex == 'female' ? (
                          <TouchableOpacity
                            onPress={() => {
                              if (!this.state.parent.level == 0) {
                                this.handleNavigation('spouceMaleClicked', 1);
                              }
                            }}>
                            <Text style={styles.parentInfoText}>
                              {this.state.FatherTag}
                              {/* Father */}
                            </Text>
                            <View
                              style={{
                                // alignItems: 'center',
                                flexDirection: 'row',
                              }}>
                              <View style={styles.imageViewOfParent}>
                                {this.state.parent.imagePathSpouse ? (
                                  <Avatar.Image
                                    size={30}
                                    source={{
                                      uri:
                                        'https://firebasestorage.googleapis.com/v0/b/rnfamilytreedada.appspot.com/o/imagesUser%2F' +
                                        this.state.parent.imagePathSpouse +
                                        '?alt=media&token=067d9add-e6f8-4181-b67b-fa6777102127',
                                    }}
                                  />
                                ) : (
                                  <Avatar.Image
                                    size={30}
                                    source={IMAGENAME.boy}
                                  />
                                )}
                              </View>
                              <View style={styles.parentNameTextView}>
                                <Text style={styles.parentNameText}>
                                  {this.state.parent.spouce}
                                </Text>
                              </View>
                            </View>
                          </TouchableOpacity>
                        ) : (
                          <TouchableOpacity
                            onPress={() => {
                              if (!this.state.parent.level == 0) {
                                this.handleNavigation('nameMaleClicked', 1);
                              }
                            }}>
                            <Text style={styles.parentInfoText}>
                              {/* Father */}
                              {this.state.FatherTag}
                            </Text>
                            <View
                              style={{
                                // alignItems: 'center',
                                flexDirection: 'row',
                              }}>
                              <View style={styles.imageViewOfParent}>
                                {this.state.parent.imagePath ? (
                                  <Avatar.Image
                                    size={35}
                                    source={{
                                      uri:
                                        'https://firebasestorage.googleapis.com/v0/b/rnfamilytreedada.appspot.com/o/imagesUser%2F' +
                                        this.state.parent.imagePath +
                                        '?alt=media&token=067d9add-e6f8-4181-b67b-fa6777102127',
                                    }}
                                  />
                                ) : (
                                  <Avatar.Image
                                    size={30}
                                    source={IMAGENAME.boy}
                                  />
                                )}
                              </View>
                              <View style={styles.parentNameTextView}>
                                <Text style={styles.parentNameText}>
                                  {this.state.parent.name}
                                </Text>
                              </View>
                            </View>
                          </TouchableOpacity>
                        )}
                      </View>
                      <View style={styles.firstParentSubView}>
                        {/* display Mother name in parent block */}
                        {this.state.parent.sex == 'female' ? (
                          <TouchableOpacity
                            onPress={() => {
                              if (!this.state.parent.level == 0) {
                                this.handleNavigation('nameFemaleClicked', 1);
                              }
                            }}>
                            <Text style={styles.parentInfoText}>
                              {this.state.MotherTag}
                              {/* Mother */}
                            </Text>
                            <View
                              style={{
                                // alignItems: 'center',
                                flexDirection: 'row',
                              }}>
                              <View style={styles.imageViewOfParent}>
                                {this.state.parent.imagePath ? (
                                  <Avatar.Image
                                    size={30}
                                    source={{
                                      uri:
                                        'https://firebasestorage.googleapis.com/v0/b/rnfamilytreedada.appspot.com/o/imagesUser%2F' +
                                        this.state.parent.imagePath +
                                        '?alt=media&token=067d9add-e6f8-4181-b67b-fa6777102127',
                                    }}
                                  />
                                ) : (
                                  <Avatar.Image
                                    size={30}
                                    source={IMAGENAME.girl}
                                  />
                                )}
                              </View>
                              <View style={styles.parentNameTextView}>
                                <Text style={styles.parentNameText}>
                                  {this.state.parent.name}
                                </Text>
                              </View>
                            </View>
                          </TouchableOpacity>
                        ) : (
                          <TouchableOpacity
                            onPress={() => {
                              if (!this.state.parent.level == 0) {
                                this.handleNavigation('spouceFemaleClicked', 1);
                              }
                            }}>
                            <Text style={styles.parentInfoText}>
                              {this.state.MotherTag}
                              {/* Mother */}
                            </Text>
                            <View
                              style={{
                                // alignItems: 'center',
                                flexDirection: 'row',
                              }}>
                              <View style={styles.imageViewOfParent}>
                                {this.state.parent.imagePathSpouse ? (
                                  <Avatar.Image
                                    size={30}
                                    source={{
                                      uri:
                                        'https://firebasestorage.googleapis.com/v0/b/rnfamilytreedada.appspot.com/o/imagesUser%2F' +
                                        this.state.parent.imagePathSpouse +
                                        '?alt=media&token=067d9add-e6f8-4181-b67b-fa6777102127',
                                    }}
                                  />
                                ) : (
                                  <Avatar.Image
                                    size={30}
                                    source={IMAGENAME.girl}
                                  />
                                )}
                              </View>
                              <View style={styles.parentNameTextView}>
                                <Text style={styles.parentNameText}>
                                  {this.state.parent.spouce}
                                </Text>
                              </View>
                            </View>
                          </TouchableOpacity>
                        )}
                      </View>
                    </View>
                    {/* display spouse name */}
                  </View>
                </Card>
              )}
              <View style={styles.ChildrenTitleBar}>
                <Text style={styles.ChildrenTitleBarText}>Children</Text>
              </View>
            </View>
          </View>
          {/* show Childrendata */}
          <View style={styles.ChildrenTotalView}>
            <View style={styles.ChildrenTotalSubView}>
              {this.getChildrenData()}
            </View>
          </View>
        </ScrollView>
        {/* Bottom Button for Home and Full tree */}
        {/* <View style={styles.bottomView}>
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
        {/* full family tree bottom view */}
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
  container: {flex: 1},
  imageView: {
    // alignItems: 'flex-end',
    // flexDirection
    marginTop: 5,
    marginBottom: 5,
    // flex: 0,
    padding: 2,
    marginRight: 5,
  },
  image: {width: 105, height: 105, borderRadius: 105 / 2},
  ChildrenTitleBar: {
    borderRadius: 10,
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    // backgroundColor: '#e6e8e1',
    backgroundColor: 'white',
    borderWidth: 0.2,
    elevation: 15,
    //height: 40,
    // paddingTop: 5,
    // alignItems: 'center',
    marginBottom: 10,
    padding: 2,
    // textAlign: 'center',
  },
  ChildrenTitleBarText: {
    marginLeft: 5,
    fontSize: 20,
    fontWeight: 'bold',
    opacity: 0.8,
    textAlign: 'center',
  },
  personDeatailCard: {
    // backgroundColor: '#e6e8e1',
    // backgroundColor: 'transparent',

    borderWidth: 1,
    borderColor: 'grey',
    backgroundColor: 'white',
    // borderTop: 1,
    // opacity: 0.9,
    // paddingBottom: 15,
    marginLeft: 10,
    marginRight: 10,
    // elevation: 15,
    borderRadius: 35,
  },
  // spouce detail card css
  spouseDeatailCard: {
    // marginLeft: 15,
    // marginRight: 10,
    // alignItems: 'center',
    // borderWidth: 4,
    borderRadius: 35,
    // elevation: 2,
    padding: 10,

    // paddingBottom: 15,
  },
  // iamgenTextViewSpouce: { flexDirection: "row" },
  // spouseDeatailView: {
  //   // borderWidth: 1,
  //   flex: 1,
  //   padding: 5,
  //   // alignItems: 'center',
  //   // justifyContent: 'center',
  //   // borderWidth: 5,
  // },
  spouseDeatailImagenTextView: {
    flex: 1,
    paddingLeft: 5,
    alignItems: 'center',
    flexDirection: 'row',
  },
  spouseDeatailTextView: {flexWrap: 'wrap', padding: 0},
  spouseDeatailText: {fontWeight: 'bold', fontFamily: '', fontSize: 18},
  spouseDeatailImageView: {padding: 5},
  spouseDeatailCardText: {
    fontWeight: 'bold',
    fontSize: 15,
    opacity: 0.8,
    // backgroundColor: 'red',
    // borderWidth: 5,
    // paddingHorizontal: 25,

    // textAlign: 'center',
  },

  personDeatailName: {fontWeight: 'bold', fontSize: 25},
  personDeatailText: {
    fontSize: 18,
    // fontWeight: 'bold',
    color: 'black',
    opacity: 0.8,
  },
  parentInfoCard: {
    // flexDirection: 'row',
    borderWidth: 0.5,
    flex: 1,
    backgroundColor: 'white',
    marginLeft: 10,
    marginRight: 10,
    padding: 20,
    marginTop: 10,
    // opacity: 0.8,
    elevation: 2,
    borderRadius: 20,
  },

  parentInfoView: {
    flex: 1,
    flexDirection: 'row',
    // borderWidth: 2,
    // justifyContent: 'space-around',
  },
  firstParentSubView: {
    // borderWidth: 0.1,
    // padding: 20,
    flex: 1,
    // flexWrap: 'wrap',
    // borderRadius: 2,
    // elevation: 1,
  },
  parentInfoText: {
    fontSize: 18,
    // paddingBottom: 5,
    fontWeight: 'bold',
    opacity: 1,
  },
  imageViewOfParent: {
    marginRight: 5,
  },
  parentNameTextView: {marginLeft: 2, flex: 1},
  parentNameText: {fontSize: 18, fontWeight: 'bold'},
  touchableOpacity: {marginBottom: 0},
  ChildrenTotalView: {
    // flex: 1,
    // padding: 0,
    // alignContent: 'center',
    // borderWidth: 5,
  },
  ChildrenTotalSubView: {
    // backgroundColor: 'black',
    // alignContent: 'center',
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    // borderWidth: 5,
    // borderWidth: 2,
    // paddingHorizontal: 5,
    // marginLeft: 10,
    // marginRight: 10,
    // marginBottom: 5,

    justifyContent: 'center',
  },

  childrenDetailView: {
    backgroundColor: 'white',
    // flex: 0.5,
    borderWidth: 0.8,
    // marginBottom: 2,
    // backgroundColor: 'white',
    // borderR
    borderRadius: 25,
    // width: '50%',
    // flexWrap: 'wrap',
    // paddingRight: 45,
    padding: 5,
    // marginRight: 15,
    // flex: 1,
  },
  childrenDetailCard: {
    elevation: 0,
    backgroundColor: 'transparent',
    // borderWidth: 0.5,
    // width: 'auto',
    // backgroundColor: 'white',
    // flex: 1,
    // padding: 5,
    // borderWidth: 2,
    // elevation: 1,
    // width: 100,
    // marginLeft: 5,
    // paddingRight: 85,
    // borderWidth: 5,
    // flexWrap: 'wrap',
    // marginBottom: 5,
    // borderRadius: 10,
  },
  childrenDetailsubView: {
    padding: 2,
    flexDirection: 'row',
    // justifyContent: 'center',
    // width: '100%',
    // flex: 1,
    // flexWrap: 'wrap',
    width: 160,
    // marginRight: 20,
    borderWidth: 0.8,
    marginBottom: 5,
    borderRadius: 15,
    paddingVertical: 5,
    // alignContent: 'center',
    // textAlignVertical: 'center',
    // alignItems: 'center',
    marginHorizontal: 5,
    backgroundColor: 'white',
    // paddingVertical: 5,
  },
  childrenDetailsubViewImage: {marginHorizontal: 5},
  childrenDetailsubViewText: {
    // paddingRight: 86,
    flex: 1,
    // flexWrap: 'wrap',
    paddingLeft: 5,
    fontFamily: 'lucida grande',
  },
  treeView: {
    marginLeft: 10,

    backgroundColor: 'white',
    borderRadius: 50,
    // width: 295,
    // alignItems: 'center',
  },
  treeText: {fontWeight: 'bold', marginLeft: 10, fontSize: 18, opacity: 0.8},
  // bottomView: {
  //   // backgroundColor: 'white',
  //   // textAlign: 'center',
  //   elevation: 2,
  //   // borderWidth: 1,
  //   alignItems: 'center',
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
