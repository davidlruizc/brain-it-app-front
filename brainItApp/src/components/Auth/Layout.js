import React from 'react';
import {
  SafeAreaView,
  ImageBackground,
  StyleSheet,
  StatusBar,
} from 'react-native';

const BG_IMAGE = require('../../../assets/home.jpg');

/**
 * Definición de Layout general, con el color base de la identidad de la app.
 *
 * Este componente tiene como props un componente children children
 *
 * ```js
 * <Layout>
 *  <Text>Hola Mundo</Text>
 * </Layout>
 * ```
 */
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
