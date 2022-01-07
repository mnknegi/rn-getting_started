import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const SectionHeader = props => {
  return (
    <View style={styles.sectionHeader}>
      <Text style={styles.sectionHeaderTitle}> {props.section.title} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionHeader: {
    height: 30,
    backgroundColor: 'lightgray',
    justifyContent: 'center',
  },
  sectionHeaderTitle: {
    fontSize: 16,
    fontFamily: 'Helvetica-Bold',
  },
});

export default SectionHeader;
