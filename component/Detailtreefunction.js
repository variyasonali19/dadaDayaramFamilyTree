import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Database} from './Database';
import Icon from 'react-native-vector-icons/FontAwesome';

const Detailtreefunction = props => {
  const [show, setShow] = useState(false);
  const [ViewLevel1, setViewLevel1] = useState();
  const [ViewLevel2, setViewLevel2] = useState();
  const [ChildOfpr3, setchildOfpr3] = useState();
  const [ChildOfpr5, setchildOfpr5] = useState();
  const [ChildOfpr7, setchildOfpr7] = useState();

  nextIds = [];

  useEffect(() => {
    console.log('props' + JSON.stringify(props));
    console.log('useEffect called');
    getdata();
  }, []);

  getdata = () => {
    getFullTree([1], 1);

    getFullTree(nextIds, 2);
  };
  getChildren = data => {
    let view;
    view = Database.filter(item => {
      if (data == item.fatherId) {
        nextIds.push(item.id);
        return (
          <View>
            <View />
            <Text>{item.name}</Text>
          </View>
        );
      }
    });
    console.log('/////////////view' + JSON.stringify(view));
    return view;
  };
  getFullTree = (data, level) => {
    console.log('getFullTree called' + level);
    totalView = [];
    viewsTotal = [];
    data.map(subdata => {
      let views = getChildren(subdata);
      viewsTotal = [...viewsTotal, ...views];
      //   viewsTotal.push(views);
      console.log('*******viewtotal' + JSON.stringify(viewsTotal));
      if (level === 1) {
        // ViewLevel1 = viewsTotal;
        setViewLevel1(viewsTotal);
      }
      if (level === 2) {
        let childOfparent3;
        let childOfparent5;
        let childOfparent7;

        childOfparent3 = viewsTotal.map(i => {
          if (i.fatherId == 3) {
            return i;
          }
        });
        childOfparent5 = viewsTotal.map(i => {
          if (i.fatherId == 5) {
            return i;
          }
        });
        childOfparent7 = viewsTotal.map(i => {
          if (i.fatherId == 7) {
            return i;
          }
        });
        setchildOfpr3(childOfparent3);
        setchildOfpr5(childOfparent5);
        setchildOfpr7(childOfparent7);

        // setViewLevel2(viewsTotal);
      }

      // return viewsTotal;
    });
    setShow(true);
  };
  renderView = data => {
    console.log('renderview');
    return data.map(itemc => {
      console.log('renderview item ' + JSON.stringify(itemc));
      if (itemc)
        return (
          <View
            style={{
              flexDirection: 'column',

              margin: 5,
            }}>
            <View style={{alignItems: 'center', marginTop: 5, marginBottom: 5}}>
              <Icon
                name="arrow-down"
                size={15}
                color="#900"
                onPress={console.log('iconpressed')}
                style={{}}
              />
            </View>
            <View style={{backgroundColor: itemc.color}}>
              <Text>{itemc.name}</Text>
            </View>
          </View>
        );
    });
  };

  return (
    <View>
      <View style={{alignItems: 'center'}}>
        <Text
          style={{backgroundColor: 'red', fontSize: 30, fontWeigth: 'bold'}}>
          {Database[0].name}
        </Text>
      </View>
      {console.log('return called' + JSON.stringify(ViewLevel1))}

      <View style={{alignItems: 'center'}}>
        <View style={{flexDirection: 'row'}}>
          {ViewLevel1 && renderView(ViewLevel1)}
        </View>
      </View>

      {/* <View
        style={{flexDirection: 'row', marginLeft: 50, alignItems: 'center'}}>
        {ViewLevel2 && renderView(ViewLevel2)}
      </View> */}
      <View style={{alignItems: 'center'}}>
        <View style={{flexDirection: 'row'}}>
          <View style={{alignItems: 'center', flex: 2}}>
            <View style={{flexDirection: 'row'}}>
              {ChildOfpr3 && renderView(ChildOfpr3)}
            </View>
          </View>
          <View style={{alignItems: 'center', flex: 1.7}}>
            <View style={{flexDirection: 'row'}}>
              {ChildOfpr5 && renderView(ChildOfpr5)}
            </View>
          </View>
          <View style={{alignItems: 'center', flex: 2}}>
            <View style={{flexDirection: 'row'}}>
              {ChildOfpr7 && renderView(ChildOfpr7)}
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Detailtreefunction;

const styles = StyleSheet.create({});
