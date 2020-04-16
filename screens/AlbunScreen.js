import React from "react";
import { View, FlatList } from "react-native";

import AlbumsDetail from "../src/components/AlbumDetail";
import albumsData from "../json/albums.json";

const AlbumScreen = ({navigation}) => {
  return (
    <View style={{flex:1}}>
      
      <FlatList
      data={albumsData.albumList}
      renderItem={({ item }) => 
      <AlbumsDetail 
      album={item} 
      navigation={navigation}
      />}
      keyExtractor={item => item.title}
      />
      
    </View>
  );
};

export default AlbumScreen;
