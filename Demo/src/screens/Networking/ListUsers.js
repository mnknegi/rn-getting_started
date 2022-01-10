import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import ItemSeparator from '../../components/ItemSeparator';

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
              <View>
                <Text style={styles.cellTitle}>
                  {item.first_name + ' ' + item.last_name}
                </Text>
                <Text style={styles.cellSubtitle}>{item.email}</Text>
              </View>
              <Image source={{uri: item.avatar}} style={styles.avatarImg} />
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
    paddingLeft: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cellTitle: {
    fontSize: 22,
    fontFamily: 'Optima-Bold',
  },
  cellSubtitle: {
    fontSize: 18,
    fontFamily: 'Optima',
  },
  loadingText: {
    fontSize: 22,
    fontFamily: 'Optima',
    alignSelf: 'center',
  },
  indicatorItem: {
    paddingBottom: 10,
  },
  avatarImg: {
    height: '80%',
    aspectRatio: 1 / 1,
    marginRight: 10,
    borderRadius: 8,
  },
});

export default UsersList;
