import React from "react";
import { StyleSheet, Text, View, Image,ScrollView} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { TouchableOpacity } from "react-native-gesture-handler";
import {DrawerItem,DrawerNavigation} from 'react-native';
import Header from './Header';
const DrawerContent=(props)=>{
  return(
    <SafeAreaView style={{flex:1,backgroundColor:'#00b49f',zIndex:3}}>
      <View style={{height:131,marginTop:37,marginLeft:16,backgroundColor:'#00b49f'}}>
        <Image
        style={{width:70,height:70}}
        source={require('../img/img_user_photo.png')}   
        />
        <TouchableOpacity>
            <Text style={{color:'#fff',fontSize:14,marginTop:10}}>GamexHCI</Text>
        </TouchableOpacity>
        
        <Text style={{color:'#fff',fontSize:14,marginTop:5}}>gdlab2017@gmail.com</Text>


      </View>

      <ScrollView style={{marginBottom:-50,backgroundColor:'#ebebeb',zIndex:2 }}>
        <TouchableOpacity
        style={styles.list}onPress={()=>props.navigation.navigate("Home")}>
         <Image
         style={styles.GrayIcon}
         source={require('../img/home1.png')}
         />
         <Text style={styles.GrayWord}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity
        style={styles.list}onPress={()=>props.navigation.navigate("Home")}>
         <Image
         style={styles.GrayIcon}
         source={require('../img/book1.png')}
         />
         <Text style={styles.GrayWord}>My Book</Text>
        </TouchableOpacity>

        <TouchableOpacity
        style={styles.list}onPress={()=>props.navigation.navigate("Home")}>
         <Image
         style={styles.GrayIcon}
         source={require('../img/favorite1.png')}
         />
         <Text style={styles.GrayWord}>Favorites</Text>
        </TouchableOpacity>

        <TouchableOpacity
        style={styles.list}onPress={()=>props.navigation.navigate("Home")}>
         <Image
         style={styles.GrayIcon}
         source={require('../img/icon_drawer_setting.png')}
         />
         <Text style={styles.GrayWord}>Settings</Text>
        </TouchableOpacity>

        <TouchableOpacity
        style={styles.list}onPress={()=>props.navigation.navigate("Home")}>
         <Image
         style={styles.GrayIcon}
         source={require('../img/icon_drawer_aboutus.png')}
         />
         <Text style={styles.GrayWord}>About us</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles=StyleSheet.create({
    list:{
        padding:15,
        paddingLeft:24,
        flexDirection: "row",
        justifyContent: "flex-start"
    },
    GrayWord:{
        //fontFamily:"Roboto-Medium",
        color:"#5c5c5c",
        fontSize:14,
        marginTop:2,
        marginLeft:20,
    },
    GrayIcon:{
        width:24,
        height:24,
    }

});
export default DrawerContent;