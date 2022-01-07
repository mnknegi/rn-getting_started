import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';

import ListSelectionButton from '../components/ListSelectionButton';

const ListSelectionScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.buttonContainer}>
        <ListSelectionButton
          action={() => {
            navigation.navigate('FlatList');
          }}
          text="Flat List Basics"
        />
        <ListSelectionButton
          action={() => {
            navigation.navigate('SectionList');
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

export default ListSelectionScreen;
