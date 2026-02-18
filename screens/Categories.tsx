// import React from 'react';
// import { View, Text, TextInput, ScrollView, TouchableOpacity } from 'react-native';

// const categories = [
//   'Emlak',
//   'Vasıta',
//   'Yedek Parça, Aksesuar, Donanım & Tuning',
//   'İkinci El ve Sıfır Alışveriş',
//   'İş Makineleri & Sanayi',
//   'Özel Ders Verenler',
//   'İş İlanları',
//   'Hayvanlar Alemi',
//   'Yardımcı Arayanlar',
// ];

//  const  Categories = () =>  {
//   return (
//     <View style={{ flex: 1, backgroundColor: '#fff' }}>
//       {/* Başlık */}
//       <View style={{ backgroundColor: '#005b96', padding: 20 }}>
//         <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>İlan Ver</Text>
//       </View>

//       <View style={{ padding: 15 }}>
//         <Text style={{ fontWeight: 'bold', marginBottom: 10 }}>KELİME İLE KATEGORİ SEÇİMİ</Text>
//         <View style={{ 
//           flexDirection: 'row', 
//           borderWidth: 1, 
//           borderColor: '#ccc', 
//           borderRadius: 10, 
//           paddingHorizontal: 10, 
//           alignItems: 'center'
//         }}>
//           <TextInput 
//             placeholder="Örnek: Koltuk, ceket, gitar" 
//             style={{ flex: 1, height: 40 }}
//           />
//         </View>
//       </View>

//       <View style={{ paddingHorizontal: 15 }}>
//         <Text style={{ fontWeight: 'bold', marginBottom: 10 }}>ADIM ADIM KATEGORİ SEÇİMİ</Text>
//       </View>

//       <ScrollView style={{ paddingHorizontal: 15 }}>
//         {categories.map((category, index) => (
//           <TouchableOpacity 
//             key={index}
//             style={{
//               paddingVertical: 15,
//               borderBottomWidth: 1,
//               borderColor: '#eee',
//               flexDirection: 'row',
//               justifyContent: 'space-between',
//               alignItems: 'center'
//             }}
//           >
//             <Text style={{ fontSize: 16 }}>{category}</Text>
//           </TouchableOpacity>
//         ))}
//       </ScrollView>
//     </View>
//   );
// }

// export default Categories

