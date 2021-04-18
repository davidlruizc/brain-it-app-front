import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';

import Layout from '../../components/Global/Layout';
import {useRoute} from '@react-navigation/native';
import Wizard from 'react-native-wizard';
import Steps from '../../components/Grammar/Steps';
import {Popup} from 'popup-ui';

const NUMBER_QUESTIONS = 3;

const LectureQuiz = () => {
  const route = useRoute();
  const wizard = React.useRef();
  const [questions, setQuestion] = React.useState(null);
  const [suffleQuestionItem, setSuffleQuestionItem] = React.useState([]);
  const [currentStep, setCurrentStep] = React.useState(0);
  const [isFirstStep, setIsFirstStep] = React.useState();
  const [isLastStep, setIsLastStep] = React.useState();

  const suffleQuestions = React.useCallback(() => {
    let array, i;

    for (array = [], i = 0; i < NUMBER_QUESTIONS; ++i) {
      array[i] = i;
    }

    let tmp,
      current,
      top = array.length;
    if (top) {
      while (--top) {
        current = Math.floor(Math.random() * (top + 1));
        tmp = array[current];
        array[current] = array[top];
        array[top] = tmp;
      }
    }

    setSuffleQuestionItem(array);
  }, []);

  React.useEffect(() => {
    if (route.params) {
      setQuestion(route.params.item.quiz);
    }
  }, [questions, route]);

  React.useEffect(() => {
    suffleQuestions();
  }, [suffleQuestions]);

  const nextStep = React.useCallback(() => {
    wizard.current.next();
  }, []);

  const stepList = [
    {
      content: (
        <React.Fragment>
          {suffleQuestionItem.length > 0 && (
            <Steps
              options={questions[suffleQuestionItem[0]].options}
              question={questions[suffleQuestionItem[0]].question}
              nextStep={nextStep}
              correctAnswer={questions[suffleQuestionItem[0]].correctAnswer}
              currentIndex={currentStep + 1}
              numberQuestions={NUMBER_QUESTIONS}
            />
          )}
        </React.Fragment>
      ),
    },
    {
      content: (
        <React.Fragment>
          {suffleQuestionItem.length > 0 && (
            <Steps
              options={questions[suffleQuestionItem[1]].options}
              question={questions[suffleQuestionItem[1]].question}
              nextStep={nextStep}
              correctAnswer={questions[suffleQuestionItem[1]].correctAnswer}
              currentIndex={currentStep + 1}
              numberQuestions={NUMBER_QUESTIONS}
            />
          )}
        </React.Fragment>
      ),
    },
    {
      content: (
        <React.Fragment>
          {suffleQuestionItem.length > 0 && (
            <Steps
              options={questions[suffleQuestionItem[2]].options}
              question={questions[suffleQuestionItem[2]].question}
              nextStep={nextStep}
              correctAnswer={questions[suffleQuestionItem[2]].correctAnswer}
              currentIndex={currentStep + 1}
              numberQuestions={NUMBER_QUESTIONS}
            />
          )}
        </React.Fragment>
      ),
    },
  ];

  React.useEffect(() => {
    Popup.show({
      type: 'Warning',
      title: 'Time to practice your grammar',
      button: true,
      textBody: 'According the reading answer the follow questions 📖',
      buttonText: `Let's go!`,
      callback: () => Popup.hide(),
    });
  }, []);

  return (
    <Layout>
      <ScrollView style={styles.container}>
        <React.Fragment>
          {questions !== null && (
            <View
              style={{
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text style={styles.title}>Question {currentStep + 1}</Text>
              <Wizard
                ref={wizard}
                steps={stepList}
                isFirstStep={(val) => setIsFirstStep(val)}
                isLastStep={(val) => setIsLastStep(val)}
                currentStep={({currentStep, isLastStep, isFirstStep}) => {
                  setCurrentStep(currentStep);
                }}
              />
              <View style={{flexDirection: 'row', margin: 18}}>
                <React.Fragment>
                  {stepList.map((_, index) => (
                    <View
                      key={'step-indicator-' + index}
                      style={{
                        width: 10,
                        marginHorizontal: 6,
                        height: 10,
                        borderRadius: 5,
                        backgroundColor:
                          index === currentStep ? '#fc0' : '#000',
                      }}
                    />
                  ))}
                </React.Fragment>
              </View>
            </View>
          )}
        </React.Fragment>
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
    color: 'white',
  },
  wrapperButton: {
    margin: 19,
  },
  buttonTitle: {
    fontSize: 15,
    color: 'white',
  },
});

export default LectureQuiz;
