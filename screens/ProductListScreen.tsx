import React from "react";
import ProductList from "../component/product/ProductList";
import { ProductListingItem } from "../types/productType";

const listings: ProductListingItem[] = [
  {
    id: 1,
    title: "SAHİBİNDEN FULL YAPILI İSKANLI DAİRE ARAÇ TAKAS OLUR",
    location: "Ankara, Çankaya",
    price: "3.499.999 TL",
    image: require("../assets/img/image1.jpg"),
  },
  {
    id: 2,
    title: "NEWROZ PARK KARŞISI MİLLET BAHÇESİ CİVARI 3+1 FIRSAT DAİRE",
    location: "Diyarbakır, Bağlar",
    price: "2.785.000 TL",
    image: require("../assets/img/image2.jpg"),
  },
  {
    id: 3,
    title: "ŞAHANE YAPI'DAN METROBÜSE YÜRÜME MESAFESİNDE ACİL SATILIK",
    location: "İstanbul, Esenyurt",
    price: "1.600.000 TL",
    image: require("../assets/img/image3.jpg"),
  },
];

const ProductListScreen = () => {
  return <ProductList listings={listings} />;
};

export default ProductListScreen;
