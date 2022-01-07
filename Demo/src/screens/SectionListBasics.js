import React from 'react';
import {SectionList, View, Text, StyleSheet, SafeAreaView} from 'react-native';
import RenderItem from '../components/RenderItem';

import SectionHeader from '../components/SectionHeader';
import ItemSeparator from '../components/ItemSeparator';

const SectionListExample = () => {
  return (
    <SafeAreaView style={styles.container}>
      <SectionList
        sections={[
          {
            title: 'Animals',
            data: [
              {name: 'Cat', img: require('../../assets/animals/cat.jpeg')},
              {name: 'Dog', img: require('../../assets/animals/dog.jpeg')},
              {name: 'Tiger', img: require('../../assets/animals/tiger.jpeg')},
              {
                name: 'Monkey',
                img: require('../../assets/animals/monkey.jpeg'),
              },
              {name: 'Lion', img: require('../../assets/animals/lion.jpeg')},
            ],
          },
          {
            title: 'Superheros',
            data: [
              {
                name: 'Spiderman',
                img: require('../../assets/superheros/spiderman.jpeg'),
              },
              {
                name: 'Superman',
                img: require('../../assets/superheros/superman.jpg'),
              },
              {
                name: 'Batman',
                img: require('../../assets/superheros/batman.jpg'),
              },
              {
                name: 'Doctor Strange',
                img: require('../../assets/superheros/strange.png'),
              },
              {
                name: 'Venom',
                img: require('../../assets/superheros/venom.jpeg'),
              },
              {name: 'Xman', img: require('../../assets/superheros/xman.jpeg')},
              {
                name: 'Ironman',
                img: require('../../assets/superheros/ironman.png'),
              },
            ],
          },
          {
            title: 'Vegitables',
            data: [
              {
                name: 'Brinjal',
                img: require('../../assets/vegitables/brinjal.jpeg'),
              },
              {
                name: 'Cabbage',
                img: require('../../assets/vegitables/cabbage.jpeg'),
              },
              {
                name: 'Carrot',
                img: require('../../assets/vegitables/carrot.jpeg'),
              },
              {
                name: 'Cauliflower',
                img: require('../../assets/vegitables/cauliflower.jpeg'),
              },
              {
                name: 'Lady Finger',
                img: require('../../assets/vegitables/ladyfinger.jpeg'),
              },
            ],
          },
          {
            title: 'Fruits',
            data: [
              {name: 'Apple', img: require('../../assets/fruits/apple.jpeg')},
              {name: 'Banana', img: require('../../assets/fruits/banana.jpeg')},
              {name: 'Grapes', img: require('../../assets/fruits/grapes.jpeg')},
              {
                name: 'Water Melon',
                img: require('../../assets/fruits/watermelon.jpeg'),
              },
            ],
          },
        ]}
        renderItem={({item}) => <RenderItem item={item} />}
        renderSectionHeader={({section}) => <SectionHeader section={section} />}
        ItemSeparatorComponent={() => <ItemSeparator />}
        keyExtractor={(item, index) => index}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  superheroImage: {
    width: 40,
    height: 40,
    paddingTop: 5,
    paddingBottom: 5,
  },
});

export default SectionListExample;
