import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import YouTube from "react-native-youtube";

import Layout from '../../components/Global/Layout';

const VideoPlayer = () => {
  return (
    <Layout>
      <Text>Video Player</Text>
      <YouTube 
        apiKey="AIzaSyAXd-BG6vu7AUnd-VcsEGV3mIztzIU9z2U"
        videoId="tMTxikrSe8g"
        play={false}
        style={styles.videPlayer}
      />
    </Layout>
  );
};

const styles = StyleSheet.create({
  videPlayer: {
    alignSelf: 'stretch',
    height: 300
  }
})

export default VideoPlayer;
