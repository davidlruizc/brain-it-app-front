import React from 'react';
import { View, Text } from 'react-native';

import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';
import { secondaryColor } from '../../colors';

const ProgressStepsLayout = () => {
  return (
    <ProgressSteps activeStepIconBorderColor={secondaryColor} activeLabelColor={secondaryColor}>
      <ProgressStep label="First Step" nextBtnTextStyle={{color: 'green'}}>
        <View style={{ alignItems: 'center' }}>
          <Text>This is the content within step 1!</Text>
        </View>
      </ProgressStep>
      <ProgressStep label="Second Step">
        <View style={{ alignItems: 'center' }}>
          <Text>This is the content within step 2!</Text>
        </View>
      </ProgressStep>
      <ProgressStep label="Third Step">
        <View style={{ alignItems: 'center' }}>
          <Text>This is the content within step 3!</Text>
        </View>
      </ProgressStep>
    </ProgressSteps>
  );
};

export default ProgressStepsLayout;
