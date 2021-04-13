/* eslint-disable react/prop-types */
import React from 'react';
import {ProgressSteps, ProgressStep} from 'react-native-progress-steps';
import {secondaryColor} from '../../colors';
import Steps from './Steps';

const ProgressStepsLayout = ({data}) => {
  return (
    <ProgressSteps
      activeStepIconBorderColor={secondaryColor}
      activeLabelColor={secondaryColor}>
      <ProgressStep label="Question 1">
        <Steps
          sound={data[0].sound}
          options={data[0].options}
          question={data[0].question}
        />
      </ProgressStep>
      <ProgressStep label="Question 2">
        <Steps
          sound={data[1].sound}
          options={data[1].options}
          question={data[1].question}
        />
      </ProgressStep>
      <ProgressStep label="Question 3">
        <Steps
          sound={data[2].sound}
          options={data[2].options}
          question={data[2].question}
        />
      </ProgressStep>
    </ProgressSteps>
  );
};

export default ProgressStepsLayout;
