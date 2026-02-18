import React, { useLayoutEffect } from "react";
import { FontAwesome, Ionicons } from "@expo/vector-icons";

import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity, View } from "react-native";
import { RootStackParamList } from "../../../types";
import { handleCategoryPress } from "../../../helpers/navigationHelper";
import Categories from "../../../component/Categories";

const homeCategories = [
  { label: "Otomobil", count: 443883, categoryType: "car" },
  { label: "Motosiklet", count: 145398, categoryType: "motorcycle" },
  { label: "Minivan & Panelvan", count: 88630, categoryType: "minibus" },
  { label: "Traktör", count: 88630, categoryType: "tractor" },
];

const VehicleCategorySelection = () => {
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
    <Categories
      categories={homeCategories}
      onCategoryPress={(category) => handleCategoryPress(category, navigation)}
    />
  );
};

export default VehicleCategorySelection;
