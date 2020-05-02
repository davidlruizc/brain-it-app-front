import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

import Layout from '../../components/Global/Layout';
import VieoCard from '../../components/Home/VideoCard';

const tempData = [
  {
    title: 'Welcome to brainit',
    description: 'Short description of the video to give an intro for the audience'
  },
  {
    title: 'Simple past',
    description: 'Short description of the video to give an intro for the audience'
  },
  {
    title: 'Past continuous',
    description: 'Short description of the video to give an intro for the audience'
  },
  {
    title: 'Past perfect',
    description: 'Short description of the video to give an intro for the audience'
  },
];

const Home = () => {
  return(
    <Layout>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false} >
        <Text style={styles.title}>Watch the lessons</Text>
        {tempData.map((card, index) => (
          <VieoCard key={index} {...card} />
        ))}
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
