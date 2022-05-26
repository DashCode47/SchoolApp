import {View, Text} from 'react-native';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ClasesScrenn from '../screens/Clases/ClasesScrenn';
import {RootStackParamList} from '../Navigation/types';
import React from 'react';
const Stack = createNativeStackNavigator<RootStackParamList>();
const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Class"
          component={ClasesScrenn}
          options={{title: 'Atras'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
