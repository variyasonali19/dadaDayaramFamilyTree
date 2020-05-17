import React from 'react';
import {Text, View} from 'react-native';

import TreeView from 'react-native-final-tree-view';
import {Data} from './Data';

function getIndicator(isExpanded, hasChildrenNodes) {
  if (!hasChildrenNodes) {
    return '-';
  } else if (isExpanded) {
    return '\\/';
  } else {
    return '>';
  }
}

function TestTree() {
  return (
    <TreeView
      data={Data} // defined above
      renderNode={({node, level, isExpanded, hasChildrenNodes}) => {
        return (
          <View>
            <Text
              style={{
                marginLeft: 25 * level,
              }}>
              {getIndicator(isExpanded, hasChildrenNodes)}
              {node.name}
            </Text>
          </View>
        );
      }}
    />
  );
}

export default TestTree;
