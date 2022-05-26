import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ClassList from '../screens/Clases/SubScreensClases/ClassList';
import ClassDetails from '../screens/Clases/SubScreensClases/ClassDetails';
import {ClassStackParamList} from '../Navigation/types';
import React from 'react';

const Stack = createNativeStackNavigator<ClassStackParamList>();

const Navigator = () => {
  return (
    <Stack.Navigator initialRouteName="Classes">
      <Stack.Screen
        name="Classes"
        component={ClassList}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Details"
        component={ClassDetails}
        options={{title: 'Atras'}}
      />
    </Stack.Navigator>
  );
};

export default Navigator;
