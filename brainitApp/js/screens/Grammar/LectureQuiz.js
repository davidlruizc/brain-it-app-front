import React from 'react';
import {View,Text, StyleSheet} from 'react-native';

import Layout from '../../components/Global/Layout';
import Button from '../../components/Global/Button';

const LectureQuiz = ({navigation, route}) => {
  return (
    <Layout>
      <View style={styles.container}>
        <Text style={styles.title}>Quiz</Text>
        <View style={styles.wrapperButton}>
          <Button
            title="a) This is the correct one"
            onPress={() => console.warn('-')}
          />
        </View>
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white'
  },
  wrapperButton: {
    margin: 30
  }
})

export default LectureQuiz;
