import React from 'react';
import {SafeAreaView, StyleSheet, View, ActivityIndicator} from 'react-native';

const Spinner = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'green',
  },
});

export default Spinner;
