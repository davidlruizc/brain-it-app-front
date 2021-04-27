import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Alert} from 'react-native';
import {Icon} from 'react-native-elements';
import Sound from 'react-native-sound';

import {secondaryColor} from '../../colors';

class PlayPause extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      toggle: false,
      duration: 0,
      current: 0,
    };
  }

  componentWillMount() {
    Sound.setCategory('Playback');
    this.sound = new Sound(this.props.audioClip, Sound.MAIN_BUNDLE, (error) => {
      if (error) {
        console.log('failed to load the sound', error);
        return;
      }

      this.setState({duration: this.sound.getDuration()});
      //this.play();
    });
  }

  componentWillUnMount() {
    this.sound.stop();
    clearInterval(this.tickInterval);
    this.tickInterval = null;
  }

  tick() {
    this.sound.getCurrentTime((seconds) => {
      if (this.tickInterval) {
        this.setState({current: seconds});
      }
    });
  }

  play() {
    this.tickInterval = setInterval(() => this.tick(), 250);
    this.setState({toggle: true});
    this.sound.play((success) => {
      if (success) {
        this.setState({toggle: false});
        clearInterval(this.tickInterval);
        this.tickInterval = null;
      } else {
        console.log('playback failed due to audio decoding errors');
      }
    });
  }

  rewind = () => {
    this.setState({toggle: true});
    this.sound.stop(() => this.play());
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.button}
          onPress={this.rewind}
          disabled={this.state.toggle}>
          {this.state.toggle ? (
            <Icon name="stop" type="font-awesome" color="white" size={26} />
          ) : (
            <Icon name="play" type="font-awesome" color="white" size={26} />
          )}
        </TouchableOpacity>
        <Text
          style={{
            color: 'white',
          }}>{`${this.state.current} - ${this.state.duration}`}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    justifyContent: 'center',
  },
  button: {
    borderRadius: 100,
    backgroundColor: secondaryColor,
    paddingVertical: 20,
    paddingHorizontal: 22,
  },
});

export default PlayPause;
