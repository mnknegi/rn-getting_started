import React from 'react';
import {TouchableOpacity, Text, View, StyleSheet} from 'react-native';

const HomeScreenButton = props => {
  return (
    <TouchableOpacity onPress={() => {}}>
      <View style={styles.container}>
        <Text style={styles.buttonText}>{props.text}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    height: 60,
    backgroundColor: '#2196F3',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
    fontSize: 24,
    fontFamily: 'Papyrus',
  },
});

export default HomeScreenButton;
