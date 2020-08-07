import React from 'react';
import { View, Text } from 'react-native';
// import SoundPlayer from 'react-native-sound-player';


import Layout from '../../components/Global/Layout';
import PlayButton from '../../components/Player/PlayPause';
import Progress from '../../components/Interactive/ProgressSteps';
import { secondaryColor } from '../../colors';

const ListeningExercise = () => {
  return (
    <Layout>
      {/* <Text>Question 1 of 5</Text>
      <PlayButton /> */}
      <View style={{flex: 1}}>
        <Progress />
      </View>
    </Layout>
  );
};

export default ListeningExercise;
