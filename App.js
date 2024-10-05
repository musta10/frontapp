import * as React from "react";
import { StatusBar } from "expo-status-bar";
import { useContext } from "react";
import { AuthProvider, AuthContext } from "./context/AuthContext";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Welcome from "./src/Screens/WelcomeScreen";
import HomeScreen from "./src/Screens/HomeScreen";
import LoginScreen from "./src/Screens/LoginScreen";
import RegisterScreen from "./src/Screens/RegisterScreen";

const Stack = createStackNavigator();

const AppStack = () => {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <Stack.Navigator initialRouteName="Welcome">
      {isAuthenticated ? (
        <>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ title: "Home", headerShown: false }}
          />
        </>
      ) : (
        <>
          <Stack.Screen
            name="Welcome"
            component={Welcome}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{
              title: "Bienvenido La Bestia",
              headerTitleStyle: {
                fontSize: 24,
                fontStyle: "bold",
              },
            }}
          />
          <Stack.Screen
            name="Register"
            component={RegisterScreen}
            options={{ title: "Regístrate" }}
          />
        </>
      )}
    </Stack.Navigator>
  );
};

export default function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <AppStack />
      </NavigationContainer>
    </AuthProvider>
  );
}
