/* eslint-disable react/prop-types */
import React from 'react';
import {View} from 'react-native';
// import SoundPlayer from 'react-native-sound-player';

import Layout from '../../components/Global/Layout';
import Progress from '../../components/Interactive/ProgressSteps';
import {useRoute} from '@react-navigation/native';

const ListeningExercise = () => {
  const route = useRoute();
  const [questions, setQuestions] = React.useState(null);

  React.useEffect(() => {
    if (route.params.questions) {
      setQuestions(route.params.questions, questions);
    }
  }, [route, questions]);

  return (
    <Layout>
      {/* <Text>Question 1 of 5</Text>
      <PlayButton /> */}
      {questions !== null && (
        <View style={{flex: 1}}>
          <Progress data={questions} />
        </View>
      )}
    </Layout>
  );
};

export default ListeningExercise;
