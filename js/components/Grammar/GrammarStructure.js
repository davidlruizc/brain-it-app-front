/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-use-before-define */
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Layout from '../Global/Layout';
import GrammarCard from './GrammarCard';

const GrammarStructure = ({ title, description, keywords, sentences }) => {
  return (
    <Layout>
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.text}>{description}</Text>
        <View style={styles.keyWrapper}>
          <Text style={styles.boxText}>
            <Text style={{ ...styles.text, ...styles.bold }}>Keywords: </Text>
            <Text style={styles.text}>{keywords}</Text>
          </Text>
        </View>
        {sentences.map((item, index) => (
          <GrammarCard key={index} {...item} />
        ))}
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 29,
    paddingHorizontal: 15,
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 36,
    marginBottom: 19,
  },
  text: {
    color: 'white',
    fontSize: 14,
  },
  bold: {
    fontWeight: 'bold',
  },
  keyWrapper: {
    flexDirection: 'row',
    marginBottom: 19,
    marginTop: 19,
  },
});

export default GrammarStructure;
