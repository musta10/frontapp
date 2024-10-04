import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  ImageBackground,
} from "react-native";

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.topImageContainer}>
        <Image
          source={require("../../assets/TopVector.png")}
          style={styles.topImage}
        />
      </View>
      <View style={styles.mainContainer}>
        <Text style={styles.title}>Bienvenido La Bestia</Text>
        <Button title="Inicia sesión" onPress={() => navigation.navigate("Login")} />
        <Button
          title="Crear Cuenta"
          onPress={() => navigation.navigate("Register")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    position: "relative",
  },
  mainContainer:{
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center'
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  topImageContainer: {},
  topImage: {
    width: "100%",
    height: 132,
  },
});

export default WelcomeScreen;
