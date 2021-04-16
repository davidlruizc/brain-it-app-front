/* eslint-disable react/prop-types */
import React from 'react';
import Steps from './Steps';
import Wizard from 'react-native-wizard';
import {Text, View} from 'react-native';
import {StyleSheet} from 'react-native';
import Button from '../Global/Button';
import {Popup} from 'popup-ui';

const NUMBER_QUESTIONS = 3;

const ProgressStepsLayout = ({data}) => {
  const wizard = React.useRef();
  const [isFirstStep, setIsFirstStep] = React.useState();
  const [isLastStep, setIsLastStep] = React.useState();
  const [currentStep, setCurrentStep] = React.useState(0);
  const [suffleQuestionItem, setSuffleQuestionItem] = React.useState([]);

  const nextStep = React.useCallback(() => {
    wizard.current.next();
  }, []);

  const suffleQuestions = React.useCallback(() => {
    let questions, i;

    for (questions = [], i = 0; i < NUMBER_QUESTIONS; ++i) {
      questions[i] = i;
    }

    let tmp,
      current,
      top = questions.length;
    if (top) {
      while (--top) {
        current = Math.floor(Math.random() * (top + 1));
        tmp = questions[current];
        questions[current] = questions[top];
        questions[top] = tmp;
      }
    }

    setSuffleQuestionItem(questions);
  }, []);

  React.useEffect(() => {
    suffleQuestions();
  }, [suffleQuestions]);

  React.useEffect(() => {
    Popup.show({
      type: 'Warning',
      title: 'Welcome to this quiz exercise',
      button: true,
      textBody:
        'Answer the questions according the audio list, each question uses different audio, pay attation and good luck! 😸',
      buttonText: `Let's go!`,
      callback: () => Popup.hide(),
    });
  }, []);

  const stepList = [
    {
      content: (
        <React.Fragment>
          {suffleQuestionItem.length > 0 && (
            <Steps
              sound={data[suffleQuestionItem[0]].sound}
              options={data[suffleQuestionItem[0]].options}
              question={data[suffleQuestionItem[0]].question}
              nextStep={nextStep}
              correctAnswer={data[suffleQuestionItem[0]].correctAnswer}
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
              sound={data[suffleQuestionItem[1]].sound}
              options={data[suffleQuestionItem[1]].options}
              question={data[suffleQuestionItem[1]].question}
              nextStep={nextStep}
              correctAnswer={data[suffleQuestionItem[1]].correctAnswer}
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
              sound={data[suffleQuestionItem[2]].sound}
              options={data[suffleQuestionItem[2]].options}
              question={data[suffleQuestionItem[2]].question}
              nextStep={nextStep}
              correctAnswer={data[suffleQuestionItem[2]].correctAnswer}
              currentIndex={currentStep + 1}
              numberQuestions={NUMBER_QUESTIONS}
            />
          )}
        </React.Fragment>
      ),
    },
  ];

  return (
    <View>
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
          onNext={() => {
            console.log('Next Step Called');
          }}
          onPrev={() => {
            console.log('Previous Step Called');
          }}
          currentStep={({currentStep, isLastStep, isFirstStep}) => {
            setCurrentStep(currentStep);
          }}
        />
        <View style={{flexDirection: 'row', margin: 18}}>
          <React.Fragment>
            {stepList.map((val, index) => (
              <View
                key={'step-indicator-' + index}
                style={{
                  width: 10,
                  marginHorizontal: 6,
                  height: 10,
                  borderRadius: 5,
                  backgroundColor: index === currentStep ? '#fc0' : '#000',
                }}
              />
            ))}
          </React.Fragment>
        </View>
        <View style={{flexDirection: 'row', margin: 18}}>
          <View style={{width: '40%', marginRight: 10}}>
            <Button
              disabled={isFirstStep}
              title="Prev"
              onPress={() => wizard.current.prev()}
            />
          </View>
          <View style={{width: '40%', marginLeft: 10}}>
            <Button disabled={isLastStep} title="Next" onPress={nextStep} />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    fontSize: 26,
    color: 'white',
    marginBottom: 10,
    marginTop: 10,
  },
});

export default ProgressStepsLayout;
