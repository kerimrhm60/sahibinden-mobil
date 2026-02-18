import React, { useLayoutEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../types";
import { ProductListProps } from "../../types/productType";

const ProductList: React.FC<ProductListProps> = ({ listings }) => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.buttonsRow}>
        <TouchableOpacity style={styles.button}>
          <Text>Filtrele</Text>
        </TouchableOpacity>
        <View style={styles.divider} />
        <TouchableOpacity style={styles.button}>
          <Text>Sırala</Text>
        </TouchableOpacity>
        <View style={styles.divider} />
        <TouchableOpacity style={styles.button}>
          <Text>Görünüm</Text>
        </TouchableOpacity>
        <View style={styles.divider} />
        <TouchableOpacity style={styles.button}>
          <Text>Kaydet</Text>
        </TouchableOpacity>
      </View>

      {listings.map((item) => (
        <View key={item.id} style={styles.card}>
          <Image source={item.image} style={styles.image} />
          <View style={styles.info}>
            <Text style={styles.title}>{item.title}</Text>
            <View style={{ flexDirection: "row", alignItems: "center", marginTop: 4 }}>
              <Ionicons
                name="location-outline"
                size={16}
                color="gray"
                style={{ marginRight: 4 }}
              />
              <Text style={styles.location}>{item.location}</Text>
            </View>
            <Text style={styles.price}>{item.price}</Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { backgroundColor: "#f5f5f5" },
  header: {
    padding: 16,
  },
  headerTitle: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  resultCount: {
    color: "#fff",
    marginTop: 4,
  },
  buttonsRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#fff",
    borderColor: "gray",
    borderWidth: 1,
    paddingVertical: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 4,
  },
  divider: {
    width: 1,
    height: "60%",
    backgroundColor: "gray",
    alignSelf: "center",
  },
  button: {
    padding: 8,
    borderRadius: 8,
  },
  card: {
    backgroundColor: "#fff",
    marginVertical: 6,
    flexDirection: "row",
    padding: 10,
    marginHorizontal: 10,
    elevation: 2,
  },
  image: {
    width: 100,
    height: 100,
  },
  info: {
    marginLeft: 10,
    flexShrink: 1,
  },
  title: {
    fontWeight: "bold",
    fontSize: 14,
    marginBottom: 4,
  },
  location: {
    color: "#555",
    marginBottom: 4,
  },
  price: {
    color: "#1976D2",
    fontWeight: "bold",
  },
});

export default ProductList;
