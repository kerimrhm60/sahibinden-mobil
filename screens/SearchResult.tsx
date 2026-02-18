import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';

interface CarItem {
  id: string;
  title: string;
  location: string;
  price: string;
  image: any;
}

const data: CarItem[] = [
  {
    id: '1',
    title: '2021 MODEL AİON S 580 510 KİLOMETRE MENZİL 70.000',
    location: 'Ankara, Akyurt',
    price: '1.075.000 TL',
    image: require('./images/aion1.jpg'),
  },
  {
    id: '2',
    title: "BGR MOTORS'DAN HATASIZ BOYASIZ 2021 AION S 580 MAX",
    location: 'Antalya, Kepez',
    price: '1.700.000 TL',
    image: require('./images/aion2.jpg'),
  },
  {
    id: '3',
    title: "Hatasız full - 460 km menzil - ekonomik km'de 25 kuruş",
    location: 'Kocaeli, İzmit',
    price: '1.350.000 TL',
    image: require('./images/aion3.jpg'),
  },
];

const SearchResult = () => {
  const renderItem = ({ item }: { item: CarItem }) => (
    <TouchableOpacity style={styles.itemContainer}>
      <Image source={item.image} style={styles.image} />
      <View style={styles.details}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.location}>📍 {item.location}</Text>
        <Text style={styles.price}>{item.price}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Arama Sonucu</Text>
        <Text style={styles.headerSub}>3 sonuç bulundu</Text>
      </View>

      <View style={styles.filters}>
        <Text style={styles.filterItem}>Filtrele</Text>
        <Text style={styles.filterItem}>Sırala</Text>
        <Text style={styles.filterItem}>Görünüm</Text>
        <Text style={styles.filterItem}>Aramayı Kaydet</Text>
      </View>

      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f9f9f9' },
  header: {
    backgroundColor: '#1565c0',
    padding: 15,
    paddingTop: 40,
  },
  headerTitle: { color: '#fff', fontSize: 20, fontWeight: 'bold' },
  headerSub: { color: '#fff', fontSize: 14, marginTop: 5 },
  filters: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#fff',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  filterItem: {
    fontSize: 14,
    color: '#333',
  },
  itemContainer: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: '#fff',
  },
  image: {
    width: 100,
    height: 70,
    resizeMode: 'cover',
    marginRight: 10,
  },
  details: {
    flex: 1,
    justifyContent: 'space-around',
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#111',
  },
  location: {
    fontSize: 13,
    color: '#555',
  },
  price: {
    fontSize: 15,
    color: '#007bff',
    fontWeight: 'bold',
  },
  separator: {
    height: 1,
    backgroundColor: '#eee',
    marginLeft: 110,
  },
});

export default SearchResult;
