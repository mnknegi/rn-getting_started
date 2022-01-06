import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';

import HomeScreenButton from '../components/HomeScreenButton';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.buttonContainer}>
        <HomeScreenButton
          action={() => {
            alert('something');
          }}
          text="Flat List Basics"
        />
        <HomeScreenButton
          action={() => {
            alert('something');
          }}
          text="Section List Basics"
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  buttonContainer: {
    marginRight: 20,
    marginLeft: 20,
    aspectRatio: 1,
    justifyContent: 'center',
  },
});

export default HomeScreen;
