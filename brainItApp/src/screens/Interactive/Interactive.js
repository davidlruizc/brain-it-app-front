import React from 'react';
import {View, Text, StyleSheet, Linking, Platform, Alert} from 'react-native';

import Layout from '../../components/Global/Layout';
import Card from '../../components/Interactive/Card';

const vrImage = require('../../../assets/vr.png');
const listeningImage = require('../../../assets/sound.jpg');

const Interactive = ({navigation}) => {
  const navigateVR = () => {
    if (Platform.OS === 'android') {
      Linking.openURL(
        'http://www.mediafire.com/file/ffifwmwfsstjjdf/brain-it-vr.apk/file',
      );
    } else {
      Alert.alert('Sorry', 'This feature is only supported on android devices');
    }
  };

  const navigateListening = () => {
    navigation.navigate('Listening');
  };

  return (
    <Layout>
      <View style={styles.container}>
        <Text style={styles.title}>Interactive experience</Text>
        <Card
          title="Start VR experience"
          image={vrImage}
          handleNavigateToText={navigateVR}
        />
        <Card
          title="Practice your listening"
          image={listeningImage}
          handleNavigateToText={navigateListening}
        />
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    marginTop: 30,
  },
  title: {
    fontSize: 34,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default Interactive;
