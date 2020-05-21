import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {databaseJson} from './JsonDatabase';
// use of this file: convert csv to  family tree supported json
// step:1 convert csv file to simple json using online tool (here ,import {databaseJson} from './JsonDatabase')
// step:2 console.log('value of json' + JSON.stringify(TotalJson)); this will give you family tree supported Json..copy this console  o/pe
// step:3 remove item:[] from the generate json by this code
// step:4 add root node
// step:5 check image path is valid or not

const CsvToJson = () => {
  let Jsons = [];
  let returnItem = [];
  let totalReturnedItem = [];
  let TotalJson = [];
  let totalReturnedItemofChild = [];
  useEffect(() => {
    getJson(databaseJson);
  }, []);

  const getJson = data => {
    // returnItem = [];

    console.log('getJson called');
    data.map(item => {
      returnedFromItems = [];
      totalReturnedItem = [];
      Json = [];
      if (item.level.length == 1) {
        console.log('mainloop****************');

        Jsons = {
          name: item.name,
          value: item.value,
          sex: item.sex,
          level: item.level,
          home: item.home,
          dateOfBirth: item.dateOfBirth,
          spouceDateOfBirth: item.spouceDateOfBirth,
          spouce: item.spouce,
          spouceAge: item.spouceAge,
          spouceHome: item.spouceHome,
          imagePath: item.imagePath,
          imagePathSpouse: item.imagePathSpouse,
          items: getOneLvlItems(item, databaseJson),
        };
        TotalJson.push(Jsons);
      }
    });

    console.log('value of json' + JSON.stringify(TotalJson));
  };

  const getSecondLvlItemss = () => {};
  const getOneLvlItems = (x, database) => {
    // console.log('getOneLvlItems called');
    let itemOfChild;
    // level 0.0 e.g. 2.1
    database.filter(y => {
      totalReturnedItemofChild = [];
      if (
        y.level.length == x.level.length + 2 &&
        x.level.substring(0, 1) == y.level.substring(0, 1)
      ) {
        itemOfChild = {
          name: y.name,
          value: y.value,
          sex: y.sex,
          level: y.level,
          home: y.home,
          dateOfBirth: y.dateOfBirth,
          spouceDateOfBirth: y.spouceDateOfBirth,
          spouce: y.spouce,
          spouceAge: y.spouceAge,
          spouceHome: y.spouceHome,
          imagePath: y.imagePath,
          imagePathSpouse: y.imagePathSpouse,
          items: [],
        };
        totalReturnedItem.push(itemOfChild);
        // ........added for level 0.0.0 e.g. 2.1.1
        database.filter(v => {
          let ChildItem = [];
          if (v.parentLevel == y.level) {
            ChildItem = {
              name: v.name,
              value: v.value,
              sex: v.sex,
              level: v.level,
              home: v.home,
              dateOfBirth: v.dateOfBirth,
              spouceDateOfBirth: v.spouceDateOfBirth,
              spouce: v.spouce,
              spouceAge: v.spouceAge,
              spouceHome: v.spouceHome,
              imagePath: v.imagePath,
              imagePathSpouse: v.imagePathSpouse,
              items: [],
            };
            totalReturnedItem[totalReturnedItem.length - 1]['items'].push(
              ChildItem,
            );
            // ........added for level 0.0.0.0 e.g. 2.1.1.1
            database.filter(d => {
              let ChildItemLevel3 = [];
              if (d.parentLevel == v.level) {
                ChildItemLevel3 = {
                  name: d.name,
                  value: d.value,
                  sex: d.sex,
                  level: d.level,
                  home: d.home,
                  dateOfBirth: d.dateOfBirth,
                  spouceDateOfBirth: d.spouceDateOfBirth,
                  spouce: d.spouce,
                  spouceAge: d.spouceAge,
                  spouceHome: d.spouceHome,
                  imagePath: d.imagePath,
                  imagePathSpouse: d.imagePathSpouse,
                  items: [],
                };
                totalReturnedItem[totalReturnedItem.length - 1].items[
                  totalReturnedItem[totalReturnedItem.length - 1].items.length -
                    1
                ]['items'].push(ChildItemLevel3);

                // *********added for level 0.0.0.0.0 e.g. 2.1.1.1.1***********

                database.filter(s => {
                  let ChildItemLevel4 = [];
                  if (s.parentLevel == d.level) {
                    ChildItemLevel4 = {
                      name: s.name,
                      value: s.value,
                      sex: s.sex,
                      level: s.level,
                      home: s.home,
                      dateOfBirth: s.dateOfBirth,
                      spouceDateOfBirth: s.spouceDateOfBirth,
                      spouce: s.spouce,
                      spouceAge: s.spouceAge,
                      spouceHome: s.spouceHome,
                      imagePath: s.imagePath,
                      imagePathSpouse: s.imagePathSpouse,
                    };
                    totalReturnedItem[totalReturnedItem.length - 1].items[
                      totalReturnedItem[totalReturnedItem.length - 1].items
                        .length - 1
                    ].items[
                      totalReturnedItem[totalReturnedItem.length - 1].items[
                        totalReturnedItem[totalReturnedItem.length - 1].items
                          .length - 1
                      ].items.length - 1
                    ]['items'].push(ChildItemLevel4);
                  }
                });
              }
            });
            // let output = [];
            // output = getOneLvlItems(y, databaseJson);
            // totalReturnedItem.push('items', output);
            // console.log('value of output' + JSON.stringify(output));
            // totalReturnedItem['items'].push(itemOfChild);
          }
        });
      }
    });
    // console.log(
    //   'value of totalReturnedItem' + JSON.stringify(totalReturnedItem),
    // );
    if (totalReturnedItem !== null) {
      return totalReturnedItem;
    } else {
      return;
    }
  };

  // const getSecondLvlItems = (z, database) => {
  //   // console.log('getsecondLvlItems called');
  //   let itemOfChildofChild;
  //   database.filter(w => {
  //     if (
  //       w.level.length == z.level.length + 2 &&
  //       z.level.substring(0, 1) == w.level.substring(0, 1)
  //     ) {
  //       itemOfChildofChild = {
  //         name: w.name,
  //         value: w.value,
  //         sex: w.sex,
  //         level: w.level,
  //         home: w.home,
  //         dateOfBirth: w.dateOfBirth,
  //         spouceDateOfBirth: w.spouceDateOfBirth,
  //         spouce: w.spouce,
  //         spouceAge: w.spouceAge,
  //         spouceHome: w.spouceHome,
  //         imagePath: w.imagePath,
  //         imagePathSpouse: w.imagePathSpouse,
  //         // items:getSecondLvlItems(w,database)
  //       };
  //       totalReturnedItemofChild.push(itemOfChildofChild);
  //     } else {
  //       return;
  //     }
  //   });
  //   // console.log(
  //   //   'value of totalReturnedItemofChild' +
  //   //     JSON.stringify(totalReturnedItemofChild),
  //   // );
  //   return totalReturnedItem;
  // };

  return (
    <View>
      <Text>csv</Text>
    </View>
  );
};

export default CsvToJson;

const styles = StyleSheet.create({});
