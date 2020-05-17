import React, {Component, TouchableOpacity} from 'react';
import {Text, StyleSheet, View, Button} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Database} from './Database';

export default class DetailTree extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
      onClickArrowDown2: false,
      userDetail: this.props.route.params.item.id,
      totalView: [],
    };
  }
  nextIds = [];
  ViewLevel1 = [];
  ViewLevel2 = [];
  componentwillMount() {
    console.log('componentWillMount called');
    // Typical usage (don't forget to compare props):
    this.getdata();
  }
  getdata = async () => {
    await this.getFullTree([1], 1);

    await this.getFullTree(this.nextIds, 2);
  };
  getChildren = data => {
    let view = [];
    view = Database.filter(item => {
      if (data == item.fatherId) {
        this.nextIds.push(item.id);
        return (
          <View>
            <Text>{item.name}</Text>
          </View>
        );
      }
    });

    return view;
  };
  getFullTree = (data, level) => {
    console.log('getFullTree called' + level);
    this.totalView = [];
    viewsTotal = [];
    data.map(subdata => {
      let views = this.getChildren(subdata);

      viewsTotal.push(views);
      if (level === 1) {
        this.ViewLevel1 = viewsTotal;
      }
      if (level === 2) {
        this.ViewLevel2 = viewsTotal;
      }
      // return viewsTotal;
    });
  };

  render() {
    // console.log('DetailTree called');
    // console.log('item.id' + JSON.stringify(this.props.route.params.item.id));
    return (
      // <View style={{margin: 5, alignItems: 'center'}}>
      //   {/* <Button
      //     title="find Out more"
      //     onPress={() => navigation.navigate('Profile', {name: 'Jane'})}
      //   /> */}
      //   <Icon
      //     name="arrow-up"
      //     size={15}
      //     color="#900"
      //     onPress={console.log('iconpressed')}
      //     style={{margin: 5}}
      //   />
      //   <View style={{margin: 5}}>
      //     <Text>{this.props.route.params.item.name} </Text>
      //   </View>
      //   <View>
      //     {!this.state.show && (
      //       <Icon
      //         onPress={() => this.setState({show: true})}
      //         style={{margin: 5}}
      //         name="arrow-down"
      //         size={15}
      //         color="#900"
      //       />
      //     )}
      //     <View style={{flexDirection: 'row'}}>
      //       {this.state.show &&
      //         this.onClickArrowDown(this.props.route.params.item.id)}
      //     </View>
      //     <View>
      //       {this.state.onClickArrowDown2 &&
      //         this.onClickArrowDown(this.state.userDetail)}
      //     </View>
      //   </View>
      // </View>
      <View>
        <View>
          {this.ViewLevel1.map(item => {
            return (
              <View>
                <Text>{item.name}</Text>
              </View>
            );
          })}
        </View>

        <View>
          {this.ViewLevel2.map(item => {
            return (
              <View>
                <Text>{item.name}</Text>
              </View>
            );
          })}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
