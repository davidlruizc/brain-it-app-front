import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';

import Layout from '../../components/Global/Layout';
import VieoCard from '../../components/Home/VideoCard';

const tempData = [
  {
    title: 'Welcome to brainit',
    shortDescription:
      'Welcome to the new app BrainIt. In this video, our hosts invite you to enjoy it.',
    description:
      'In these lessons, we are going to work on holidays and vacations. These activities are designed for students at an intermediate level. Then, you will have to do some activities in order to develop skills like reading and listening. You will also practice aspects such as grammar and vocabulary.',
    videoId: 'PAaJtiIG6ro',
  },
  {
    title: 'Simple past',
    shortDescription:
      'In this lesson, you will learn how the past simple is used in English.',
    description:
      'In this video, you will see the structure of the past simple tense (affirmative, negative, and interrogative forms), the difference between regular and irregular verbs, past time expressions, and some examples.',
    videoId: 'U9GfQpK9YPg',
  },
  {
    title: 'Past continuous',
    shortDescription:
      'In this lesson, you will learn from our hosts Alexandra and Lucia how the past progressive is used in English.',
    description:
      'In this video, you will see the structure (affirmative, negative and interrogative forms), the use of the past tense of To Be as an auxiliary, examples, and key words (while and when), in order to learn how to use it. With the examples given on the video it will be easy to understand it.',
    videoId: 'zQqZe6M64Yo',
  },
  {
    title: 'Past perfect',
    shortDescription:
      'In this lesson, you will see Alexandra and Lucia explaining how the past perfect is used in English.',
    description:
      'In this video, you will see the use of  past perfect tense and some examples. You are going to see two sentences in a timeline, and with them you will notice the order in which they happen. Also, you will find some key words and the use of the past tense of the verb Have as an auxiliary of the sentence.',
    videoId: 'KiW6dI3Mm5M',
  },
];

const Home = ({navigation}) => {
  const handleVideoNav = (args) => {
    navigation.navigate('VideoPlayer', {args});
  };

  return (
    <Layout>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Watch the lessons</Text>
        {tempData.map((card, index) => (
          <VieoCard key={index} {...card} handleNavigation={handleVideoNav} />
        ))}
      </ScrollView>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    marginTop: 30,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default Home;
