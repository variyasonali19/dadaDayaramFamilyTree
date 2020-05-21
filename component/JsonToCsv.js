import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {database} from './firebasedatabase';
// file use: to convert json data into csv
// here json datafile is database from firebasedatabase
// make sure to update image path manually (as it is coming as number)

const JsonToCsv = () => {
  useEffect(() => {
    console.log('useEffect called');

    convertToCsv(database[0]);
    getHeaderOfExcel();
    eachRowOfExcel();
    // return () => {
    //     cleanup
    // }
  }, []);
  rows = [];
  dataInObject = [];

  convertToCsv = datas => {
    datas.items.map(item => {
      let levelOfItem;
      if (!item.level.substring(0, item.level.length - 2)) {
        levelOfItem = 1;
      } else {
        levelOfItem = item.level.substring(0, item.level.length - 2);
      }
      let newArray = [
        item.name,
        item.value,
        item.sex,
        item.level,
        item.home,
        item.dateOfBirth,
        item.spouceDateOfBirth,
        item.spouce,
        item.spouceAge,
        item.spouceHome,
        item.imagePath,
        item.imagePathSpouse,
        levelOfItem,
      ];
      dataInObject.push(newArray);
      console.log(JSON.stringify(newArray));
      if (item.items) {
        convertToCsv(item);
      }
    });

    // return dataFormated;
  };
  eachRowOfExcel = () => {
    if (dataInObject) {
      let count = 0;
      for (let i = 0; i < dataInObject.length; i++) {
        if (dataInObject[i] === 'br') {
          count = count + 1;
        }
      }
      for (let b = 0; b <= count; b++) {}
      console.log('count of br' + count);
    }
  };
  getHeaderOfExcel = () => {
    let header = Object.keys(database[0]);
    console.log('header' + header);
  };
  //   convertToCsv = data => {
  //     data.items.map(item => {
  //       rows.push(
  //         item.name,
  //         item.age,
  //         item.sex,
  //         item.level,
  //         item.level.substring(0, item.level.length - 2),
  //       );
  //     });
  //     console.log('row' + JSON.stringify(rows));
  //   };
  return (
    <View>
      <Text />
    </View>
  );
};

export default JsonToCsv;

const styles = StyleSheet.create({});
