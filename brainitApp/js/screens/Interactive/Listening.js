import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Layout from '../../components/Global/Layout';
import Card from '../../components/Interactive/ActivityCard';

const Listening = () => {
  return (
    <Layout>
      <View style={styles.container}>
        <Text style={styles.title}>Activity List</Text>
        <Text style={styles.subTitle}>Practice your skills</Text>
        <Card />
        <Card />
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 18,
    marginTop: 20
  },
  title: {
    fontSize: 32,
    color: 'white',
    fontWeight: 'bold'
  },
  subTitle: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
    marginTop: 15
  }
});

export default Listening;