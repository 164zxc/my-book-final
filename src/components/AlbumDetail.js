import React from "react";
import { StyleSheet, Text, View, Image,TouchableOpacity,Linking} from "react-native";


const AlbumDetail = ({ album,navigation })=> {
   return (
      <View style={styles.cardContainerStyle}>
       <TouchableOpacity 
       onPress={()=> navigation.navigate('Detail',album)}>
        <View style={styles.cardSectionStyle}>
          <Image
            style={styles.imageStyle}
            source={{uri: album.image}}
          />         
        </View></TouchableOpacity>
        <View>    
        <Text style={styles.textstyle1}>
                 {album.title}</Text>
         <Text style={styles.textstyle2}>
                 {album.artist}</Text>
         <Text style={styles.textstyle3}>
                 {album.cont}</Text>


      </View>
      </View>  
  )};

const styles = StyleSheet.create({
  thumbnailContainerStyle: {
    flexDirection: "row",
    justifyContent: "flex-start"
  },
  thumbnailStyle: {
    height: 50,
    width: 50,
    margin: 5
  },
  headerContentStyle: {
    flexDirection: "column",
    paddingLeft: 10
  },
  cardContainerStyle: {
    borderWidth: 0.1,
    borderColor: "#ddd",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 18,
    marginTop:12,
    display:"flex",
    flexDirection:"row",
    
  },
  cardSectionStyle: {
    display:"flex",
    flexDirection:"row",
    backgroundColor: "#fff",
    borderColor: "#CD5C5C",
    height:170,
  },
  imageStyle: {
    height: 140,
    width:93,
    display:"flex",
    marginTop:15,
    marginBottom:15
    
  },
  textstyle1:{
    fontSize:18,
    marginLeft:27,
    marginTop:28,
    marginRight:28,
    color:"#2e2e2e",
    fontFamily:"sans-serif-medium",
    
  },
  textstyle2:{
    fontSize:14,
    lineHeight:24,
    marginLeft:27,
    marginTop:11,
    marginRight:28,
    color:"#717171",
    fontFamily:"sans-serif-medium",
    
  },
  textstyle3:{
    fontSize:14,
    width:220,
    marginLeft:27,
    marginRight:28,
    marginTop:11,
    color:"#b1b1b1",
    fontFamily:"sans-serif-medium",
    
  }
});

export default AlbumDetail;
