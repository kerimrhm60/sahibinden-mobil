import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { ProductDetailListProps } from "../../types/productType";

const ProductDetailList: React.FC<ProductDetailListProps> = ({ data }) => {
  return (
    <View>
      {data.map((item, index) => (
        <View key={index} style={styles.row}>
          <Text style={styles.label}>{item.label}</Text>
          <Text style={[styles.value, item.isBold && styles.bold]}>
            {item.value}
          </Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  imageContainer: {
    position: "relative",
  },
  image: {
    width: "100%",
    height: 220,
  },
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
  sellerInfo: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: "#eee",
  },
  seller: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#333",
  },
  location: {
    fontSize: 13,
    color: "#666",
  },
  tabContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#f1f1f1",
    paddingVertical: 10,
  },
  tab: {
    fontSize: 14,
    color: "#555",
  },
  activeTab: {
    color: "#000",
    fontWeight: "bold",
    borderBottomWidth: 2,
    borderColor: "#1565c0",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  label: {
    color: "#555",
    fontWeight: "600",
  },
  value: {
    color: "#000",
  },
  bold: {
    fontWeight: "bold",
    color: "#007bff",
  },
});

export default ProductDetailList;



