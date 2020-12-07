/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {ProgressSteps, ProgressStep} from 'react-native-progress-steps';
import {secondaryColor} from '../../colors';
import PlayButton from '../Player/PlayPause';
import Button from '../Global/Button';

const ProgressStepsLayout = ({data}) => {
  return (
    <ProgressSteps
      activeStepIconBorderColor={secondaryColor}
      activeLabelColor={secondaryColor}>
      <ProgressStep label="Question 1">
        <View style={{alignItems: 'center'}}>
          <Text style={styles.title}>Play the audio</Text>
          <PlayButton audioClip={data[0].sound} />
          <Text style={styles.notes}>
            Note: Select the correct answer according the audio
          </Text>
          <View style={styles.wrapper}>
            <Text style={styles.title}>{data[0].question}</Text>
            {data[0].options.map((item, index) => (
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
      </ProgressStep>
      <ProgressStep label="Question 2">
        <View style={{alignItems: 'center'}}>
          <Text style={styles.title}>Play the audio</Text>
          <PlayButton audioClip={data[1].sound} />
          <Text style={styles.notes}>
            Note: Select the correct answer according the audio
          </Text>
          <View style={styles.wrapper}>
            <Text style={styles.title}>{data[1].question}</Text>
            {data[1].options.map((item, index) => (
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
      </ProgressStep>
      <ProgressStep label="Question 3">
        <View style={{alignItems: 'center'}}>
          <Text style={styles.title}>Play the audio</Text>
          <PlayButton audioClip={data[2].sound} />
          <Text style={styles.notes}>
            Note: Select the correct answer according the audio
          </Text>
          <View style={styles.wrapper}>
            <Text style={styles.title}>{data[2].question}</Text>
            {data[2].options.map((item, index) => (
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
      </ProgressStep>
    </ProgressSteps>
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

export default ProgressStepsLayout;
