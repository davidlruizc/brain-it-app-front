import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Input, Button } from 'react-native-elements';

import Layout from '../components/Auth/Layout';
import { primaryColor } from '../colors';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleOnPressLogin = () => {
    console.warn('Logged in');
  };

  const handleCreateAccountNavigation = () => {
    navigation.navigate('SignUp')
  };

  return(
    <Layout>
      <View style={styles.container}>
        <Text style={styles.title}>WELCOME</Text>
        <Input
          placeholder='Email'
          style={styles.input}
          inputContainerStyle={styles.inputContainer}
          keyboardType="email-address"
          onChangeText={email => setEmail(email)}
          labelStyle={styles.padding}
        />
        <Input
          placeholder="Password"
          style={styles.input}
          inputContainerStyle={styles.inputContainer}
          onChangeText={password => setPassword(password)}
          labelStyle={styles.padding}
          secureTextEntry={true}
        />
        <Button
          containerStyle={{
            marginTop: 25,
            marginBottom: 15,
            width: '95%',
            alignSelf: 'center',
          }}
          title="Sign in"
          onPress={handleOnPressLogin}
          buttonStyle={styles.button}
          titleStyle={styles.buttonText}
          disabled={email == '' || password == ''}
        />
        <TouchableOpacity
          style={styles.wrapperForgot}
        >
          <Text style={styles.textLabel}>Forgot your password?</Text>
        </TouchableOpacity>
        <View style={styles.wrapper}>
          <Text style={styles.text}>Don't have an account?</Text>
          <TouchableOpacity
            onPress={handleCreateAccountNavigation}
          >
            <Text style={styles.textCreate}>Create new account</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 15
  },
  title: {
    fontSize: 30,
    color: '#ffffff',
    marginBottom: 30
  },
  padding: {
    marginTop: 20,
  },
  inputContainer: {
    borderColor: 'gray',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 10,
    marginTop: 10,
  },
  input: {
    fontSize: 17,
    paddingTop: 40,
  },
  button: {
    backgroundColor: primaryColor,
    borderRadius: 10,
    borderColor: 'transparent',
    borderWidth: 1.4,
  },
  buttonText: {
    paddingTop: 6,
    paddingBottom: 6,
    color: '#ffffff',
    fontSize: 17,
  },
  textLabel: {
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'right'
  },
  text: {
    fontWeight: 'bold',
    color: '#ffffff',
    alignSelf: 'center'
  },
  textCreate: {
    fontWeight: 'bold',
    color: primaryColor,
    alignSelf: 'center'
  },
  wrapperForgot: {
    flexDirection: 'row'
  },
  wrapper: {
    marginTop: 50
  }
});

export default Login;
