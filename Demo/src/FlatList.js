import React from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  Text,
  Image,
  SafeAreaView,
} from 'react-native';

const FlatListExample = () => {
  return (
    <SafeAreaView style={styles.container}>
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
        renderItem={({item}) => <RenderItem item={item} />}
        ItemSeparatorComponent={ItemSeparator}
      />
    </SafeAreaView>
  );
};

const ItemSeparator = () => {
  return <View style={styles.itemDivider} />;
};

const RenderItem = ({item}) => {
  return (
    <View style={styles.superheroCell}>
      <Image source={item.img} style={styles.superheroImage} />
      <Text style={styles.superheroItem}> {item.name} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  superheroCell: {
    alignItems: 'center',
    padding: 10,
    height: 100,
    // backgroundColor: 'rgba(245,245,245,1.0)',
    backgroundColor: 'whitesmoke',
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
    height: 80,
    width: 80,
    paddingTop: 5,
    paddingBottom: 5,
    borderRadius: 5,
  },
  itemDivider: {
    height: 0.3,
    backgroundColor: 'rgba(250,250,250,1.0)',
  },
});

export default FlatListExample;
