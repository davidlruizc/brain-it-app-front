import React from 'react';
import {
  SafeAreaView,
  ImageBackground,
  StyleSheet,
  StatusBar,
} from 'react-native';

const BG_IMAGE = require('../../../assets/home.jpg');

const Layout = ({children}) => (
  <SafeAreaView>
    <StatusBar
      translucent={true}
      backgroundColor="transparent"
      barStyle={'light-content'}
    />
    <ImageBackground source={BG_IMAGE} style={styles.bgImage}>
      {children}
    </ImageBackground>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  bgImage: {
    width: '100%',
    height: '100%',
  },
});

export default Layout;
