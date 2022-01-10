import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

const ComponentDisplay = ({navigation, route}) => {
  return <SafeAreaView style={styles.container}></SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ComponentDisplay;
