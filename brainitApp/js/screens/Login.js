import React from 'react';
import { View, Text, StyleSheet,  } from 'react-native';
import { Input } from 'react-native-elements';


const Login = () => {
  return(
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 30
  },
  padding: {
    marginTop: 20,
  },
  inputContainer: {
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 30,
    padding: 5,
    paddingLeft: 20,
    marginTop: 10,
  },
  input: {
    fontSize: 17,
    paddingTop: 40,
  },
});

export default Login;
