import React from 'react';
import {FlatList, SafeAreaView, StyleSheet, Text, View} from 'react-native';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={[
          {name: 'List Selection Basics'},
          {name: 'Networking'},
          {name: 'Future Topics'},
        ]}
        renderItem={({item}) => (
          <View style={styles.itemView}>
            <Text style={styles.cellItem}>{item.name}</Text>
          </View>
        )}
        ItemSeparatorComponent={ItemSeparator}
      />
    </SafeAreaView>
  );
};

const ItemSeparator = () => {
  return <View style={styles.itemDivider} />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemView: {
    height: 80,
    backgroundColor: 'smokewhite',
    borderColor: 'gray',
    borderBottomWidth: 0.3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cellItem: {
    fontSize: 22,
    fontFamily: 'Optima',
    color: 'darkslateblue',
  },
  itemDivider: {
    height: 0.3,
    backgroundColor: 'rgba(250,250,250,1.0)',
  },
});

export default HomeScreen;
