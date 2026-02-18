import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../types"; // RootStackParamList yolunu doğru şekilde ayarlayın
import { CategoryItem } from "../types/categoryType";

export const handleCategoryPress = (
  category: CategoryItem,
  navigation: StackNavigationProp<RootStackParamList>
) => {
  const routeMap: Record<string, keyof RootStackParamList> = {
    home: "HomeCategorySelection",
    car: "VehicleCategorySelection",
    motorcycle: "MotorcycleCategorySelection",
    homeSubCategory:"HousingCategorySelection",
    housingSale:"HousingSaleSelect",
    housingRental:"HousingRentSelect",
    housingDailyReental:"HousingDailyRentalSelect",
    apartmentHousing:"ProductDetailScreen",
    detachedHoising:"ProductDetailScreen"
  };

  if (category.categoryType && routeMap[category.categoryType]) {
    const routeName = routeMap[category.categoryType];
    navigation.navigate(routeName);
  } else {
    console.warn("Tanımsız veya eksik categoryType:", category.categoryType);
  }
};