import React from 'react';
import { View, TextInput, StyleSheet, FlatList, Text, TouchableOpacity } from 'react-native';
import workerCategories from '../data/categories.json'; // Import categories data from JSON

const Header = ({ onSearch, onSelectCategory }) => {
  return (
    <View style={styles.headerContainer}>
      {/* Search Bar */}
      <TextInput
        placeholder="Search workers..."
        style={styles.searchInput}
        onChangeText={onSearch}
      />
      
      {/* Carousel for Categories */}
      <FlatList
        data={workerCategories}
        horizontal
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => onSelectCategory(item.role)}>
            <View style={styles.categoryContainer}>
              <Text style={styles.categoryIcon}>{item.icon}</Text>
              <Text style={styles.categoryText}>{item.role}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    padding: 10,
  },
  searchInput: {
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  categoryContainer: {
    alignItems: 'center',
    marginRight: 10,
  },
  categoryIcon: {
    fontSize: 35,
    backgroundColor:'#D3D3D3',
    borderRadius:40,
    padding:10
  },
  categoryText: {
    fontSize: 15,
    fontWeight:'500',
    // marginTop: 5,
    padding:10
  },
});

export default Header;
