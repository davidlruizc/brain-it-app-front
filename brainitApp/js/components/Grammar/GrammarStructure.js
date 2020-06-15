import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Layout from '../Global/Layout';
import GrammarCard from './GrammarCard';

const GrammarStructure = () => {
  return (
    <Layout>
      <View style={styles.container}>
        <Text style={styles.title}>Simple Past</Text>
        <Text style={styles.text}>It is used to describe past habits or facts.</Text>
        <View style={styles.keyWrapper}>
          <Text style={styles.boxText}>
            <Text style={{...styles.text, ...styles.bold}}>Keywords: </Text>
            <Text style={styles.text}>yesterday, last week, last month, last year, this morning (when meaning is past), 2 hours/days ago, in 1995/2009, that year/day/week/month.</Text>
          </Text>
        </View>
        <GrammarCard
          sentence="Affirmative"
          subjectEj="You"
          verb="Verb in past"
          verbEj="worked"
          complementEj="at home last month"
        />
        <GrammarCard
          sentence="Negative"
          subjectEj="You"
          negative="DID NOT"
          negativeEj="did not"
          verb="Verb infinitive"
          verbEj="work"
          complementEj="at home last month"
        />
        <GrammarCard
          sentence="Interrogative"
          interrogative="DID"
          interrogativeEj="Did"
          subjectEj="you"
          verb="Verb infinitive"
          verbEj="work"
          complementEj="at home last month"
        />
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 29,
    paddingHorizontal: 15
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 36,
    marginBottom: 19
  },
  text: {
    color: 'white',
    fontSize: 14,
  },
  bold: {
    fontWeight: 'bold'
  },
  keyWrapper: {
    flexDirection: 'row',
    marginBottom: 19,
    marginTop: 19
  }
});

export default GrammarStructure;
