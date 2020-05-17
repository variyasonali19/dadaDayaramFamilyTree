import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import {Data} from './Data';
import TreeView from 'react-native-final-tree-view';
import Icon from 'react-native-vector-icons/FontAwesome';
// import screen
import Appbar from './Appbar';
import {Colors} from '../Colors';
import TreeDataBase from './TreeDataBase';
// import {IMAGENAME} from '../src/Images';

function getIndicator(isExpanded, hasChildrenNodes, node, level) {
  // console.log(getCollapsedNodeHeight({ [node.id], level }));
  if (!hasChildrenNodes) {
    console.log('here withourt child');
    return (
      // <Image
      //   style={{width: 2, height: 2}}
      //   source={require('../src/images/Sonali.png')}
      // />

      <Text style={{}}>
        <Icon name="heart" size={10} color="#900" />
      </Text>
    );
  } else if (isExpanded) {
    console.log('here is expanded child');
    return (
      // <Image
      //   style={{width: 2, height: 2}}
      //   source={require('../src/images/Sonali.png')}
      // />

      <Icon name="heart" size={15} color="#900" />
    );
  } else {
    console.log('here else portion ');

    return (
      // <Image
      //   style={{width: 2, height: 2}}
      //   source={require('../src/images/Sonali.png')}
      // />

      <Icon name="heart" size={15} color="#900" />
    );
  }
}
function onPress() {
  console.log('im pressed');
  return;
}

function Home() {
  return (
    <View
      style={
        {
          // flex: 1,
          // height: 500,
          // backgroundColor: 'red',
        }
      }>
      <View style={{}}>
        <Appbar />
      </View>

      <View style={{}}>
        <TreeView
          data={Data} // defined above
          renderNode={({node, level, isExpanded, hasChildrenNodes}) => {
            return (
              <View style={{}}>
                <View
                  style={{
                    // flex: 1,
                    marginLeft: 20 * level,
                    // backgroundColor: 'green',
                    // fontSize: 18,

                    // marginBottom: 50,
                    // height: 100,

                    // marginTop: 10 * level,
                    // marginTop: 10,
                  }}>
                  {getIndicator(isExpanded, hasChildrenNodes, node, level)}

                  <TouchableOpacity onPress={onPress}>
                    <Text>{node.name}</Text>
                  </TouchableOpacity>
                </View>
                {console.log('name of node' + node.name)}
                {/* {getCollapsedNodeHeight({ [idKey], level })} */}
              </View>
            );
          }}
        />
      </View>
    </View>
  );
}

export default Home;
