import React from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import AsyncStorage from "@react-native-async-storage/async-storage";

const LoginScreen = ({ navigation }) => {
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Email inválido")
      .required("El email es requerido"),
    password: Yup.string().required("La contraseña es requerida"),
  });

  const handleLogin = async (values) => {
    try {
      const user = JSON.parse(await AsyncStorage.getItem("user"));

      if (
        user &&
        user.email === values.email &&
        user.password === values.password
      ) {
        alert("Login exitoso!");
        navigation.navigate("Home");
      } else {
        alert("Credenciales incorrectas");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={(values) => handleLogin(values)}
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        errors,
        touched,
      }) => (
        <View style={styles.container}>
          <Text>Ingresa un Correo electrónico</Text>
          <TextInput
            style={styles.input}
            onChangeText={handleChange("email")}
            onBlur={handleBlur("email")}
            value={values.email}
            placeholder="Correo electrónico"
            keyboardType="email-address"
            placeholderTextColor="#999"
          />
          {touched.email && errors.email && (
            <Text style={styles.error}>{errors.email}</Text>
          )}

          <Text>Contraseña</Text>
          <TextInput
            style={styles.input}
            onChangeText={handleChange("password")}
            onBlur={handleBlur("password")}
            value={values.password}
            secureTextEntry
            placeholder="Contraseña"
            placeholderTextColor="#999"
          />
          {touched.password && errors.password && (
            <Text style={styles.error}>{errors.password}</Text>
          )}
          <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Iniciar sesión</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=> navigation.navigate('Register')} style={styles.registerLink}>
            <Text style={styles.registerLinkText}>¿No tienes una cuenta?
              <Text style={styles.registerLinkTextHighColor}>Regístrate</Text>
            </Text>
          </TouchableOpacity>
        </View>
        
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#f5f7fa",
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
    marginBottom: 40,
  },
  input: {
    height: 50,
    backgroundColor: "#fff",
    borderRadius: 8,
    paddingHorizontal: 16,
    fontSize: 16,
    marginBottom: 10,
    borderColor: "#ddd",
    borderWidth: 1,
  },
  button: {
    backgroundColor: "#0569AB",
    paddingVertical: 15,
    borderRadius: 30,
    marginTop: 20,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
  error: {
    color: "red",
    fontSize: 14,
    marginBottom: 10,
  },
  registerLink:{
    alignSelf: 'center',
    marginTop: 50 
  },
  registerLinkText: {
    fontSize: 16,
    color: '#7c808d'
  },
  registerLinkTextHighColor: {
    fontSize: 16,
    color: '#0569AB'
  }
});

export default LoginScreen;
