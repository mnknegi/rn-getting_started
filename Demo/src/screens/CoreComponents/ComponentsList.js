import React from 'react';
import {SafeAreaView, StyleSheet, FlatList, Text, View} from 'react-native';

import ItemSeparator from '../../components/ItemSeparator';

const CoreComponentsList = () => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={[{id: '1', title: 'ActivityIndicator'}]}
        renderItem={({item}) => (
          <View style={styles.itemCell}>
            <Text style={styles.textFormatting}>{item.title}</Text>
          </View>
        )}
        ItemSeparatorComponent={ItemSeparator}
        keyExtractor={({id}, index) => index}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemCell: {
    backgroundColor: 'white',
    height: 80,
    justifyContent: 'center',
  },
  textFormatting: {
    fontSize: 22,
    fontFamily: 'Optima',
    textAlign: 'center',
  },
});

export default CoreComponentsList;
