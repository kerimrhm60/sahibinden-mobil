import React, { useLayoutEffect } from "react";
import { View, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { Ionicons, FontAwesome5, FontAwesome } from "@expo/vector-icons";
import Categories from "../component/Categories";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../types";
import { CategoryItem } from "../types/categoryType";
import { handleCategoryPress } from "../helpers/navigationHelper";

const categories = [
  {
    label: "Emlak",
    subtitle: "Konut, İş Yeri, Arsa...",
    icon: <Ionicons name="home" color="#fbbc05" />,
    categoryType: "home",
  },
  {
    label: "Vasıta",
    subtitle: "Otomobil, Arazi, SUV...",
    icon: <Ionicons name="car-sport" color="#ea4335" />,
    categoryType: "car",
  },
  {
    label: "Yedek Parça",
    subtitle: "Otomotiv, Motosiklet...",
    icon: <Ionicons name="construct" color="#00acc1" />,
    categoryType: "spareParts",
  },
  {
    label: "İkinci El",
    subtitle: "Bilgisayar, Cep Telefonu...",
    icon: <Ionicons name="cart" color="#7e57c2" />,
    categoryType: "secondHand",
  },
  {
    label: "İş İlanları",
    subtitle: "Hukuk, Eğitim...",
    icon: <Ionicons name="briefcase" color="#9ccc65" />,
    categoryType: "jobPosting",

  },
  {
    label: "Hayvanlar Alemi",
    subtitle: "Evcil, Akvaryum...",
    icon: <Ionicons name="paw" color="#29b6f6" />,
    categoryType: "animals",

  },
];

const HomeScreen = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

// const handleCategoryPress = (category: CategoryItem) => {
//   const routeMap: Record<string, keyof RootStackParamList> = {
//     home: "HomeCategorySelection",
//     car: "VehicleCategorySelection",
//     motorcycle: "MotorcycleCategorySelection",
//   };

//   if (category.categoryType && routeMap[category.categoryType]) {
//     const routeName = routeMap[category.categoryType];
//     navigation.navigate(routeName);
//   } else {
//     console.warn("Tanımsız veya eksik categoryType:", category.categoryType);
//   }
// };
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
         
          >
            <Ionicons
              name="mail"
              size={24}
              color="#fff"
              style={{ marginRight: 20 }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => console.log("Kullanıcı profili açılıyor")}
          >
            <FontAwesome name="user" size={24} color="#fff" />
          </TouchableOpacity>
        </View>
      ),
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.searchWrapper}>
        <FontAwesome5
          name="search"
          size={20}
          color="#333"
          style={styles.searchIcon}
        />
        <TextInput
          placeholder="Örnek: Koltuk, ceket, gitar"
          style={styles.input}
        />
        <View style={styles.iconContainer}>
          <Ionicons
            name="mic"
            size={20}
            color="#333"
            // style={[styles.icon, { marginLeft: 10 }]}
            style={styles.icon}
          />
          <Ionicons name="camera" size={20} color="#333" style={styles.icon} />
        </View>
      </View>
      <Categories
        categories={categories}
        // onCategoryPress={handleCategoryPress}
         onCategoryPress={(category) => handleCategoryPress(category, navigation)}
      />

      <TouchableOpacity
        style={styles.fab}
          onPress={() => navigation.navigate("PostAdd")}
          // onPress={() => navigation.navigate("ProductDetailScreen")}
      >
        <Ionicons name="add" size={30} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchWrapper: {
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    paddingHorizontal: 15,
    marginBottom: 20,
    flexDirection: "row",
    alignItems: "center",
    height: 100,
    width: "100%",
  },
  searchIcon: {
    position: "absolute",
    left: 25,
    zIndex: 1,
  },
  iconContainer: {
    position: "absolute",
    right: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    marginLeft: 10,
  },
  input: {
    flex: 1,
    height: 60,
    fontSize: 16,
    color: "#333",
    paddingLeft: 35,
    paddingRight: 10,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 5,
  },
  fab: {
    position: "absolute",
    bottom: 70,
    right: 30,
    backgroundColor: "#005b96",
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5, 
  },
});

export default HomeScreen;
