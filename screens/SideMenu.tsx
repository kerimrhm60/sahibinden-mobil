// SideMenu.tsx

import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { MaterialIcons, FontAwesome5, Entypo, Ionicons } from '@expo/vector-icons'; // İkonlar için

// Kategori tanımları
const categories = [
  { iconLib: MaterialIcons, icon: 'home', label: 'Emlak', description: 'Konut, İş Yeri, Arsa, Konut Projeleri' },
  { iconLib: FontAwesome5, icon: 'car', label: 'Vasıta', description: 'Otomobil, Arazi, SUV & Pickup' },
  { iconLib: FontAwesome5, icon: 'tools', label: 'Yedek Parça, Aksesuar', description: 'Otomotiv Ekipmanları, Motosiklet Ekipmanları' },
  { iconLib: Entypo, icon: 'shopping-cart', label: 'İkinci El ve Sıfır Alışveriş', description: 'Bilgisayar, Telefon, Aksesuarlar' },
  { iconLib: MaterialIcons, icon: 'star', label: 'Yepy', description: 'Yepyenilenmiş teknolojik cihazlar' },
  { iconLib: MaterialIcons, icon: 'format-paint', label: 'Ustalar ve Hizmetler', description: 'Ev Tadilat, Nakliye' },
  { iconLib: FontAwesome5, icon: 'tractor', label: 'İş Makineleri & Sanayi', description: 'İş Makineleri, Tarım Makineleri' },
  { iconLib: MaterialIcons, icon: 'menu-book', label: 'Özel Ders Verenler', description: 'Lise, Üniversite, İlkokul' },
  { iconLib: MaterialIcons, icon: 'work', label: 'İş İlanları', description: 'Avukatlık, Eğitim, Sağlık' },
  { iconLib: MaterialIcons, icon: 'pets', label: 'Hayvanlar Alemi', description: 'Evcil Hayvanlar, Balıklar' },
  { iconLib: FontAwesome5, icon: 'baby', label: 'Yardımcı Arayanlar', description: 'Bebek ve Hasta Bakımı' },
];

export default function SideMenu() {
  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      {/* Üst Menü */}
      <View style={{ backgroundColor: '#005b96', paddingVertical: 30, paddingHorizontal: 20 }}>
        <Text style={{ color: '#fff', fontSize: 18, marginBottom: 10 }}>Anasayfa</Text>
        <Text style={{ color: '#fff', fontSize: 18, marginBottom: 10 }}>Bana Özel (Kerim Alvi)</Text>
        <Text style={{ color: '#fff', fontSize: 18, marginBottom: 10 }}>İlan Ver</Text>
        <Text style={{ color: '#fff', fontSize: 18 }}>Servisler</Text>
      </View>

      {/* Kategoriler */}
      <ScrollView>
        {categories.map((cat, index) => {
          const IconComponent = cat.iconLib;
          return (
            <TouchableOpacity
              key={index}
              style={{ flexDirection: 'row', alignItems: 'center', padding: 15, borderBottomWidth: 1, borderColor: '#eee' }}
            >
              {/* İkon */}
              <View style={{ width: 40, alignItems: 'center' }}>
                <IconComponent name={cat.icon} size={24} color="black" />
              </View>

              {/* Yazılar */}
              <View style={{ marginLeft: 10 }}>
                <Text style={{ fontSize: 16, fontWeight: '600' }}>{cat.label}</Text>
                <Text style={{ fontSize: 12, color: 'gray' }}>{cat.description}</Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
}
