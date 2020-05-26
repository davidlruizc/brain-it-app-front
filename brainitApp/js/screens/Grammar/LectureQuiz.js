import React from 'react';
import {View,Text, StyleSheet, ScrollView} from 'react-native';

import Layout from '../../components/Global/Layout';
import Button from '../../components/Global/Button';

const LectureQuiz = ({navigation, route}) => {
  const {item} = route.params;
  return (
    <Layout>
      <ScrollView style={styles.container}>
        {item.quiz.map((item, index) => (
          <View key={index}>
            <Text style={styles.title}>{item.question}</Text>
            <View style={styles.wrapperButton}>
              {item.options.map((option, index) => (
                <Button
                  key={index}
                  styleContainer={{marginTop: 10}}
                  titlePosition="left"
                  styleTitle={styles.buttonTitle}
                  title={option}
                  onPress={() => console.warn('-', item.correctAnswer)}
                />
              ))}
            </View>  
          </View>
        ))}
      </ScrollView>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white'
  },
  wrapperButton: {
    margin: 19
  },
  buttonTitle: {
    fontSize: 15,
    color: 'white',
  }
})

export default LectureQuiz;
