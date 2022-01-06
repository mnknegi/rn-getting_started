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
        renderItem={({item}) => (
          <View style={styles.cellView}>
            <Text style={styles.cellItem}> {item} </Text>
          </View>
        )}
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
  cellView: {
    padding: 10,
    height: 60,
    backgroundColor: 'lightgray',
    borderColor: 'gray',
    borderBottomWidth: 0.3,
  },
  cellItem: {
    fontSize: 20,
  },
});

export default FlatListExample;
