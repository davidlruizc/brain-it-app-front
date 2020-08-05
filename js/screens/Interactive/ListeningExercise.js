import React from 'react';
import { View, Text } from 'react-native';
// import SoundPlayer from 'react-native-sound-player';
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';


import Layout from '../../components/Global/Layout';
import PlayButton from '../../components/Player/PlayPause';

const ListeningExercise = () => {
  return (
    <Layout>
      {/* <Text>Question 1 of 5</Text>
      <PlayButton /> */}
      <View style={{flex: 1}}>
          <ProgressSteps>
              <ProgressStep label="First Step">
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
      </View>
    </Layout>
  );
};

export default ListeningExercise;
