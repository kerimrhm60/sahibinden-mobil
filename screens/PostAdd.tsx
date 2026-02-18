import React, { useLayoutEffect } from "react";
import { View, Text, TextInput, StyleSheet, ScrollView } from "react-native";
import Categories from "../component/Categories";
import { useNavigation } from "@react-navigation/native";
import { CategoryItem } from "../types/categoryType";
import { Ionicons, MaterialIcons } from "@expo/vector-icons"; 
import { RootStackParamList } from "../types";
import { StackNavigationProp } from "@react-navigation/stack";
import { handleCategoryPress } from "../helpers/navigationHelper";



const categoryData: CategoryItem[] = [
  {
    label: "Emlak",
    icon: <Ionicons name="home" color="#fbbc05" />,
    categoryType: "home",

  },
  {
    label: "Vasıta",
    icon: <Ionicons name="car-sport" color="#ea4335" />,
    categoryType: "car",

  },
  {
    label: "Yedek Parça",
    icon: <Ionicons name="construct" color="#00acc1" />,
    categoryType: "spareParts",

  },
  {
    label: "İkinci El",
    icon: <Ionicons name="cart" color="#7e57c2" />,
    categoryType: "secondHand",

  },
  {
    label: "İş İlanları",
    icon: <Ionicons name="briefcase" color="#9ccc65" />,
    categoryType: "jobPosting",

  },
  {
    label: "Hayvanlar Alemi",
    icon: <Ionicons name="paw" color="#29b6f6" />,
    categoryType: "animals",

  },

];
const PostAdd = () => {
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
    });
  }, [navigation]);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Kelime ile kategori arama bölümü */}
      <View style={styles.searchSection}>
        <View style={styles.titleWrapper}>
          <Text style={styles.title}>KELİME İLE KATEGORİ SEÇİMİ</Text>
          <View style={styles.underline} />
        </View>
        <View style={styles.inputWrapper}>
          <TextInput
            placeholder="Örnek: Koltuk, ceket, gitar"
            style={styles.input}
          />
        </View>
      </View>
      <View style={styles.categoryHeader}>
        <Text style={styles.categoryTitle}>ADIM ADIM KATEGORİ SEÇİMİ</Text>
        <View style={styles.underline} />
      </View>
      <Categories  categories={categoryData} 
       onCategoryPress={(category) => handleCategoryPress(category, navigation)}
      
        />
    </ScrollView>
  );
};

export default PostAdd;


const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: "#fff",
    flexGrow: 1,
  },
  searchSection: {
    marginBottom: 25,
  },
  titleWrapper: {
    marginBottom: 10,
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
  },
  underline: {
    height: 2,
    backgroundColor: "#ffc000",
    marginTop: 4,
    width: "100%",
  },
  inputWrapper: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    paddingHorizontal: 10,
    alignItems: "center",
    height: 40,
  },
  input: {
    flex: 1,
    height: 40,
  },
  categoryHeader: {
    marginBottom: 15,
  },
  categoryTitle: {
    fontWeight: "bold",
    fontSize: 16,
  },
});
