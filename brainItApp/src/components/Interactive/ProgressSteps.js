/* eslint-disable react/prop-types */
import React from 'react';
import Steps from './Steps';
import Wizard from 'react-native-wizard';
import {Text, View, SafeAreaView} from 'react-native';
import {StyleSheet} from 'react-native';
import Button from '../Global/Button';

const ProgressStepsLayout = ({data}) => {
  const wizard = React.useRef();
  const [isFirstStep, setIsFirstStep] = React.useState();
  const [isLastStep, setIsLastStep] = React.useState();
  const [currentStep, setCurrentStep] = React.useState(0);

  const nextStep = React.useCallback(() => {
    wizard.current.next();
  }, []);

  const stepList = [
    {
      content: (
        <Steps
          sound={data[0].sound}
          options={data[0].options}
          question={data[0].question}
          nextStep={nextStep}
          correctAnswer={data[0].correctAnswer}
        />
      ),
    },
    {
      content: (
        <Steps
          sound={data[1].sound}
          options={data[1].options}
          question={data[1].question}
          nextStep={nextStep}
          correctAnswer={data[1].correctAnswer}
        />
      ),
    },
    {
      content: (
        <Steps
          sound={data[2].sound}
          options={data[2].options}
          question={data[2].question}
          correctAnswer={data[2].correctAnswer}
          nextStep={nextStep}
        />
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
