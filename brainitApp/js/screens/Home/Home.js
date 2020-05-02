import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

import Layout from '../../components/Global/Layout';
import VieoCard from '../../components/Home/VideoCard';
 
const Home = () => {
  return(
    <Layout>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false} >
        <Text style={styles.title}>Watch the lessons</Text>
        <VieoCard />
        <VieoCard />
        <VieoCard />
        <VieoCard />
        <VieoCard />
        <VieoCard />
      </ScrollView>
    </Layout>
  );
}

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

export default Home;
