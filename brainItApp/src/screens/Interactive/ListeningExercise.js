import React from 'react';
import {View} from 'react-native';

import Layout from '../../components/Global/Layout';
import Progress from '../../components/Interactive/ProgressSteps';
import {useRoute} from '@react-navigation/native';

/**
 * Vista que muestra los ejercicios de listening por medio de un wizard form
 *
 * Recibe parametros de navegación:
 *
 * ```
 * @param {string} sound - nombre del archivo de audio alojado en android/app/src/main/res/raw
 * @param {string} question - pregunta / enunciado del ejercicio.
 * @param {string[]} options - opciones de selección múltiple
 * @param {string} correctAnswer - respuesta correcta.
 * ```
 * */
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
