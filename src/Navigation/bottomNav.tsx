import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Navigator from './navigator';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import ClasesNavigator from './ClasesNavigator';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {BotNav} from './types';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
const Tab = createMaterialBottomTabNavigator<BotNav>();

const BottomNav = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({color}) => (
              <FontAwesome name="home" color={color} size={29} />
            ),
          }}
        />
        <Tab.Screen
          name="Clases"
          component={ClasesNavigator}
          options={{
            tabBarIcon: ({color}) => (
              <Entypo name="book" color={color} size={26} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
export default BottomNav;
