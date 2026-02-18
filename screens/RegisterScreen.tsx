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
import { Register } from "../types/authType";
import { useUser } from "../contex/useContext";
import { register } from "../api/auth";

const RegisterScreen = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const [formData, setFormData] = useState<Register>({
    username: "ethankings123",
    email: "ethank123@example.com",
    password: "securePass987",
    phone: "1234567890",
    roleId: 3,
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
  const handleSubmit = async () => {
    if (formData.email === "" || formData.password === "") {
      return;
    }
    console.log("register formdata ekrana yazdırıldı ", formData);
    try {
      const response = await register(formData);
      console.log("Register sayfası response ekrana yazdırılıyor ", response);
      if (response) {
        console.log("if kısmına giirş yapıldı ");
        navigation.navigate("Login");
      } else {
        setError(response.message);
      }
    } catch (error) {
      console.error("Registration failed: ", error);
    }
  };
  return (
    <ImageBackground
      source={require("../assets/img/abstract_background.jpg")}
      style={styles.container}
    >
      <Text style={styles.title}>Register</Text>

      <View style={styles.inputContainer}>
        <Ionicons
          name="person-outline"
          size={20}
          color="#888"
          style={styles.icon}
        />
        <TextInput
          placeholder="Username"
          style={styles.input}
          value={formData.username}
          onChangeText={(text) => setFormData({ ...formData, username: text })}
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

      <View style={styles.inputContainer}>
        <Ionicons
          name="mail-outline"
          size={20}
          color="#888"
          style={styles.icon}
        />
        <TextInput
          placeholder="Email"
          style={styles.input}
          keyboardType="email-address"
          value={formData.email}
          onChangeText={(text) => setFormData({ ...formData, email: text })}
        />
      </View>

      <View style={styles.inputContainer}>
        <Ionicons
          name="lock-closed-outline"
          size={20}
          color="#888"
          style={styles.icon}
        />
        <TextInput
          placeholder="Password"
          style={styles.input}
          secureTextEntry
          value={formData.password}
          onChangeText={(text) => setFormData({ ...formData, password: text })}
        />
      </View>

      {/* <TouchableOpacity style={styles.registerButton}>
        <Ionicons name="checkmark-circle" size={24} color="#fff" />
      </TouchableOpacity> */}

      <TouchableOpacity style={styles.registerButton}>
        <Text onPress={handleSubmit}>Sign Up</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
        <Text style={styles.loginText}>Sign In</Text>
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
    marginBottom: 20,
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
    shadowColor: "#000",
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

export default RegisterScreen;
