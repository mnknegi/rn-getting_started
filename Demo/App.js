import React from 'react';
import {} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeScreen from './src/screens/HomeScreen';
import SectionListExample from './src/screens/SectionListBasics';
import FlatListExample from './src/screens/FlatList';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{title: 'Home Screen'}}
        />
        <Stack.Screen
          name="FlatList"
          component={FlatListExample}
          options={{title: 'Flat List Basics'}}
        />
        <Stack.Screen
          name="SectionList"
          component={SectionListExample}
          options={{title: 'Section List Basics'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
