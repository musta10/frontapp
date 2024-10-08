import * as React from "react";
import { StatusBar } from "expo-status-bar";
import { useContext } from "react";
import { AuthProvider, AuthContext } from "./context/AuthContext";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Welcome from "./src/Screens/WelcomeScreen";
import HomeScreen from "./src/Screens/HomeScreen";
import LoginScreen from "./src/Screens/LoginScreen";
import RegisterScreen from "./src/Screens/RegisterScreen";
import ProfileScreen from "./src/Screens/ProfileScreen"
import { Ionicons } from '@expo/vector-icons'; 


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const AppTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarStyle:{ backgroundColor: '#EBEDEF'},
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Inicio') {
            iconName = 'home';
          } else if (route.name === 'Perfil') {
            iconName = 'person';
          
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#000000',
        tabBarInactiveTintColor: 'grey',
      })}
    >
      <Tab.Screen name="Inicio" component={HomeScreen} />
      <Tab.Screen name="Perfil" component={ProfileScreen} />
    </Tab.Navigator>
  );
};




const AppStack = () => {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <Stack.Navigator initialRouteName="Welcome">
      {isAuthenticated ? (
        <>
          <Stack.Screen
            name="Home"
            component={AppTabs}
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
