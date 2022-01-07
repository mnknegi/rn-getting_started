import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const RenderItem = props => {
  return (
    <View style={styles.itemView}>
      <Text style={styles.cellItem}> {props.item} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  itemView: {
    height: 60,
    backgroundColor: 'smokewhite',
    borderColor: 'gray',
    borderBottomWidth: 0.3,
    justifyContent: 'center',
  },
  cellItem: {
    fontSize: 22,
    fontFamily: 'Optima',
  },
});

export default RenderItem;
