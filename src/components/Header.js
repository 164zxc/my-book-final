import React from "react";
import { StyleSheet, Text, View,Image, Linking } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
const Header = (props) => {
  return (
      <View style={styles.headerStyle}>

{/* <TouchableOpacity onPress={()=>{this.props.navigation.navigate('DrawerOpen')}}> */}
                 <Image
                 style={styles.Icon}
                 source={require('../img/line.png')}
                 
                 />
                 {/* </TouchableOpacity> */}
        
        <Text style={styles.textStyle}>My Book</Text>
        <Image style={styles.Icon}
         source={require('../img/btn_search.png')}></Image>
      </View>
  );
};

const styles = StyleSheet.create({
  headerStyle: {
    flexDirection: "row",
    backgroundColor: "#00b49f",
    justifyContent: "space-between",
    alignItems: "center",
    height: 80,
    paddingTop: 30,
    paddingLeft:8,
    paddingRight:8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    zIndex:1
  },
  textStyle: {
    fontSize: 20,
    flexDirection:"row",
  
    
    lineHeight:24,
    color:"#ffffff"
  },
  Icon:{
    width:40,
    height:40
    
  }
});

export default Header;
