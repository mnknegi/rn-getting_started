import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';

import HomeScreenButton from './src/components/HomeScreenButton';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.buttonContainer}>
        <HomeScreenButton
          message="FlatList Button Pressed..."
          text="Flat List Basics"
        />
        <HomeScreenButton
          message="Section List Button Pressed..."
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
