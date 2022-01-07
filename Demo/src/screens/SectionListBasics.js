import React from 'react';
import {SectionList, View, Text, StyleSheet, SafeAreaView} from 'react-native';
import RenderItem from '../components/RenderItem';

import SectionHeader from '../components/SectionHeader';

const SectionListExample = () => {
  return (
    <SafeAreaView style={styles.container}>
      <SectionList
        sections={[
          {title: 'Animals', data: ['Cat', 'Dog', 'Tiger', 'Monkey', 'Lion']},
          {
            title: 'Superheros',
            data: ['Spiderman', 'Batman', 'Superman', 'Xman', 'Ironman'],
          },
          {
            title: 'Vegis',
            data: ['Carrot', 'LadyFinger', 'Cabbage', 'Coliflower', 'Bringle'],
          },
          {title: 'Fruits', data: ['Banana', 'Apple', 'Grapes', 'Water Melon']},
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
});

export default SectionListExample;
