import React, {useEffect, useState} from 'react';
import {FlatList, SafeAreaView, StyleSheet, Text, View} from 'react-native';
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
        <Text>Loading...</Text>
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
});

export default UsersList;
