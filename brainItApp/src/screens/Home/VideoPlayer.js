import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import YouTube from "react-native-youtube";
import { CommonActions } from '@react-navigation/native';

import Layout from '../../components/Global/Layout';
import Button from '../../components/Global/Button';

const VideoPlayer = ({navigation, route}) => {
  const { args } = route.params;

  const handleGrammarStructure = () => {
    navigation.dispatch(
      CommonActions.navigate({
        name: args.title,
      })
    );
  };

  return (
    <Layout>
      <YouTube
        apiKey="AIzaSyAXd-BG6vu7AUnd-VcsEGV3mIztzIU9z2U"
        videoId={args.videoId}
        play={false}
        style={styles.videPlayer}
      />
      <View style={styles.wrapper}>
        <Text style={styles.title}>{args.title}</Text>
        <Text style={styles.description}>{args.description}</Text>
      </View>
      <View style={styles.button} >
        {args.title === 'Welcome to brainit' ? null : (
          <Button styleContainer={{marginBottom: 19}} title="Grammar Structure" onPress={() => handleGrammarStructure()} />
        )}
        <Button title="Back to playlist" onPress={() => navigation.navigate('Feed')} />
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
