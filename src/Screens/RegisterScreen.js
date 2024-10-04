// screens/RegisterScreen.js
import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import AsyncStorage from '@react-native-async-storage/async-storage';

const RegisterScreen = ({ navigation }) => {
  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Email inválido').required('El email es requerido'),
    password: Yup.string().min(6, 'La contraseña debe tener al menos 6 caracteres').required('La contraseña es requerida'),
  });

  const handleRegister = async (values) => {
    try {
      // Guardar usuario en AsyncStorage
      await AsyncStorage.setItem('user', JSON.stringify(values));
      alert('Registrado exitosamente!');
      navigation.navigate('Login');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={validationSchema}
      onSubmit={(values) => handleRegister(values)}
    >
      {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
        <View style={styles.container}>
          <Text>Ingresa un Correo electrónico</Text>
          <TextInput
            style={styles.input}
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            value={values.email}
            placeholder="Correo"
          />
          {touched.email && errors.email && <Text style={styles.error}>{errors.email}</Text>}

          <Text>Contraseña</Text>
          <TextInput
            style={styles.input}
            onChangeText={handleChange('password')}
            onBlur={handleBlur('password')}
            value={values.password}
            secureTextEntry
            placeholder="Password"
          />
          {touched.password && errors.password && <Text style={styles.error}>{errors.password}</Text>}

          <Button onPress={handleSubmit} title="Crear Cuenta" />
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

export default RegisterScreen;
