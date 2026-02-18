import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Image,
  ImageSourcePropType,
} from 'react-native';

// Type tanımı
interface Category {
  name: string;
  count: number;
  logo: ImageSourcePropType;
}

// Kategori verisi
const categories: Category[] = [
  { name: 'Aion', count: 3, logo: require('./logos/aion.png') },
  { name: 'Alfa Romeo', count: 1057, logo: require('./logos/alfaromeo.png') },
  { name: 'Anadol', count: 8, logo: require('./logos/anadol.png') },
  { name: 'Arora', count: 10, logo: require('./logos/arora.png') },
  { name: 'Aston Martin', count: 58, logo: require('./logos/astonmartin.png') },
  { name: 'Audi', count: 16032, logo: require('./logos/audi.png') },
  { name: 'Bentley', count: 93, logo: require('./logos/bentley.png') },
  { name: 'BMW', count: 28904, logo: require('./logos/bmw.png') },
  { name: 'Buick', count: 11, logo: require('./logos/buick.png') },
  { name: 'BYD', count: 13, logo: require('./logos/byd.png') },
  { name: 'Cadillac', count: 43, logo: require('./logos/cadillac.png') },
  { name: 'Chery', count: 120, logo: require('./logos/chery.png') },
  { name: 'Chevrolet', count: 4745, logo: require('./logos/chevrolet.png') },
  { name: 'Chrysler', count: 343, logo: require('./logos/chrysler.png') },
];

const CarCategory = () => {
  const renderItem = ({ item }: { item: Category }) => (
    <TouchableOpacity style={styles.item}>
      <Image source={item.logo} style={styles.logo} />
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.count}>({item.count.toLocaleString()})</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={categories}
        renderItem={renderItem}
        keyExtractor={(item) => item.name}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  logo: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
    marginRight: 15,
  },
  name: {
    flex: 1,
    fontSize: 16,
  },
  count: {
    fontSize: 15,
    color: '#555',
  },
  separator: {
    height: 1,
    backgroundColor: '#eee',
    marginLeft: 60,
  },
});

export default CarCategory;
