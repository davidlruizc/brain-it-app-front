import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Alert} from 'react-native';
import {Icon} from 'react-native-elements';
import Sound from 'react-native-sound';
import Slider from '@react-native-community/slider';

import {fourthColor, secondaryColor} from '../../colors';

class PlayPause extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      toggle: false,
      duration: 0,
      current: 0,
      sliderCurrent: 0,
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

  transformTimeToSlider(current, duration) {
    const value = (current * 1) / duration;
    this.setState({sliderCurrent: value});
  }

  tick() {
    this.sound.getCurrentTime((seconds) => {
      if (this.tickInterval) {
        this.transformTimeToSlider(seconds, this.state.duration);
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

  onSliderChange = (position) => {
    const value = (position * this.state.duration) / 1;
    this.sound.setCurrentTime(value);
  };

  rewind = () => {
    this.setState({toggle: true});
    this.sound.stop(() => this.play());
  };

  render() {
    return (
      <View style={{width: '100%', marginBottom: 17}}>
        <View style={styles.container}>
          <Slider
            style={{width: 300, height: 40}}
            minimumValue={0}
            maximumValue={1}
            value={this.state.sliderCurrent}
            minimumTrackTintColor={secondaryColor}
            maximumTrackTintColor="#000000"
            onValueChange={this.onSliderChange}
            thumbTintColor={fourthColor}
          />
          {/*
<View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                color: 'white',
              }}>{`${this.state.current}`}</Text>
            <Text style={{color: 'white'}}>{this.state.duration}</Text>
          </View>


          */}
        </View>

        <View style={styles.container}>
          <TouchableOpacity
            style={styles.button}
            onPress={this.rewind}
            disabled={this.state.toggle}>
            {this.state.toggle ? (
              <Icon name="stop" type="font-awesome" color="white" size={20} />
            ) : (
              <Icon name="play" type="font-awesome" color="white" size={20} />
            )}
          </TouchableOpacity>
        </View>
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
