import React, { useContext, useEffect, useRef, useState } from "react";
import {
  NavigationContainer,
  NavigationContainerRef,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import RegisterScreen from "./screens/RegisterScreen";

import PostAdd from "./screens/PostAdd";
import HomeScreen from "./screens/HomeScreen";
import CategorySelection from "./screens/CategorySelectScreen/home/HomeCategorySelection";
import HomeCategorySelection from "./screens/CategorySelectScreen/home/HomeCategorySelection";
import HousingCategorySelection from "./screens/SubCategoryScreens/homeSubCategory/HousingCategorySelection";
import VehicleCategorySelection from "./screens/CategorySelectScreen/car/VehicleCategorySelection";
import HousingSaleSelect from "./screens/SubCategoryScreens/homeSubCategory/HousingSaleSelect";
import HousingRentSelect from "./screens/SubCategoryScreens/homeSubCategory/HousingRentSelect";
import HousingDailyRentalSelect from "./screens/SubCategoryScreens/homeSubCategory/HousingDailyRentalSelect";
import ProductListScreen from "./screens/ProductListScreen";
import ProductDetail from "./screens/ProductDetailScreen";
import ProductDetailScreen from "./screens/ProductDetailScreen";

const Stack = createStackNavigator();

const AppRoute: React.FC = () => {
  const navigationRef = useRef<NavigationContainerRef<any>>(null);
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="PostAdd" component={PostAdd} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen
          name="HomeCategorySelection"
          component={HomeCategorySelection}
        />
        <Stack.Screen
          name="VehicleCategorySelection"
          component={VehicleCategorySelection}
        />
        <Stack.Screen
          name="HousingCategorySelection"
          component={HousingCategorySelection}
        />
        <Stack.Screen name="HousingSaleSelect" component={HousingSaleSelect} />
        <Stack.Screen name="HousingRentSelect" component={HousingRentSelect} />
        <Stack.Screen
          name="HousingDailyRentalSelect"
          component={HousingDailyRentalSelect}
        />
        <Stack.Screen
          name="ProductListScreen"
          component={ProductListScreen}
        />
        <Stack.Screen
          name="ProductDetailScreen"
          component={ProductDetailScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppRoute;
