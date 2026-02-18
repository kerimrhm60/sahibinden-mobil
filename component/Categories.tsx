import React from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { CategoriesProps, CategoryItem } from "../types/categoryType";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../types";
import { useNavigation } from "@react-navigation/native";

const Categories: React.FC<CategoriesProps> = ({
  categories = [],
  onCategoryPress,
  count,
}) => {

  return (
    <View style={styles.container}>
      <View style={styles.categorySection}>
        <ScrollView>
          {categories.map((category, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => onCategoryPress?.(category)}

              style={styles.categoryItem}
            >
              {category.icon && (
                <View
                  style={[
                    styles.iconWrapper,
                    {
                      backgroundColor:
                        (category.icon.props?.color as string) || "#fff",
                    },
                  ]}
                >
                  {React.cloneElement(category.icon, {
                    size: 20,
                    color: "#fff",
                  })}
                </View>
              )}
              <View style={{ flex: 1 }}>
                <Text style={styles.categoryText}>{category.label}</Text>
                {category.subtitle && (
                  <Text style={styles.subtitle}>{category.subtitle}</Text>
                )}
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 15,
  },
  categorySection: {
    marginTop: 20,
  },
  categoryItem: {
    paddingVertical: 15,
    borderBottomWidth: 2,
    borderColor: "#eee",
    flexDirection: "row",
    alignItems: "center",
  },
  // iconWrapper: {
  //   marginRight: 20,
  // },
  iconWrapper: {
    width: 35,
    height: 35,
    borderRadius: 20,
    backgroundColor: "#fff", // Beyaz arka plan
    justifyContent: "center",
    alignItems: "center",
    marginRight: 20,
    elevation: 3, // Android için gölge
    shadowColor: "#000", // iOS için gölge
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  subtitle: {
    fontSize: 13,
    color: "#666",
    marginTop: 2,
  },
  categoryText: {
    fontSize: 16,
    flex: 1,
  },
});

export default Categories;
