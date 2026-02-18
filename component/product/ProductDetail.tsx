import React, { useLayoutEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import { Dimensions } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../types";
import ProductDetailList from "./ProductDetailList";

const product = {
  imageUrls: [
    require("../../assets/img/image3.jpg"),
    require("../../assets/img/image3.jpg"),
    require("../../assets/img/image3.jpg"),
    require("../../assets/img/image3.jpg"),
  ],
  totalImages: 3,
  store: "Microsoft Store",
  seller: "ANKA OTONOMİ",
  location: "Ankara, Akyurt, Saracalar Mah.",
  details: [
    { label: "Fiyat", value: "1.075.000 TL", isBold: true },
    { label: "İlan Tarihi", value: "05.05.2025" },
    { label: "İlan No", value: "1241359823" },
    { label: "Marka", value: "Aion" },
    { label: "Seri", value: "S" },
    { label: "Model", value: "580" },
    { label: "Yakıt", value: "Elektrik" },
    { label: "Marka", value: "Aion" },
    { label: "Seri", value: "S" },
    { label: "Model", value: "580" },
    { label: "Yakıt", value: "Elektrik" },
    { label: "Marka", value: "Aion" },
    { label: "Seri", value: "S" },
    { label: "Model", value: "580" },
    { label: "Yakıt", value: "Elektrik" },
    { label: "Marka", value: "Aion" },
    { label: "Seri", value: "S" },
    { label: "Model", value: "580" },
    { label: "Yakıt", value: "Elektrik" },
  ],
};

const screenWidth = Dimensions.get("window").width;
const ProductDetail = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const [activeIndex, setActiveIndex] = useState(0);
  const [productDetails, setProductDetails] = useState(product);
  useLayoutEffect(() => {
    navigation.setOptions({
      headerStyle: {
        backgroundColor: "#005b96",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold",
      },
      headerTitle: "İlan Detayı",
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
          <TouchableOpacity>
            <Ionicons
              name="share-social-outline"
              size={24}
              color="#fff"
              style={{ marginRight: 20 }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => console.log("Kullanıcı profili açılıyor")}
          >
            <FontAwesome name="star" size={24} color="#fff" />
          </TouchableOpacity>
        </View>
      ),
    });
  }, [navigation]);

  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={styles.container}>
        <View style={styles.productTitle}>
          <Text style={styles.seller}>{productDetails.seller}</Text>
        </View>
        <View style={styles.imageContainer}>
          <ScrollView
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            onScroll={(e) => {
              const offsetX = e.nativeEvent.contentOffset.x;
              const newIndex = Math.round(offsetX / screenWidth);
              setActiveIndex(newIndex);
            }}
          >
            {productDetails.imageUrls.map((img: any, index: number) => (
              <Image
                key={index}
                source={img}
                style={styles.image}
                resizeMode="cover"
              />
            ))}
          </ScrollView>

          <Text style={styles.galleryIndex}>
            {activeIndex + 1} / {productDetails.imageUrls.length}
          </Text>
        </View>

        <View style={styles.sellerInfo}>
          <Text style={styles.store}>{productDetails.store}</Text>
          <View style={styles.separator} />
          <Text style={styles.location}>{productDetails.location}</Text>
        </View>

        <View style={styles.tabContainer}>
          <Text style={[styles.tab, styles.activeTab]}>İlan Bilgileri</Text>
          <Text style={styles.tab}>Açıklama</Text>
          <Text style={styles.tab}>Konumu</Text>
        </View>

        <View style={styles.detailsContainer}>
          <ProductDetailList data={productDetails.details} />
        </View>
      </ScrollView>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.callButton}>
          <Text style={styles.buttonText}>Ara</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.messageButton}>
          <Text style={styles.buttonText}>Mesaj Gönder</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  //   image: {
  //     width: "100%",
  //      height: 220,
  //     resizeMode: "cover" },

  image: {
    width: screenWidth,
    height: 220,
    resizeMode: "cover", // opsiyonel çünkü zaten <Image />'e direkt veriyorsun
  },
  imageContainer: { position: "relative" },
  galleryIndex: {
    position: "absolute",
    bottom: 10,
    alignSelf: "center",
    backgroundColor: "#0008",
    color: "#fff",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 6,
    fontSize: 13,
  },
  productTitle: {
    alignContent: "center",
    alignItems: "center",
    color: "#fff",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    fontWeight: "bold",
    fontSize: 16,
  },
  seller: {
    alignContent: "center",
    alignItems: "center",
    fontSize: 16,
    color: "#333",
  },
  sellerInfo: {
    alignContent: "center",
    alignItems: "center",
    color: "#1565c0",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    fontWeight: "bold",
    fontSize: 16,
  },
  store: {
    fontSize: 13,
    padding: 10,

    color: "#1565c0",
  },
  separator: {
    height: 1,
    width: "100%",
    backgroundColor: "#e0e0e0",
  },

  location: {
    paddingTop: 10,
    paddingBottom: 1,
    fontSize: 13,
    color: "#e0e0e0",
  },
  tabContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#f1f1f1",
    paddingVertical: 10,
  },
  tab: { fontSize: 14, color: "#555" },
  activeTab: {
    color: "#000",
    fontWeight: "bold",
    borderBottomWidth: 2,
    borderColor: "#1565c0",
  },
  detailsContainer: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: "#eee",
  },
  buttonContainer: {
    position: "absolute",
    bottom: 20, // Alt kısmında sabitlemek için
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "space-around",
    paddingHorizontal: 20,
    zIndex: 10, // Diğer öğelerin üstünde kalmasını sağlamak için
  },
  callButton: {
    backgroundColor: "#1565c0",
    padding: 15,
    borderRadius: 8,
    minWidth: "40%",
    alignItems: "center",
  },
  messageButton: {
    backgroundColor: "#1565c0",
    padding: 15,
    borderRadius: 8,
    minWidth: "40%",
    alignItems: "center",
  },
  buttonText: { color: "#fff", fontWeight: "bold" },
});

export default ProductDetail;
