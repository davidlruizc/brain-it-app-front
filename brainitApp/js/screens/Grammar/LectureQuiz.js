import React from 'react';
import {View,Text, StyleSheet} from 'react-native';

import Layout from '../../components/Global/Layout';
import Button from '../../components/Global/Button';

const LectureQuiz = ({navigation, route}) => {
  return (
    <Layout>
      <Text>Quiz</Text>
      <View>
        <Button
          title="a) This is the correct one"
          onPress={() => console.warn('-')}
        />
      </View>
    </Layout>
  );
};

export default LectureQuiz;
