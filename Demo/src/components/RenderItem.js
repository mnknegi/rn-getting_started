import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';

const RenderItem = props => {
  return (
    <View style={styles.itemView}>
      <Image source={props.item.img} style={styles.cellImage} />
      <Text style={styles.cellItem}> {props.item.name} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  itemView: {
    height: 120,
    backgroundColor: 'smokewhite',
    flexDirection: 'row',
  },
  cellItem: {
    fontSize: 22,
    fontFamily: 'Optima',
    alignSelf: 'center',
  },
  cellImage: {
    height: 80,
    width: 80,
    margin: 10,
    borderRadius: 5,
    alignSelf: 'center',
  },
});

export default RenderItem;
