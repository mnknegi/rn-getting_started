import React from 'react';
import {View, StyleSheet, FlatList, Text, Image} from 'react-native';

const FlatListExample = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={[
          {
            name: 'Spiderman',
            img: require('../assets/superheros/spiderman.jpeg'),
          },
          {name: 'Superman', img: require('../assets/superheros/superman.jpg')},
          {name: 'Batman', img: require('../assets/superheros/batman.jpg')},
          {
            name: 'Doctor Strange',
            img: require('../assets/superheros/strange.png'),
          },
          {name: 'Venom', img: require('../assets/superheros/venom.jpeg')},
          {name: 'Xman', img: require('../assets/superheros/xman.jpeg')},
          {name: 'Ironman', img: require('../assets/superheros/ironman.png')},
        ]}
        renderItem={({item}) => (
          <View style={styles.superheroCell}>
            <Image source={item.img} style={styles.superheroImage} />
            <Text style={styles.superheroItem}> {item.name} </Text>
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
  superheroCell: {
    // justifyContent: 'center',
    padding: 10,
    height: 60,
    backgroundColor: 'lightgray',
    borderColor: 'gray',
    borderBottomWidth: 0.3,
    flexDirection: 'row',
  },
  superheroItem: {
    fontSize: 24,
    backgroundColor: 'orange',
  },
  superheroImage: {
    width: 40,
    height: 40,
    paddingTop: 5,
    paddingBottom: 5,
    backgroundColor: 'yellow',
  },
});

export default FlatListExample;
