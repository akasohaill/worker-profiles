import React from 'react';
import { View, FlatList, Image, Text, StyleSheet } from 'react-native';

const WorkerGrid = ({ workers }) => {
  return (
    <FlatList
      data={workers}
      numColumns={4}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View style={styles.gridItem}>
          <View style={styles.flag}>
          <Text style={styles.flagtext}>{item.country}</Text>
          </View>
          <Image source={{ uri: item.profileImage }} style={styles.profileImage} />
          <Text style={styles.text}>{item.name}</Text>
          
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  gridItem: {
    display:'flex',
    flex: 1,
    margin: 10,
    alignItems: 'center',
  },
  flag:{
    width:30,
    height:30,
    left:30,
    bottom:-20,
    zIndex:2
  },
  flagtext:{
    fontSize:30,
    textAlign:'center'
  },
  profileImage: {
    width: 85,
    height: 85,
    borderRadius: 50,
    marginBottom: 10,
  },
  text:{
    fontWeight:'500',
    fontSize:15
  }
});

export default WorkerGrid;
