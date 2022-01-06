import React from 'react';
import {View} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import FlatListExample from './src/FlatList';
import SectionListExample from './src/SectionListBasics';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
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
