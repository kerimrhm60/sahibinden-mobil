import React, { useLayoutEffect } from "react";
import Categories from "../../../component/Categories";

import { FontAwesome, Ionicons } from "@expo/vector-icons";

import { handleCategoryPress } from "../../../helpers/navigationHelper";
import { RootStackParamList } from "../../../types";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity, View, StyleSheet,Text, ScrollView } from "react-native";

const homeCategories = [

  { label: "Konut", categoryType: "homeSubCategory", count: 443883 },
  { label: "Arsa", categoryType: "homeSubCategory", count: 89395 },
  { label: "Bina", categoryType: "homeSubCategory", count: 89395 },
  { label: "Otel", categoryType: "homeSubCategory", count: 89395 },
];

const HomeCategorySelection = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerStyle: {
        backgroundColor: "#005b96",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold",
      },
      headerLeft: () => (
        <TouchableOpacity
          onPress={() => console.log("Menü açıldı")}
          style={{ marginLeft: 15 }}
        >
          <Ionicons name="menu" size={24} color="#fff" />
        </TouchableOpacity>
      ),
      headerRight: () => (
        <View style={{ flexDirection: "row", marginRight: 15 }}>
          <TouchableOpacity
            onPress={() => console.log("Kullanıcı profili açılıyor")}
          >
            {/* <FontAwesome name="camera" size={24} color="#fff" /> */}
          </TouchableOpacity>
        </View>
      ),
    });
  }, [navigation]);
  return (
  <ScrollView contentContainerStyle={styles.container}>
    <View style={styles.categoryHeader}>
      <Text style={styles.categoryTitle}>Kategory Seçimi</Text>
    </View>
    <Categories
      categories={homeCategories}
      onCategoryPress={(category) =>
        handleCategoryPress(category, navigation)
      }
    />
  </ScrollView>
  );
};

const styles = StyleSheet.create({
    container: {
    // padding: 15,
    backgroundColor: "#fff",
    flexGrow: 1,
  },
  categoryHeader: {
    marginTop: 15,
    alignContent:"space-around",
    paddingLeft:15,


  },
  categoryTitle: {
    paddingBottom:10,
    borderBottomWidth: 2,
    borderColor: "#eee",
    fontWeight: "bold",
    color:"#185e91",
    fontSize: 16,
    alignContent:"center",

  },
});
export default HomeCategorySelection;
