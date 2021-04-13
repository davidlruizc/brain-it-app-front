/* eslint-disable react/prop-types */
import React from 'react';
import {View, Text} from 'react-native';
// import SoundPlayer from 'react-native-sound-player';

import Layout from '../../components/Global/Layout';
import Progress from '../../components/Interactive/ProgressSteps';
import {useRoute} from '@react-navigation/native';

const ListeningExercise = () => {
  const route = useRoute();

  //React.useEffect(() => {
  //if (route.params.questions) {
  //console.log(route.params.questions);
  //}
  //}, [route]);

  return (
    <Layout>
      {/* <Text>Question 1 of 5</Text>
      <PlayButton /> */}
      <View style={{flex: 1}}>
        <Text>asdfasdf</Text>
        {/*        <Progress data={questions} />
         */}
      </View>
    </Layout>
  );
};

export default ListeningExercise;
