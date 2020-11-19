import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Input, Button } from 'react-native-elements';

import Layout from '../components/Auth/Layout';
import { primaryColor } from '../colors';

const SignUp = ({ navigation }) => {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleOnPressSignUp = () => {
    console.warn('signup');
  };

  const handleNavigationTerms = () => {
    navigation.navigate('Terms');
  };

  const validateForm = () => {
    return (
      name.length > 0 &&
      lastName.length > 0 &&
      email.length > 0 &&
      password.length > 0 &&
      password === confirmPassword
    );
  }

  return(
    <Layout>
      <View style={styles.container}>
        <Text style={styles.title}>REGISTER</Text>
        <Input
          placeholder='Name'
          style={styles.input}
          inputContainerStyle={styles.inputContainer}
          keyboardType="default"
          onChangeText={name => setName(name)}
          labelStyle={styles.padding}
        />
        <Input
          placeholder='Last Name'
          style={styles.input}
          inputContainerStyle={styles.inputContainer}
          keyboardType="default"
          onChangeText={lastName => setLastName(lastName)}
          labelStyle={styles.padding}
        />
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
        <Input
          placeholder="Confirm Password"
          style={styles.input}
          inputContainerStyle={styles.inputContainer}
          onChangeText={confirmPassword => setConfirmPassword(confirmPassword)}
          labelStyle={styles.padding}
          secureTextEntry={true}
        />
        <View style={styles.wrapper}>
          <Text style={styles.text}>By tapping "Sign Up" you agree to the</Text>
          <TouchableOpacity
            onPress={handleNavigationTerms}
          >
            <Text style={styles.textCreate}>terms & conditions</Text>
          </TouchableOpacity>
        </View>
        <Button
          containerStyle={{
            marginTop: 25,
            marginBottom: 15,
            width: '95%',
            alignSelf: 'center',
          }}
          title="Sign up"
          onPress={handleOnPressSignUp}
          buttonStyle={styles.button}
          titleStyle={styles.buttonText}
          disabled={!validateForm()}
        />
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
  wrapper: {
    marginTop: 30
  }
});

export default SignUp;
