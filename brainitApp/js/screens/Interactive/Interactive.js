import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { CommonActions } from '@react-navigation/native';

import Layout from '../../components/Global/Layout';
import Card from '../../components/Interactive/Card';

const bgImage = require('../../../assets/vr.png');

const Interactive = ({navigation}) => {

  const navigateVR = () => {
    navigation.dispatch(
      CommonActions.navigate({
        name: 'VR',
        params: {
          user: 'jane',
        },
      })
    );
  };

  return (
    <Layout>
      <View style={styles.container}>
        <Text style={styles.title}>Interactive experience</Text>
        <Card
          title="Start VR experience"
          image={bgImage}
          handleNavigateToText={navigateVR}
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
