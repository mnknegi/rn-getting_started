import React from 'react';
import {View, StyleSheet, FlatList, Text, Image} from 'react-native';

const FlatListExample = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={[
          {name: 'Spiderman', img: require('../assets/spiderman.jpeg')},
          {name: 'Superman', img: require('../assets/superman.jpg')},
          {name: 'Batman', img: require('../assets/batman.jpg')},
          {name: 'Doctor Strange', img: require('../assets/strange.png')},
          {name: 'Venom', img: require('../assets/venom.jpeg')},
          {name: 'Xman', img: require('../assets/xman.jpeg')},
          {name: 'Ironman', img: require('../assets/ironman.png')},
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
    alignItems: 'center',
    padding: 10,
    height: 60,
    backgroundColor: 'lightgray',
    borderColor: 'gray',
    borderBottomWidth: 0.3,
    flexDirection: 'row',
  },
  superheroItem: {
    fontSize: 24,
    fontFamily: 'Papyrus',
    marginStart: 10,
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
