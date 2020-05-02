import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import YouTube from "react-native-youtube";

import Layout from '../../components/Global/Layout';
import Button from '../../components/Global/Button';

const VideoPlayer = () => {
  return (
    <Layout>
      <YouTube
        apiKey="AIzaSyAXd-BG6vu7AUnd-VcsEGV3mIztzIU9z2U"
        videoId="JFqiSr9A-Go"
        play={false}
        style={styles.videPlayer}
      />
      <View style={styles.wrapper}>
        <Text style={styles.title}>Title of the video</Text>
        <Text style={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
      </View>
      <View style={styles.button} >
        <Button title="Back to playlist" />
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  videPlayer: {
    alignSelf: 'stretch',
    height: 232
  },
  wrapper: {
    paddingVertical: 29,
    paddingHorizontal: 15 
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 24,
    marginBottom: 19
  },
  description: {
    color: 'white',
    fontSize: 14
  },
  button: {
    flex: 1,
    width: '85%',
    justifyContent: 'flex-end',
    alignSelf: 'center',
    marginBottom: 10
  }
})

export default VideoPlayer;
