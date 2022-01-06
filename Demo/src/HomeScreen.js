import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
} from 'react-native';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.buttonContainer}>
        <HomeScreenButton
          message="FlatList Button Pressed..."
          text="Flat List Basics"
        />
        <HomeScreenButton
          message="Section List Button Pressed..."
          text="Section List Basics"
        />
      </View>
    </SafeAreaView>
  );
};

const HomeScreenButton = props => {
  return (
    <TouchableOpacity
      onPress={() => {
        alert(props.message);
      }}>
      <View style={styles.buttonView}>
        <Text style={styles.buttonText}>{props.text}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  buttonContainer: {
    marginRight: 20,
    marginLeft: 20,
    aspectRatio: 1,
    justifyContent: 'center',
  },
  buttonView: {
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

export default HomeScreen;
