import React from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  Text,
  Image,
  SafeAreaView,
} from 'react-native';

import RenderItem from '../components/RenderItem';
import ItemSeparator from '../components/ItemSeparator';

const FlatListExample = () => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={[
          {
            name: 'Spiderman',
            img: require('../../assets/superheros/spiderman.jpeg'),
          },
          {
            name: 'Superman',
            img: require('../../assets/superheros/superman.jpg'),
          },
          {name: 'Batman', img: require('../../assets/superheros/batman.jpg')},
          {
            name: 'Doctor Strange',
            img: require('../../assets/superheros/strange.png'),
          },
          {name: 'Venom', img: require('../../assets/superheros/venom.jpeg')},
          {name: 'Xman', img: require('../../assets/superheros/xman.jpeg')},
          {
            name: 'Ironman',
            img: require('../../assets/superheros/ironman.png'),
          },
        ]}
        renderItem={({item}) => <RenderItem item={item} />}
        ItemSeparatorComponent={() => <ItemSeparator />}
      />
    </SafeAreaView>
  );
};

/**
 * This portion of code is shifted to RenderItem.js
 */

// const RenderItem = ({item}) => {
//   return (
//     <View style={styles.superheroCell}>
//       <Image source={item.img} style={styles.superheroImage} />
//       <Text style={styles.superheroItem}> {item.name} </Text>
//     </View>
//   );
// };

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    backgroundColor: 'rgba(111,111,111,1.0)',
  },
});

export default FlatListExample;
