import React, { useLayoutEffect } from "react";
import {
  TouchableOpacity,
  View,
  StyleSheet,
  Text,
  ScrollView,
} from "react-native";
import { FontAwesome, Ionicons } from "@expo/vector-icons";

import Categories from "../../../component/Categories";
import { RootStackParamList } from "../../../types";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import { handleCategoryPress } from "../../../helpers/navigationHelper";

const housingSaleCategories = [
  { label: "Daire", categoryType: "apartmentHousing", count: 443883 },
  { label: "Müstakil Ev", categoryType: "detachedHoising", count: 89395 },
];

const HousingDailyRentalSelect = () => {
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
        categories={housingSaleCategories}
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
    alignContent: "space-around",
    paddingLeft: 15,
  },
  categoryTitle: {
    paddingBottom: 10,
    borderBottomWidth: 2,
    borderColor: "#eee",
    fontWeight: "bold",
    color: "#185e91",
    fontSize: 16,
    alignContent: "center",
  },
});
export default HousingDailyRentalSelect;
