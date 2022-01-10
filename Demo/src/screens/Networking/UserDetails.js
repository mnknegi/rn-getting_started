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
        <DescriptionItems
          title={'First Name: '}
          desctiption={route.params.first_name}
        />
        <DescriptionItems
          title={'Last Name: '}
          desctiption={route.params.last_name}
        />
        <DescriptionItems title={'Email: '} desctiption={route.params.email} />
      </View>
    </SafeAreaView>
  );
};

const DescriptionItems = props => {
  return (
    <View style={styles.itemContainer}>
      <Text style={styles.labelFormat}>{props.title}</Text>
      <Text style={styles.descriptionFormat}> {props.desctiption}</Text>
    </View>
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
