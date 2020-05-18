import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  TextInput,
  Keyboard,
  SafeAreaView,
  TouchableWithoutFeedback,
  View,
  ImageBackground,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Avatar, Card, Title, Paragraph, Button} from 'react-native-paper';
import {IMAGENAME} from '../src/Images';
import Appbar from './Appbar';

import email from 'react-native-email';

export default class FeedbackForm extends Component {
  state = {
    body: '',
  };
  handleEmail = () => {
    console.log('handle email called');

    const to = ['vishal.prajapati6@gmail.com']; // string or array of email addresses
    email(to, {
      // Optional additional arguments
      // cc: ['vishal.prajapati6@gmail.com'], // string or array of email addresses
      bcc: 'variya.sonali19@gmail.com', // string or array of email addresses
      subject: 'Dayaram Family Tree feedback',
      body: this.state.body,
    }).catch(console.error);
    this.props.navigation.navigate('selectMemberScreen');
  };
  //   handling navigation on bootom buttons
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
      <SafeAreaView style={styles.container}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ImageBackground
            source={IMAGENAME.background}
            style={{
              width: '100%',
              height: '100%',
              // marginTop: 5,
              opacity: 1,
            }}>
            <View style={styles.container}>
              {/* <Appbar title={'Give us Your Feedback'} /> */}

              <View style={styles.bodyView}>
                <Title style={{margin: 15}}>Write Your comments</Title>
                <TextInput
                  style={styles.bodyText}
                  multiline={true}
                  maxLength={300}
                  onChangeText={text =>
                    this.setState({
                      body: text,
                    })
                  }
                  // numberOfLines={25}
                  // inlineImageLeft="search_icon"
                  value={this.state.body}
                />
              </View>
              <View style={styles.sendBtn}>
                <Button
                  mode="contained"
                  color="white"
                  onPress={() => this.handleEmail()}>
                  <Text style={{fontSize: 18, fontWeight: 'bold'}}>Submit</Text>
                </Button>
              </View>
            </View>

            {/* // Bottom Button for Home and Full tree */}
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
              </View> */}
            {/* </View> */}
          </ImageBackground>
        </TouchableWithoutFeedback>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    // marginHorizontal: 55,
    // backgroundColor: 'red',
    // alignItems: 'center',
    // justifyContent: 'center',
  },

  bodyView: {borderRadius: 25, margin: 10},
  bodyText: {
    borderRadius: 25,
    backgroundColor: 'white',
    height: 250,
    // multiLines: true,
    borderColor: 'gray',
    borderWidth: 1,
  },
  sendBtn: {
    // backgroundColor: 'red',
    marginTop: 25,
    borderRadius: 5,
    borderWidth: 1.5,
    elevation: 2,
    marginHorizontal: 95,
  },

  // bottomView: {
  //   // backgroundColor: 'white',
  //   // textAlign: 'center',
  //   position: 'absolute',
  //   bottom: 0,
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
  //   // alignItems: 'center',
  //   padding: 5,
  // },
  ownerCardText: {fontSize: 18},
});

// animation
// import React, {Component} from 'react';
// // import React from 'react';
// import {
//   PixelRatio,
//   StyleSheet,
//   Text,
//   View,
//   PanResponder,
//   Animated,
//   TouchableOpacity,
// } from 'react-native';

// const REACTIONS = [
//   {
//     label: 'Worried',
//     src: require('../src/feedbackAssets/worried.png'),
//     bigSrc: require('../src/feedbackAssets/worried_big.png'),
//   },
//   {
//     label: 'Sad',
//     src: require('../src/feedbackAssets/sad.png'),
//     bigSrc: require('../src/feedbackAssets/sad_big.png'),
//   },
//   {
//     label: 'Strong',
//     src: require('../src/feedbackAssets/ambitious.png'),
//     bigSrc: require('../src/feedbackAssets/ambitious_big.png'),
//   },
//   {
//     label: 'Happy',
//     src: require('../src/feedbackAssets/smile.png'),
//     bigSrc: require('../src/feedbackAssets/smile_big.png'),
//   },
//   {
//     label: 'Surprised',
//     src: require('../src/feedbackAssets/surprised.png'),
//     bigSrc: require('../src/feedbackAssets/surprised_big.png'),
//   },
// ];
// const WIDTH = 320;
// const DISTANCE = WIDTH / REACTIONS.length;
// const END = WIDTH - DISTANCE;

// export default class FeedbackForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this._pan = new Animated.Value(2 * DISTANCE);
//   }

//   componentWillMount() {
//     this._panResponder = PanResponder.create({
//       onMoveShouldSetResponderCapture: () => true,
//       onMoveShouldSetPanResponderCapture: () => true,
//       onPanResponderGrant: (e, gestureState) => {
//         this._pan.setOffset(this._pan._value);
//         this._pan.setValue(0);
//       },
//       onPanResponderMove: Animated.event([
//         null,
//         {dx: this._pan, useNativeDriver: true},
//       ]),
//       onPanResponderRelease: () => {
//         this._pan.flattenOffset();

//         let offset = Math.max(0, this._pan._value + 0);
//         if (offset < 0) return this._pan.setValue(0);
//         if (offset > END) return this._pan.setValue(END);

//         const modulo = offset % DISTANCE;
//         offset =
//           modulo >= DISTANCE / 2
//             ? offset + (DISTANCE - modulo)
//             : offset - modulo;

//         this.updatePan(offset);
//       },
//     });
//   }

