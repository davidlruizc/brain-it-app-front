import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Button from '../Global/Button';
import Toast from 'react-native-toast-message';
import {Popup} from 'popup-ui';
import {useNavigation} from '@react-navigation/native';

const Steps = ({
  question,
  options,
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
          text2: 'Congratulations go to the next question 🙌🏻',
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
    <View>
      <Text style={styles.title}>{question}</Text>
      <View style={styles.wrapperButton}>
        {stateAnswers !== null && (
          <React.Fragment>
            {stateAnswers.map((option, index) => (
              <Button
                key={index}
                styleContainer={{marginTop: 10}}
                titlePosition="left"
                styleTitle={styles.buttonTitle}
                title={option}
                onPress={() => isCorrectAnswer(option)}
              />
            ))}
          </React.Fragment>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  },
  wrapperButton: {
    margin: 19,
  },
  buttonTitle: {
    fontSize: 15,
    color: 'white',
  },
});

export default Steps;
