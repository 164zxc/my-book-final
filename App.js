import React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Header from './src/components/Header'
import AlbumScreen from './screens/AlbunScreen'
import DetailScreen from './screens/DetailScreen'
import DrawerContent from "./src/components/ScreenName"
const Tab=createBottomTabNavigator();

function HomeTabs() {
  return (
    
    <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({focused}) => {
        let iconName;

        if (route.name === 'Home') {
          iconName = focused
            ? require("./src/img/home2.png")
            : require('./src/img/home1.png');
        } else if (route.name === 'My Book') {
          iconName = focused 
          ? require("./src/img/book2.png")
          : require('./src/img/book1.png');
        }
        else if(route.name === 'Favorites'){
          iconName = focused 
          ? require("./src/img/favorite2.png")
          : require('./src/img/favorite1.png');

        }
        // You can return any component that you like here!
        return <Image source={iconName} style={{width:30,height:30}} />;
      },
    })}
        
        
        tabBarOptions={{
          activeTintColor: '#00b49f',
          inactiveTintColor: '#818181',
        }}
        >
            <Tab.Screen name="Home" component={AlbumScreen}/>
            <Tab.Screen name="My Book" component={AlbumScreen}/>
            <Tab.Screen name="Favorites" component={AlbumScreen}/>
          </Tab.Navigator>
      )
    }
    const Drawer = createDrawerNavigator();

const Stack =createStackNavigator();
const App = () => {
  return (
    
  <NavigationContainer>
    <Header></Header>
     <Drawer.Navigator initialRouteName="Home"
     drawerContent={props=>DrawerContent(props)}>
        <Drawer.Screen name="Home" component={HomeTabs} />
      </Drawer.Navigator>
  </NavigationContainer>
  );
};

export default App;