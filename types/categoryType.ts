import { RootStackParamList } from "../types";

export type CategoryItem = {
  label: string;
  subtitle?:string;
  icon?: JSX.Element;
  categoryType?:string,
};

export type CategoriesProps = {
  categories: CategoryItem[];
  count?: number;
  onCategoryPress?: (category: CategoryItem) => void;
  navigateTo?: keyof RootStackParamList;
};



export type CategorySelectItem = {
  label: string;
  subtitle?:string;
  icon?: JSX.Element;
  categoryType?:string,
};

export type CategorySelectionProps = {
  categories: CategorySelectItem[];
  count?: number;
  onCategoryPress?: (category: CategoryItem) => void;
  navigateTo?: keyof RootStackParamList;
};


