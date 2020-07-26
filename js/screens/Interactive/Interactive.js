import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { CommonActions } from '@react-navigation/native';

import Layout from '../../components/Global/Layout';
import Card from '../../components/Interactive/Card';

const vrImage = require('../../../assets/vr.png');
const listeningImage = require('../../../assets/sound.jpg')

const Interactive = ({navigation}) => {

  const navigateVR = () => {
    navigation.dispatch(
      CommonActions.navigate({
        name: 'VR',
      })
    );
  };

  const navigateListening = () => {
    navigation.navigate('Listening');
  };

  return (
    <Layout>
      <View style={styles.container}>
        <Text style={styles.title}>Interactive experience</Text>
        <Card
          title="Start VR experience"
          image={vrImage}
          handleNavigateToText={navigateVR}
        />
        <Card
          title="Practice your listening"
          image={listeningImage}
          handleNavigateToText={navigateListening}
        />
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    marginTop: 30
  },
  title: {
    fontSize: 34,
    fontWeight: 'bold',
    color: 'white'
  }
});

export default Interactive;
