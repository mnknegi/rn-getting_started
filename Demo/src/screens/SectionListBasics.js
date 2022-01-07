import React from 'react';
import {SectionList, View, Text, StyleSheet, SafeAreaView} from 'react-native';
import RenderItem from '../components/RenderItem';

import SectionHeader from '../components/SectionHeader';

const SectionListExample = () => {
  return (
    <SafeAreaView style={styles.container}>
      <SectionList
        sections={[
          {
            title: 'Animals',
            data: [
              {item: 'Cat', img: require('../../assets/animals/cat.jpeg')},
              {item: 'Dog', img: require('../../assets/animals/dog.jpeg')},
              {item: 'Tiger', img: require('../../assets/animals/tiger.jpeg')},
              {
                item: 'Monkey',
                img: require('../../assets/animals/monkey.jpeg'),
              },
              {item: 'Lion', img: require('../../assets/animals/lion.jpeg')},
            ],
          },
          {
            title: 'Superheros',
            data: ['Spiderman', 'Batman', 'Superman', 'Xman', 'Ironman'],
          },
          {
            title: 'Vegis',
            data: ['Carrot', 'LadyFinger', 'Cabbage', 'Coliflower', 'Bringle'],
          },
          {
            title: 'Fruits',
            data: ['Banana', 'Apple', 'Grapes', 'Water Melon'],
          },
        ]}
        renderItem={({item}) => <RenderItem item={item} />}
        renderSectionHeader={({section}) => <SectionHeader section={section} />}
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
    backgroundColor: 'yellow',
  },
  superheroImage: {
    height: 80,
    width: 80,
    paddingTop: 5,
    paddingBottom: 5,
    borderRadius: 5,
  },
});

export default SectionListExample;
