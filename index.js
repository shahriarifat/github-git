import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  Alert,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";

const LanguageDashboard = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLanguages, setSelectedLanguages] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const languages = [
    { id: 1, name: "Japanese", flag: "🇯🇵", progress: 0 },
    { id: 2, name: "German", flag: "🇩🇪", progress: 0 },
    { id: 3, name: "Spanish", flag: "🇪🇸", progress: 0 },
    { id: 4, name: "Arabic", flag: "🇸🇪", progress: 0 },
    { id: 5, name: "Bangla", flag: "🇧🇩", progress: 0 },
    { id: 6, name: "Mandarin", flag: "🇨🇳", progress: 0 },
    { id: 7, name: "Russian", flag: "🇷🇺", progress: 0 },
    { id: 8, name: "Hindi", flag: "🇮🇳", progress: 0 },
    { id: 9, name: "Portuguese", flag: "🇧🇷", progress: 0 },
  ];

  const filteredLanguages = languages.filter((lang) =>
    lang.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleLanguageSelect = (language) => {
    if (selectedLanguages.length < 4) {
      const isSelected = selectedLanguages.find((lang) => lang.id === language.id);
      if (isSelected) {
        setSelectedLanguages(selectedLanguages.filter((lang) => lang.id !== language.id));
      } else {
        setSelectedLanguages([...selectedLanguages, language]);
      }
    } else {
      Alert.alert("Limit Reached", "You can only select up to 4 languages.");
    }
  };

  const handleNavigate = () => {
    if (selectedLanguages.length === 0) {
      Alert.alert("Selection Required", "Please select at least one language.");
    } else if (selectedLanguages.length > 4) {
      Alert.alert("Limit Reached", "You can only select up to 4 languages.");
    } else {
      router.push("/dictionary"); // Navigate to the dictionary page
    }
  };

  const renderLanguageCard = (language) => {
    const isSelected = selectedLanguages.find((lang) => lang.id === language.id);

    return (
      <TouchableOpacity
        key={language.id}
        style={[
          styles.languageCard,
          isSelected && styles.languageCardSelected,
        ]}
        onPress={() => handleLanguageSelect(language)}
        activeOpacity={0.7}
      >
        <Text style={styles.flag}>{language.flag}</Text>
        <Text style={styles.languageName}>{language.name}</Text>
        {isSelected && (
          <View style={styles.selectedIndicator}>
            <MaterialIcons name="check-circle" size={24} color="#007AFF" />
          </View>
        )}
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView
      style={[styles.container, isDarkMode && styles.darkContainer]}
    >
      {/* Header */}
      <View style={styles.header}>
        <Text style={[styles.title, isDarkMode && styles.darkText]}>Dashboard</Text>
      </View>

      {/* Search Bar */}
      <View
        style={[styles.searchContainer, isDarkMode && styles.darkSearchContainer]}
      >
        <MaterialIcons
          name="search"
          size={24}
          color={isDarkMode ? "#fff" : "#666"}
          style={styles.searchIcon}
        />
        <TextInput
          style={[styles.searchBar, isDarkMode && styles.darkSearchBar]}
          placeholder="Search Languages..."
          placeholderTextColor={isDarkMode ? "#999" : "#666"}
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
        {searchQuery !== "" && (
          <TouchableOpacity onPress={() => setSearchQuery("")}>
            <MaterialIcons
              name="close"
              size={24}
              color={isDarkMode ? "#fff" : "#666"}
            />
          </TouchableOpacity>
        )}
      </View>

      {/* Selected Languages Count */}
      <View
        style={[styles.selectionInfo, isDarkMode && styles.darkSelectionInfo]}
      >
        <Text style={[styles.selectionText, isDarkMode && styles.darkText]}>
          Selected: {selectedLanguages.length}/4 languages
        </Text>
      </View>

      {/* Language Selection */}
      <Text style={[styles.sectionTitle, isDarkMode && styles.darkText]}>
        Available Languages
      </Text>
      <ScrollView
        contentContainerStyle={styles.languageGrid}
        showsVerticalScrollIndicator={false}
      >
        {filteredLanguages.map(renderLanguageCard)}
      </ScrollView>

      {/* Button to Navigate to Dictionary Page */}
      <TouchableOpacity
        style={styles.navigateButton}
        onPress={handleNavigate}
      >
        <Text style={styles.buttonText}>Go to Dictionary</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    borderRadius: 12,
    paddingHorizontal: 16,
    marginBottom: 24,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchBar: {
    flex: 1,
    padding: 12,
    fontSize: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 16,
    color: "#333",
  },
  languageGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  languageCard: {
    width: "48%",
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  flag: {
    fontSize: 32,
    marginBottom: 8,
  },
  languageName: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
    marginBottom: 8,
  },
  languageCardSelected: {
    borderWidth: 2,
    borderColor: "#007AFF",
    backgroundColor: "#f8f9fa",
  },
  selectedIndicator: {
    position: "absolute",
    top: 8,
    right: 8,
  },
  selectionInfo: {
    backgroundColor: "#f8f9fa",
    padding: 12,
    borderRadius: 12,
    marginBottom: 16,
  },
  selectionText: {
    fontSize: 16,
    color: "#333",
    textAlign: "center",
    fontWeight: "600",
  },
  navigateButton: {
    backgroundColor: "#007AFF",
    padding: 16,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "bold",
  },
});

export default LanguageDashboard;
