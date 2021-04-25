import React from 'react';
import {Linking, Platform, Alert, View, Text, StyleSheet} from 'react-native';
import YouTube from 'react-native-youtube';

import Layout from '../../components/Global/Layout';
import Button from '../../components/Global/Button';
import {useNavigation} from '@react-navigation/native';
import IntentLauncher from 'react-native-intent-launcher';

const PACKAGE_NAME = 'com.DefaultCompany.BrainitVR';
const DOWNLOAD_VR =
  'http://www.mediafire.com/file/ffifwmwfsstjjdf/brain-it-vr.apk/file';

const VREnvironment = () => {
  const navigation = useNavigation();

  const downloadVRApp = () => {
    if (Platform.OS === 'android') {
      Linking.openURL(DOWNLOAD_VR);
    } else {
      Alert.alert('Sorry', 'This feature is only supported on android devices');
    }
  };

  const openPackageApp = () => {
    IntentLauncher.isAppInstalled(PACKAGE_NAME)
      .then((result) => {
        IntentLauncher.startAppByPackageName(PACKAGE_NAME).catch((error) =>
          Alert.alert(
            'Error',
            'There is a problem trying to open the app, please try later',
          ),
        );
      })
      .catch((error) => {
        downloadVRApp();
      });
  };

  return (
    <Layout>
      <YouTube
        apiKey="AIzaSyAXd-BG6vu7AUnd-VcsEGV3mIztzIU9z2U"
        videoId={'PAaJtiIG6ro'}
        play={false}
        style={styles.videPlayer}
      />
      <View style={styles.wrapper}>
        <Text style={styles.title}>Launch VR excercise</Text>
        <Text style={styles.description}>
          To enjoy the VR activity you must have the Brainit VR application
          installed. To install it click on the button below and download it,
          you must use VR glasses to enjoy the experience. If you have any
          doubts you can follow the instructions in the video.
        </Text>
      </View>
      <View style={styles.button}>
        <Button
          styleContainer={{marginBottom: 19}}
          title="Go and try the VR"
          onPress={() => openPackageApp()}
        />
        <Button
          title="Go Back"
          onPress={() => navigation.navigate('Interactive')}
        />
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  videPlayer: {
    alignSelf: 'stretch',
    height: 232,
  },
  wrapper: {
    paddingVertical: 29,
    paddingHorizontal: 15,
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 24,
    marginBottom: 19,
  },
  description: {
    color: 'white',
    fontSize: 14,
  },
  button: {
    flex: 1,
    width: '85%',
    justifyContent: 'flex-end',
    alignSelf: 'center',
    marginBottom: 10,
  },
});

export default VREnvironment;
