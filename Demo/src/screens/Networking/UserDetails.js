import React from 'react';
import {SafeAreaView, StyleSheet, Image, View, Text} from 'react-native';

const UserDetails = ({navigation, route}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.itemsContainer}>
        <Image
          source={{uri: route.params.avatar}}
          style={styles.imageContainer}
        />
        <View style={styles.itemContainer}>
          <Text style={styles.labelFormat}>First Name:</Text>
          <Text style={styles.descriptionFormat}>
            {route.params.first_name}
          </Text>
        </View>
        <View style={styles.itemContainer}>
          <Text style={styles.labelFormat}>Last Name:</Text>
          <Text style={styles.descriptionFormat}>
            {' '}
            {route.params.last_name}
          </Text>
        </View>
        <View style={styles.itemContainer}>
          <Text style={styles.labelFormat}>Email:</Text>
          <Text style={styles.descriptionFormat}> {route.params.email}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemsContainer: {
    flex: 1,
    margin: 20,
    justifyContent: 'center',
  },
  itemContainer: {
    flexDirection: 'row',
    marginBottom: 10,
    justifyContent: 'center',
  },
  imageContainer: {
    marginBottom: 20,
    width: '100%',
    aspectRatio: 1 / 1,
    borderRadius: 200,
    borderWidth: 5,
    borderColor: 'lightgray',
  },
  labelFormat: {
    fontFamily: 'Optima',
    fontSize: 20,
  },
  descriptionFormat: {
    fontFamily: 'Optima-Bold',
    fontSize: 20,
  },
});

export default UserDetails;
