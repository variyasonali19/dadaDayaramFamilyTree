import React, {Component} from 'react';
import {Text, StyleSheet, View, ImageBackground} from 'react-native';
import storage from '@react-native-firebase/storage';
import {Avatar, Card} from 'react-native-paper';
import firebase from 'firebase';
const images = [
  'https://firebasestorage.googleapis.com/v0/b/rnfamilytreedada.appspot.com/o/imagesUser%2F80.png?alt=media&token=067d9add-e6f8-4181-b67b-fa6777102127',
  'https://example.com/images/2.jpg',
  'https://example.com/images/3.jpg',
];
export default class AsyncImage extends Component {
  url;
  componentDidMount() {
    console.log('**********************' + firebase.database().app.name);
    this.getImageUrl();
  }
  getImageUrl = async () => {
    this.url = await firebase
      .storage()
      .refFromURL('gs://rnfamilytreedada.appspot.com')
      .child('/imagesUser/')
      .getDownloadURL();
    console.log('url' + this.url);
  };

  render() {
    return (
      <View style={styles.container}>
        {/* <ImageBackground
          style={styles.image}
          source={{
            uri:
              'https://firebasestorage.googleapis.com/v0/b/rnfamilytreedada.appspot.com/o/imagesUser%2F80.png?alt=media&token=067d9add-e6f8-4181-b67b-fa6777102127',
          }}> */}
        {/* <Avatar.Image
          size={30}
          source={{
            uri:
              'https://firebasestorage.googleapis.com/v0/b/rnfamilytreedada.appspot.com/o/imagesUser%2F80.png?alt=media&token=067d9add-e6f8-4181-b67b-fa6777102127',
          }}
        /> */}
        <Text>Inside</Text>
        {/* </ImageBackground> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
});
