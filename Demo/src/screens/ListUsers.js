import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import ItemSeparator from '../components/ItemSeparator';

const UsersList = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://reqres.in/api/users?page=1')
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => console.error(error))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {isLoading ? (
        <View>
          <ActivityIndicator
            animating={isLoading}
            style={styles.indicatorItem}
          />
          <Text style={styles.loadingText}>Loading...</Text>
        </View>
      ) : (
        <FlatList
          data={data.data}
          keyExtractor={({id}, index) => id}
          renderItem={({item}) => (
            <View style={styles.itemView}>
              <Text style={styles.cellItem}>
                {item.id + '. ' + item.first_name + ' ' + item.last_name}
              </Text>
            </View>
          )}
          ItemSeparatorComponent={ItemSeparator}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  itemView: {
    height: 80,
    backgroundColor: 'smokewhite',
    flexDirection: 'row',
  },
  cellItem: {
    fontSize: 22,
    margin: 10,
    fontFamily: 'Optima',
    alignSelf: 'center',
  },
  loadingText: {
    fontSize: 22,
    fontFamily: 'Optima',
    alignSelf: 'center',
  },
  indicatorItem: {
    paddingBottom: 10,
  },
});

export default UsersList;
