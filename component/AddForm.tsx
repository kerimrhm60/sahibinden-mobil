import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../types";
import { useNavigation } from "@react-navigation/native";
import { Register, SuplierFields } from "../types/authType";
import { useUser } from "../contex/useContext";
import { register } from "../api/auth";

const AddForm = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const [formData, setFormData] = useState<SuplierFields>({
    supplierName: "ethankings123",
    supplierSurname: "ethank123@example.com",
    phone: "58674512598"
    
  });

  const { handleLogin, handleToken } = useUser();
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value, type } = e.target;
    const newValue = type === "number" ? Number(value) : value;

    setFormData((prevState) => ({
      ...prevState,
      [id]: newValue,
    }));
  };

  return (
    <ImageBackground
      source={require("../assets/img/abstract_background.jpg")}
      style={styles.container}
    >
      <Text style={styles.title}>Tedarikçi Ekle</Text>

      <View style={styles.inputContainer}>
        <Ionicons
          name="person-outline"
          size={20}
          color="#888"
          style={styles.icon}
        />
        <TextInput
          placeholder="Tedarikçi Name"
          style={styles.input}
          value={formData.supplierName}
          onChangeText={(text) => setFormData({ ...formData, supplierName: text })}
        />
      </View>
      <View style={styles.inputContainer}>
        <Ionicons
          name="person-outline"
          size={20}
          color="#888"
          style={styles.icon}
        />
        <TextInput
          placeholder="Tedarikçi Name"
          style={styles.input}
          value={formData.supplierSurname}
          onChangeText={(text) => setFormData({ ...formData, supplierSurname: text })}
        />
      </View>

      <View style={styles.inputContainer}>
        <Ionicons
          name="call-outline"
          size={20}
          color="#888"
          style={styles.icon}
        />
        <TextInput
          placeholder="Telefon"
          style={styles.input}
          value={formData.phone}
          onChangeText={(text) => setFormData({ ...formData, phone: text })}
        />
      </View>

      <TouchableOpacity style={styles.registerButton}>
        <Text >✚</Text>
      </TouchableOpacity>

    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    top:0,
    // marginBottom: 20,
    position:"relative",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingHorizontal: 15,
    borderRadius: 25,
    width: 280,
    height: 45,
    marginVertical: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 3,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    backgroundColor: "transparent",
  },
  registerButton: {
    top: 15,
    width: 120, // Biraz daha büyük yapalım
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 15,
    borderRadius: 15,
    backgroundColor: "#a4d6ed",
    shadowColor: "#ffff",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 6,
    transform: [{ scale: 1 }],
  },
  registerButtonnPressed: {
    transform: [{ scale: 0.95 }],
  },
  alreadyText: {
    color: "#888",
    marginBottom: 15,
  },
  loginText: {
    color: "#ffff",
    top: 85,
    fontWeight: "bold",
    fontSize: 15,
    textDecorationLine: "underline",
  },
});

export default AddForm;