//   updatePan(toValue) {
//     Animated.spring(this._pan, {
//       toValue,
//       friction: 7,
//       useNativeDriver: true,
//     }).start();
//   }

//   render() {
//     return (
//       <View style={styles.container}>
//         <View style={styles.wrap}>
//           <Text style={styles.welcome}>How are you feeling?</Text>

//           <View style={styles.line} />

//           <View style={styles.reactions}>
//             {REACTIONS.map((reaction, idx) => {
//               const u = idx * DISTANCE;
//               let inputRange = [u - 20, u, u + 20];
//               let scaleOutputRange = [1, 0.25, 1];
//               let topOutputRange = [0, 10, 0];
//               let colorOutputRange = ['#999', '#222', '#999'];

//               if (u - 20 < 0) {
//                 inputRange = [u, u + 20];
//                 scaleOutputRange = [0.25, 1];
//                 topOutputRange = [10, 0];
//                 colorOutputRange = ['#222', '#999'];
//               }

//               if (u + 20 > END) {
//                 inputRange = [u - 20, u];
//                 scaleOutputRange = [1, 0.25];
//                 topOutputRange = [0, 10];
//                 colorOutputRange = ['#999', '#222'];
//               }

//               return (
//                 <TouchableOpacity
//                   onPress={() => this.updatePan(u)}
//                   activeOpacity={0.9}
//                   key={idx}>
//                   <View style={styles.smileyWrap}>
//                     <Animated.Image
//                       source={reaction.src}
//                       style={[
//                         styles.smiley,
//                         {
//                           transform: [
//                             {
//                               scale: this._pan.interpolate({
//                                 inputRange,
//                                 outputRange: scaleOutputRange,
//                                 extrapolate: 'clamp',
//                               }),
//                             },
//                           ],
//                         },
//                       ]}
//                     />
//                   </View>

//                   <Animated.Text
//                     style={[
//                       styles.reactionText,
//                       {
//                         top: this._pan.interpolate({
//                           inputRange,
//                           outputRange: topOutputRange,
//                           extrapolate: 'clamp',
//                         }),
//                         color: this._pan.interpolate({
//                           inputRange,
//                           outputRange: colorOutputRange,
//                           extrapolate: 'clamp',
//                         }),
//                       },
//                     ]}>
//                     {reaction.label}
//                   </Animated.Text>
//                 </TouchableOpacity>
//               );
//             })}
//             <Animated.View
//               {...this._panResponder.panHandlers}
//               style={[
//                 styles.bigSmiley,
//                 {
//                   transform: [
//                     {
//                       translateX: this._pan.interpolate({
//                         inputRange: [0, END],
//                         outputRange: [0, END],
//                         extrapolate: 'clamp',
//                       }),
//                     },
//                   ],
//                 },
//               ]}>
//               {REACTIONS.map((reaction, idx) => {
//                 let inputRange = [
//                   (idx - 1) * DISTANCE,
//                   idx * DISTANCE,
//                   (idx + 1) * DISTANCE,
//                 ];
//                 let outputRange = [0, 1, 0];

//                 if (idx == 0) {
//                   inputRange = [idx * DISTANCE, (idx + 1) * DISTANCE];
//                   outputRange = [1, 0];
//                 }

//                 if (idx == REACTIONS.length - 1) {
//                   inputRange = [(idx - 1) * DISTANCE, idx * DISTANCE];
//                   outputRange = [0, 1];
//                 }
//                 return (
//                   <Animated.Image
//                     key={idx}
//                     source={reaction.bigSrc}
//                     style={[
//                       styles.bigSmileyImage,
//                       {
//                         opacity: this._pan.interpolate({
//                           inputRange,
//                           outputRange,
//                           extrapolate: 'clamp',
//                         }),
//                       },
//                     ]}
//                   />
//                 );
//               })}
//             </Animated.View>
//           </View>
//         </View>
//       </View>
//     );
//   }
// }

// const size = 42;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'transparent',
//   },
//   wrap: {
//     width: WIDTH,
//     marginBottom: 50,
//   },
//   welcome: {
//     fontSize: 18,
//     textAlign: 'center',
//     color: '#777',
//     fontWeight: '600',
//     fontFamily: 'Avenir',
//     marginBottom: 50,
//   },
//   reactions: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     backgroundColor: 'transparent',
//   },
//   smileyWrap: {
//     width: DISTANCE,
//     height: DISTANCE,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   smiley: {
//     width: size,
//     height: size,
//     borderRadius: size / 2,
//     backgroundColor: '#c7ced3',
//   },
//   bigSmiley: {
//     width: DISTANCE,
//     height: DISTANCE,
//     borderRadius: DISTANCE / 2,
//     backgroundColor: '#ffb18d',
//     position: 'absolute',
//     top: 0,
//     left: 0,
//   },
//   bigSmileyImage: {
//     width: DISTANCE,
//     height: DISTANCE,
//     position: 'absolute',
//     top: 0,
//     left: 0,
//   },
//   reactionText: {
//     fontSize: 12,
//     textAlign: 'center',
//     color: '#999',
//     fontWeight: '400',
//     fontFamily: 'Avenir',
//     marginTop: 5,
//   },
//   line: {
//     height: 4 / PixelRatio.get(),
//     backgroundColor: '#eee',
//     width: WIDTH - (DISTANCE - size),
//     left: (DISTANCE - size) / 2,
//     top: DISTANCE / 2 + 2 / PixelRatio.get(),
//   },
// });
