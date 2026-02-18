export type ProductListingItem = {
  id: number;
  title: string;
  location: string;
  price: string;
  image: any;
};

export type ProductListProps = {
  listings: ProductListingItem[];
};

export type ProductDetailItem = {
  label: string;
  value: string | number | boolean;
  isBold?: boolean;
 
};

export type ProductDetailListProps = {
  data: ProductDetailItem[]; 
};

