import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  FlatList,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

import ItemSeparator from '../../components/ItemSeparator';

const CoreComponentsList = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={[{id: '1', title: 'Activity Indicator'}]}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('ComponentDisplay', item);
            }}>
            <View style={styles.itemCell}>
              <Text style={styles.textFormatting}>{item.title}</Text>
            </View>
          </TouchableOpacity>
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
