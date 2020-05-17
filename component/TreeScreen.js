import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {Data} from './Data';

export default class TreeScreen extends Component {
  renderItem = data => {
    //   return(<View><Text>hi</Text></View>)
    console.log('render Item called' + JSON.stringify(data));
    // console.log('data.children' + JSON.stringify(data.children));
    return data.map(Item => {
      if (Item.children) {
        return Item.children.map(cItem => {
          console.log('item' + JSON.stringify(cItem));
          //   console.log('item.isd' + Item.id);
          let output = this.renderItem(cItem.children);
          let outarray = [];
          outarray.push(output);
          outarray.push(
            <View>
              <Text key={Item.id}>{Item.id}</Text>
            </View>,
          );
          return outarray;
        });
      } else {
        console.log('here in else');
        return (
          <View>
            <Text key={Item.id}>{Item.id}</Text>
          </View>
        );
      }
    });
  };

  //   renderedItem = data => {
  //     //   return(<View><Text>hi</Text></View>)
  //     console.log('render Item called' + JSON.stringify(data));
  //     // console.log('data.children' + JSON.stringify(data.children));
  //     return data.map(item => {
  //       if (item.children) {
  //         return item.children.map(item => {
  //           if (item.children) {
  //             <Text>{item.children.id}</Text>;
  //             this.renderedItem(item.children);
  //           }
  //         });
  //       } else {
  //         return <Text>{item.id}</Text>;
  //       }
  //     });
  //   };

  render() {
    return (
      <View>
        <View>{this.renderItem(Data)}</View>
      </View>
    );
  }
}
