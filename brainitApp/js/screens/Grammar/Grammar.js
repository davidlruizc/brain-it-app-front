import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

import Layout from '../../components/Global/Layout';
import Card from '../../components/Grammar/Card';

const Grammar = () => {
  return(
    <Layout>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false} >
        <Text style={styles.title}>Grammar</Text>
        <Card
        />
      </ScrollView>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    marginTop: 30
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: 'white'
  }
});

export default Grammar;
