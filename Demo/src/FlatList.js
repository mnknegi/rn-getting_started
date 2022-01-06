import React from 'react';
import {View, StyleSheet, FlatList, Text, Image} from 'react-native';

const FlatListExample = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={[
          {name: 'Spiderman', img: '../assets/spiderman'},
          {name: 'Superman', img: '../assets/superman'},
          {name: 'Batman', img: '../assets/batman'},
          {name: 'Doctor Strange', img: '../assets/strange'},
          {name: 'Venom', img: '../assets/venom'},
          {name: 'Xman', img: '../assets/xman'},
          {name: 'Ironman', img: '../assets/ironman'},
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
