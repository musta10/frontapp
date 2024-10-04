import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
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
        <Text style={styles.title}>Bienvenido la bestia</Text>
        <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Login')}
      >
        <Text style={styles.buttonText}>Inicia Sesión</Text>
      </TouchableOpacity>
        <TouchableOpacity
        style={[styles.button, styles.buttonOutline]}
        onPress={() => navigation.navigate('Register')}
      >
        <Text style={[styles.buttonText, styles.buttonOutlineText]}>Crear cuenta</Text>
      </TouchableOpacity>
    
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f7fa',
    position: "relative",
  },
  mainContainer:{
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    margin: 15,
  },
 title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#ccc',
    marginBottom: 50,
  },
  button: {
    backgroundColor: '#4CAF50',
    paddingVertical: 15,
    paddingHorizontal: 40,
    marginVertical: 15,
    borderRadius: 30,
    marginBottom: 20,
  },
  buttonOutline: {
    backgroundColor: '#fff',
    borderColor: '#4CAF50',
    borderWidth: 2,
  },
  buttonText: {
    color: '#000',
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center'
  },
  buttonOutlineText: {
    color: '#4CAF50',
  },
  topImageContainer: {},
  topImage: {
    width: "100%",
    height: 132,
  },
});

export default WelcomeScreen;
