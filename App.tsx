// App.tsx

import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet, Text, View } from "react-native";

import AppRoute from "./AppRoute";
import { UserProvider } from "./contex/useContext";
// import MoneyTransferCard from './screens/MoneyTransferCard';

const Stack = createStackNavigator();

export default function App() {
  return (
    <UserProvider>
      <StatusBar style="auto" />
      <AppRoute />
    </UserProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

// <NavigationContainer>
//   <Stack.Navigator initialRouteName="Home">
//     <Stack.Screen name="Home" component={HomeScreen} />
//     <Stack.Screen name="Login" component={LoginScreen} />
//     <Stack.Screen name="AccountInfoForm" component={AccountInfoForm} />
//     <Stack.Screen name="Clock" component={Clock} />
//     <Stack.Screen name="Language" component={Language} />
//     <Stack.Screen name="Account" component={Account} />
//     <Stack.Screen name="Help" component={Help} />
//     <Stack.Screen name="AdminHome" component={AdminHome} />
//     <Stack.Screen name="CashReceivable" component={CashReceivable} />
//     <Stack.Screen name="{Language" component={Language} />
//     <Stack.Screen name="ScrollableListScreen" component={ScrollableListScreen} />
//     <Stack.Screen name="MoneyTransferList" component={MoneyTransferList} />
//     <Stack.Screen name="MoneyTransferScreen" component={MoneyTransferScreen} />
//     <Stack.Screen name="AddDebt" component={AddDebt} />
//     <Stack.Screen name="AddCustomer" component={AddCustomer} />
//     <Stack.Screen name="DebtDetail" component={DebtDetail} />
//   </Stack.Navigator>
// </NavigationContainer>
