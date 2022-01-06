import React from 'react';
import {SectionList, View, Text, StyleSheet, SafeAreaView} from 'react-native';

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
        renderItem={({item}) => (
          <View style={styles.itemView}>
            <Text style={styles.cellItem}> {item} </Text>
          </View>
        )}
        renderSectionHeader={({section}) => (
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionHeaderTitle}> {section.title} </Text>
          </View>
        )}
        keyExtractor={(item, index) => index}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  sectionHeader: {
    height: 30,
    backgroundColor: 'gray',
    justifyContent: 'center',
  },
  sectionHeaderTitle: {
    fontSize: 16,
    fontFamily: 'Helvetica-Bold',
  },
  itemView: {
    // justifyContent: 'center',
    height: 60,
    backgroundColor: 'lightgray',
    borderColor: 'gray',
    borderBottomWidth: 0.3,
    // flexDirection: 'row',
    justifyContent: 'center',
  },
  cellItem: {
    fontSize: 22,
    fontFamily: 'Optima',
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
