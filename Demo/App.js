import React from 'react';
import {} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeScreen from './src/screens/HomeScreen/HomeScreen';
import ListSelectionScreen from './src/screens/ListSelectionBasics/ListSelectionScreen';
import UsersList from './src/screens/Networking/ListUsers';
import FlatListExample from './src/screens/ListSelectionBasics/FlatList';
import SectionListExample from './src/screens/ListSelectionBasics/SectionListBasics';
import UserDetails from './src/screens/Networking/UserDetails';
import CoreComponentsList from './src/screens/CoreComponents/ComponentsList';
import ComponentDisplay from './src/screens/CoreComponents/ComponentDisplay';

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
          name="ListSelectionScreen"
          component={ListSelectionScreen}
          options={{title: 'List Selection Screen'}}
        />
        <Stack.Screen
          name="UsersList"
          component={UsersList}
          options={{title: 'List of Users'}}
        />
        <Stack.Screen
          name="ComponentsList"
          component={CoreComponentsList}
          options={{title: 'Core Components'}}
        />
        <Stack.Screen
          name="ComponentDisplay"
          component={ComponentDisplay}
          options={({route}) => ({
            title: route.params.title,
          })}
        />
        <Stack.Screen
          name="UserDetails"
          component={UserDetails}
          options={({route}) => ({
            title: route.params.first_name + ' ' + route.params.last_name,
          })}
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
