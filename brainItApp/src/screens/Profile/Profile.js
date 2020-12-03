import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TextInput,
} from 'react-native';

const Profile = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Perfil</Text>
      </View>
      <View style={styles.perfil}>
        <View style={styles.perfilBox}>
          <Image
            style={styles.image}
            source={{
              uri:
                'https://i.pinimg.com/474x/b9/4b/70/b94b70d2a4b3c5d2ea06f81ec5cab1ec.jpg',
            }}
          />
          <View style={styles.textBox}>
            <Text style={styles.perfilText}>Carlos Carrillo</Text>
          </View>
        </View>
      </View>
      <View style={styles.aboutMe}>
        <View style={styles.textBoxA}>
          <Text style={styles.aboutText}>Name</Text>
        </View>
        <TextInput style={styles.textInput} />
        <View style={styles.textBoxA}>
          <Text style={styles.aboutText}>Sex</Text>
        </View>
        <TextInput style={styles.textInput} />
        <View style={styles.textBoxA}>
          <Text style={styles.aboutText}>Score</Text>
        </View>
        <TextInput style={styles.textInput} />
        <View style={styles.textBoxA}>
          <Text style={styles.aboutText}>about me</Text>
        </View>
        <TextInput style={styles.textInput} />
        <View style={styles.textBoxA}>
          <Text style={styles.aboutText}>about me</Text>
        </View>
        <TextInput style={styles.textInput} />
        <View style={styles.textBoxA}>
          <Text style={styles.aboutText}>about me</Text>
        </View>
        <TextInput style={styles.textInput} />
        <View style={styles.textBoxA}>
          <Text style={styles.aboutText}>about me</Text>
        </View>
        <TextInput style={styles.textInput} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  header: {
    height: 50,
    padding: '4%',
    backgroundColor: '#851A1A',
  },

  headerText: {
    color: 'white',
  },

  perfil: {
    height: 300,
    paddingVertical: '20%',
    paddingHorizontal: '5%',
    backgroundColor: '#E2E2E2',
  },

  textBox: {
    marginTop: 20,
  },

  perfilText: {
    color: 'black',
    fontSize: 30,
    fontWeight: 'bold',
  },

  perfilBox: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  image: {
    width: 150,
    height: 150,
    borderRadius: 100,
  },

  aboutMe: {
    padding: '5%',
    backgroundColor: '#D13F3F',
  },

  aboutText: {
    color: 'white',
    fontSize: 15,
  },

  textBoxA: {
    marginTop: 10,
  },

  textInput: {
    height: 40,
    paddingLeft: 6,
    color: 'white',
    borderBottomWidth: 1,
    borderColor: 'white',
  },
})

export default Profile;
