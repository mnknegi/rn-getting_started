import React from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import ItemSeparator from '../../components/ItemSeparator';

const HomeScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={[
          {name: 'List Selection Basics', route: 'ListSelectionScreen'},
          {name: 'Networking Basics', route: 'UsersList'},
          {name: 'Core Components Basics', route: 'ComponentsList'},
        ]}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate(item.route);
            }}>
            <View style={styles.itemView}>
              <Text style={styles.cellItem}>{item.name}</Text>
              <Image
                source={require('../../../assets/misc/arrow.png')}
                style={styles.detailIcon}
              />
            </View>
          </TouchableOpacity>
        )}
        ItemSeparatorComponent={() => <ItemSeparator />}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemView: {
    height: 80,
    backgroundColor: 'smokewhite',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 20,
  },
  cellItem: {
    fontSize: 22,
    fontFamily: 'Optima',
    color: 'darkslateblue',
  },
  detailIcon: {
    width: 10,
    height: 10,
  },
});

export default HomeScreen;
