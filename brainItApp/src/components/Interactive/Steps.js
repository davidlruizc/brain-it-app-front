import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import PlayButton from '../Player/PlayPause';
import Button from '../Global/Button';
import Toast from 'react-native-toast-message';
import {Popup} from 'popup-ui';
import {useNavigation} from '@react-navigation/native';

/** 
  * Componente carga cada paso dentro del wizard con la información sobre el ejercicio a cursar y combina las respuestas de forma aleatoria.
  *
  * ```js 
  *const suffleAnswers = React.useCallback(() => {
    let array = options;

    var currentIndex = array.length,
      temporaryValue,
      randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    setStateAnswers(array);
  }, [options]);
  * ```
  * Props del componente:
  * ```
  * @param {string} sound - nombre del archivo .mp3
  * @param {string[]} options - selección múltiple
  * @param {string} question - pregunta, encabezado
  * @param {string}  correctAnswer - opción correcta
  * @param {function} nextStep - acción envia al siguiente ejercicio
  * @param {number} currentIndex - index actual dentro de wizard
  * @param {number} numberQuestions - número total de preguntas
  * ```
  *
  * */
const Steps = ({
  sound,
  options,
  question,
  correctAnswer,
  nextStep,
  currentIndex,
  numberQuestions,
}) => {
  const navigation = useNavigation();
  const [stateAnswers, setStateAnswers] = React.useState(null);
  const isCorrectAnswer = (answer) => {
    if (currentIndex === numberQuestions) {
      Popup.show({
        type: 'Success',
        title: 'You made it! 👏🏻',
        button: true,
        textBody:
          'You have finished this quiz section keep learning and improving your skills',
        buttonText: `Go to list`,
        callback: () => {
          navigation.navigate('Interactive');
          Popup.hide();
        },
      });
    } else {
      if (answer === correctAnswer) {
        Toast.show({
          type: 'success',
          text1: `That's correct!`,
          text2: 'Congratulations go to the next question 👏🏻',
        });

        nextStep();
      } else {
        Toast.show({
          type: 'error',
          text1: `Ups!`,
          text2: `That's not the correct answer, try again 😿`,
        });
      }
    }
  };

  const suffleAnswers = React.useCallback(() => {
    let array = options;

    var currentIndex = array.length,
      temporaryValue,
      randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    setStateAnswers(array);
  }, [options]);

  React.useEffect(() => {
    suffleAnswers();
  }, [suffleAnswers]);

  return (
    <React.Fragment>
      <View style={{alignItems: 'center'}}>
        <Text style={styles.title}>Play the audio</Text>
        <PlayButton audioClip={sound} />
        <Text style={styles.notes}>
          Note: Select the correct answer according the audio
        </Text>
        <View style={styles.wrapper}>
          <Text style={styles.title}>{question}</Text>
          {stateAnswers !== null && (
            <React.Fragment>
              {stateAnswers.map((item, index) => (
                <React.Fragment>
                  <Button
                    key={index}
                    title={item}
                    styleContainer={{marginTop: 10}}
                    titlePosition="left"
                    styleTitle={styles.buttonTitle}
                    onPress={() => isCorrectAnswer(item)}
                  />
                </React.Fragment>
              ))}
            </React.Fragment>
          )}
        </View>
      </View>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white',
    marginBottom: 10,
    marginTop: 10,
  },
  notes: {
    color: '#F7F7F7',
    fontSize: 12,
  },
  wrapper: {
    paddingHorizontal: 30,
  },
  buttonTitle: {
    fontSize: 12,
    color: 'white',
  },
});

export default Steps;
