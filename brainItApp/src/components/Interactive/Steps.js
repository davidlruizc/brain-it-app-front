import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import PlayButton from '../Player/PlayPause';
import Button from '../Global/Button';
import Toast from 'react-native-toast-message';

const Steps = ({sound, options, question, correctAnswer, nextStep}) => {
  const isCorrectAnswer = (answer) => {
    if (answer === correctAnswer) {
      Toast.show({
        type: 'success',
        text1: `That's correct!`,
        text2: 'Congratulations go to the next question👏🏻',
      });

      nextStep();
    } else {
      Toast.show({
        type: 'error',
        text1: `Ups!`,
        text2: `That's not the correct answer, try again 🥵`,
      });
    }
  };

  React.useEffect(() => {}, []);

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
          {options.map((item, index) => (
            <Button
              key={index}
              title={item}
              styleContainer={{marginTop: 10}}
              titlePosition="left"
              styleTitle={styles.buttonTitle}
              onPress={() => isCorrectAnswer(item)}
            />
          ))}
        </View>
      </View>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    fontSize: 24,
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
