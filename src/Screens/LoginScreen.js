// screens/LoginScreen.js
import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = ({ navigation }) => {
  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Email inválido').required('El email es requerido'),
    password: Yup.string().required('La contraseña es requerida'),
  });

  const handleLogin = async (values) => {
    try {
      const user = JSON.parse(await AsyncStorage.getItem('user'));

      if (user && user.email === values.email && user.password === values.password) {
        alert('Login exitoso!');
        navigation.navigate('Home');
      } else {
        alert('Credenciales incorrectas');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={validationSchema}
      onSubmit={(values) => handleLogin(values)}
    >
      {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
        <View style={styles.container}>
          <Text>Ingresa un Correo electrónico</Text>
          <TextInput
            style={styles.input}
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            value={values.email}
            placeholder="Correo electrónico"
          />
          {touched.email && errors.email && <Text style={styles.error}>{errors.email}</Text>}

          <Text>Contraseña</Text>
          <TextInput
            style={styles.input}
            onChangeText={handleChange('password')}
            onBlur={handleBlur('password')}
            value={values.password}
            secureTextEntry
            placeholder="Contraseña"
          />
          {touched.password && errors.password && <Text style={styles.error}>{errors.password}</Text>}

          <Button onPress={handleSubmit} title="Iniciar sesión" />
        </View>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 8,
  },
  error: {
    color: 'red',
  },
});

export default LoginScreen;
