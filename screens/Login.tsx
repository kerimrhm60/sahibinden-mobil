import React, { useState } from "react";
import {
  View,
  Text,
  Alert,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../types";
import { useNavigation } from "@react-navigation/native";
import { useUser } from "../contex/useContext";
import { SignIn } from "../types/authType";
import { login } from "../api/auth";
const LoginScreen = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const { handleToken, handleLogin } = useUser();
  const [formData, setFormData] = useState<SignIn>({
    phone: "12345",
    password: "12345",
  });

  const handleChange = (name: keyof SignIn, value: string) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    // const { phone, password } = formData;
    // if (phone === "" || password === "") {
    //   Alert.alert("Error", "Please enter both phone number and password.");
    // } else {
    //   console.log("formdata console yazdırılıyor : ", formData)
    //   const response = await login(formData);
    //   const {user,token} = response.data;
    //   if (token && user) {
    //     ("");
    //     handleToken(token);
    //     navigation.navigate("MainPage");

    //     handleLogin(user);
    //   }
    // }
  };

  return (
    <ImageBackground
      source={require("../assets/img/abstract_background.jpg")}
      style={styles.container}
    >
      <Text style={styles.title}>Login</Text>

      <View style={styles.inputContainer}>
        <Ionicons
          name="call-outline"
          size={20}
          color="#888"
          style={styles.icon}
        />
        <TextInput
          style={styles.input}
          placeholder="Phone Number"
          value={formData.phone}
          onChangeText={(value) => handleChange("phone", value)}
          autoCapitalize="none"
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
          style={styles.input}
          placeholder="Password"
          value={formData.password} 
          onChangeText={value => handleChange('password', value)} 
          secureTextEntry
          autoCapitalize="none"
        />
      </View>

      <TouchableOpacity style={styles.loginButton}>
        <Text onPress={handleSubmit} >Sign In</Text>
      </TouchableOpacity>

      <View style={styles.buttonsContainer}>
        <TouchableOpacity>
          <Text style={styles.forgotText}>Forgot Password</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("Register")}>
          <Text style={styles.registerText}>Register</Text>
        </TouchableOpacity>
      </View>
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
  loginButton: {
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

  loginButtonPressed: {
    transform: [{ scale: 0.95 }],
  },
  forgotText: {
    color: "#ffff",
    fontSize: 15,
    textDecorationLine: "underline",
  },
  registerText: {
    color: "#ffff",
    top: 5,
    fontWeight: "bold",
    fontSize: 15,
    textDecorationLine: "underline",
  },
  buttonsContainer: {
    flexDirection: "column", // Butonları dikey hizalamak için
    alignItems: "center", // Ortalar
    top: 140, // Butonların üst kısmına boşluk ekler
  },
});

export default LoginScreen;

