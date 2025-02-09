import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // For icons

const App = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.iconButton}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Search</Text>
        <Ionicons name="settings-outline" size={24} color="black" />
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <TextInput style={styles.searchInput} placeholder="Search..." />
      </View>

      {/* Image Section */}
      <Image
        source={{ uri: 'https://example.com/car-image.jpg' }} // Replace with actual image URL
        style={styles.image}
      />

      {/* Word and Pronunciation */}
      <Text style={styles.word}>Car</Text>
      <Text style={styles.pronunciation}>/kär/</Text>

      {/* Definition */}
      <Text style={styles.definition}>A four-wheeled road vehicle that is powered by an engine and is able to carry a small number of people.</Text>

      {/* Translation Section */}
      <View style={styles.translationContainer}>
        <Text style={styles.translation}>Japanese: 車 (Kuruma)</Text>
        <Text style={styles.translation}>German: Auto</Text>
        <Text style={styles.translation}>Spanish: auto</Text>
      </View>

      {/* Example Sentences */}
      <View style={styles.examples}>
        <Text style={styles.example}>1. I'll wait in the car.</Text>
        <Text style={styles.example}>2. He got into the car and drove away.</Text>
        <Text style={styles.example}>3. She bought a new car.</Text>
      </View>

      {/* Bottom Bar with Navigation */}
      <View style={styles.bottomNav}>
        <Ionicons name="grid-outline" size={30} color="black" />
        <Ionicons name="home-outline" size={30} color="black" />
        <Ionicons name="chevron-back-outline" size={30} color="black" />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F4F4',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#F4C1C1',
  },
  iconButton: {
    padding: 5,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  searchContainer: {
    padding: 15,
    backgroundColor: '#F4C1C1',
  },
  searchInput: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 8,
    paddingLeft: 10,
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
  },
  word: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
  },
  pronunciation: {
    fontSize: 18,
    textAlign: 'center',
    color: '#777',
  },
  definition: {
    fontSize: 16,
    marginVertical: 15,
    paddingHorizontal: 10,
  },
  translationContainer: {
    padding: 10,
    backgroundColor: '#F4C1C1',
  },
  translation: {
    fontSize: 16,
  },
  examples: {
    padding: 10,
    backgroundColor: '#fff',
  },
  example: {
    fontSize: 16,
    marginVertical: 5,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 15,
    backgroundColor: '#F4C1C1',
  },
});

export default App;
