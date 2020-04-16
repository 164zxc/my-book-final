import React from 'react';
// import { View, FlatList } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {createBottomTabNavigator} from'@react-navigation/bottom-tabs';
import AlbumScreen from '../../screens/AlbunScreen';
import DetailScreen from '../../screens/DetailScreen';

const Tab = createBottomTabNavigator();
const MyTabs = (props) => {
  return (<NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name="Home" component={AlbumScreen} />
      <Tab.Screen name="Settings" component={DetailScreen} />
    </Tab.Navigator> </NavigationContainer>
  );
}
export default MyTabs;