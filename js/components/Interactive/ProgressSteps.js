/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */
import React from 'react';
import { View, Text, StyleSheet, Linking } from 'react-native';
import SoundPlayer from 'react-native-sound-player';
import Sound from 'react-native-sound';

import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';
import { secondaryColor } from '../../colors';
import PlayButton from '../Player/PlayPause';
import Button from '../Global/Button';

const ProgressStepsLayout = ({ data }) => {
  return (
    <ProgressSteps activeStepIconBorderColor={secondaryColor} activeLabelColor={secondaryColor}>
      <ProgressStep label="First Step" nextBtnTextStyle={{ color: 'green' }}>
        <View style={{ alignItems: 'center' }}>
          <Text style={styles.title}>Play the audio</Text>
          <PlayButton />
          <Text style={styles.notes}>Note: Select the correct answer according the audio</Text>
          <Button
            title="asdf"
            onPress={() => {
              const track = new Sound('https://www.soundjay.com/button/button-1.mp3', null, (e) => {
                if (e) {
                  console.log('error loading track:', e);
                } else {
                  track.play();
                }
              });
            }}
            styleContainer={{ marginTop: 10 }}
            titlePosition="left"
          />
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
  );
};

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    color: 'white',
    marginBottom: 10,
  },
  notes: {
    color: '#F7F7F7',
    fontSize: 12,
  },
});

export default ProgressStepsLayout;
