import React from 'react';
import { View, Text, StyleSheet, ScrollView, FlatList } from 'react-native';

import Layout from '../../components/Global/Layout';
import Card from '../../components/Grammar/Card';

const tempData = [
  {
    title: 'Past Simple',
    image: require('../../../assets/grammar-one.jpg'),
  },
  {
    title: 'Past Progressive',
    image: require('../../../assets/grammar-two.jpg'),
  },
  {
    title: 'Past Perfect',
    image: require('../../../assets/grammar-three.jpg'),
  },
]

const Grammar = () => {
  return(
    <Layout>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false} >
        <FlatList
          data={tempData}
          keyExtractor={(item, index) => index.toString()}
          ListHeaderComponent={() => (
            <Text style={styles.title}>Grammar</Text>
          )}
          renderItem={({item, index}) => (
            <Card {...item} />
          )}
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
