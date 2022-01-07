import React from 'react';
import {StyleSheet, View} from 'react-native';

const ItemSeparator = () => {
  return <View style={styles.itemDivider} />;
};

const styles = StyleSheet.create({
  itemDivider: {
    height: 0.3,
    backgroundColor: 'rgba(150,150,150,1.0)',
  },
});

export default ItemSeparator;
