import React from 'react';
import {View, StyleSheet, FlatList, Text} from 'react-native';

const FlatListExample = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={[
          'Spider-man',
          'Superman',
          'Batman',
          'Doctor Strange',
          'Venom',
          'Xman',
          'Iron-man',
        ]}
        renderItem={({item}) => <Text style={styles.cellItem}> {item} </Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 44,
    paddingBottom: 34,
  },
  cellItem: {
    padding: 10,
    height: 44,
    fontSize: 20,
  },
});

export default FlatListExample;
