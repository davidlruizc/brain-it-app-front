/* eslint-disable react/prop-types */
import React from 'react';
import {secondaryColor} from '../../colors';
import Steps from './Steps';
import Wizard from 'react-native-wizard';
import {Text, View, SafeAreaView, Button} from 'react-native';

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
      <SafeAreaView style={{backgroundColor: '#FFF'}}>
        <View
          style={{
            justifyContent: 'space-between',
            flexDirection: 'row',
            backgroundColor: '#FFF',
            borderBottomColor: '#dedede',
            borderBottomWidth: 1,
          }}>
          {console.log('-', isLastStep)}
          <Button
            disabled={isFirstStep}
            title="Prev"
            onPress={() => wizard.current.prev()}
          />
          <Text>{currentStep + 1}. Step</Text>
          <Button disabled={isLastStep} title="Next" onPress={nextStep} />
        </View>
      </SafeAreaView>
      <View
        style={{
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
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
        </View>
      </View>
    </View>
  );
};

export default ProgressStepsLayout;
