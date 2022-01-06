import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.buttonContainer}></View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'red',
  },
  buttonContainer: {
    marginRight: 20,
    marginLeft: 20,
    aspectRatio: 1,
    backgroundColor: 'green',
  },
});

export default HomeScreen;
