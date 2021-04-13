import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import PlayButton from '../Player/PlayPause';
import Button from '../Global/Button';

const Steps = ({sound, options, question}) => {
  return (
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
          />
        ))}
      </View>
    </View>
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
