import * as React from 'react';
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";
import Welcome from './src/Screens/WelcomeScreen';
import HomeScreen from './src/Screens/HomeScreen';
import LoginScreen from './src/Screens/LoginScreen';
import RegisterScreen from './src/Screens/RegisterScreen';

const Stack = createStackNavigator();
export default function App() {
  return (
    <>
<StatusBar style="auto" />
<NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={Welcome} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={LoginScreen}  options={{ title: 'Login' }} />
        <Stack.Screen name="Register" component={RegisterScreen} options={{ title: 'Register' }} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Home' }} />
      </Stack.Navigator>
    </NavigationContainer>
    </>
  );
}

