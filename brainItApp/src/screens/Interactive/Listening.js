/* eslint-disable react/prop-types */
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import Layout from '../../components/Global/Layout';
import Card from '../../components/Interactive/ActivityCard';
import {activities} from './resource';
import {useNavigation} from '@react-navigation/native';

/** 
  * Listado de los ejercicios principales correspondientes a Listening por tema
  *
  * ```js
  * [{
    id: 1,
    topic: 'Past Simple',
    questions_count: 6,
    questions: [
      {
        id: 1,
        sound: 'audio_one.mp3',
        question: `question here`,
        options: [
          `options`,
          `options`,
          `options`,
          `options`,
        ],
        correctAnswer: `options`,
      },
    ],
  },
];
  * ```
  *
  * */
const Listening = () => {
  const navigation = useNavigation();

  // navigate to Listening Exercise View
  const navigateToExercise = React.useCallback(
    (questions) => {
      navigation.navigate('ListeningExercise', {questions});
    },
    [navigation],
  );

  return (
    <Layout>
      <View style={styles.container}>
        <Text style={styles.title}>Activity List</Text>
        <Text style={styles.subTitle}>Practice your skills</Text>
        {activities.map((item) => (
          <Card
            key={item.id}
            onPress={() => navigateToExercise(item.questions)}
            title={item.topic}
            questions={item.questions_count}
          />
        ))}
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 18,
    marginTop: 20,
  },
  title: {
    fontSize: 32,
    color: 'white',
    fontWeight: 'bold',
  },
  subTitle: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
    marginTop: 15,
  },
});

export default Listening;
