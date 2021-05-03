import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import Layout from '../../components/Global/Layout';
import Card from '../../components/Interactive/Card';
import {useNavigation} from '@react-navigation/native';

const vrImage = require('../../../assets/vr.png');
const listeningImage = require('../../../assets/sound.jpg');

/**
 * Sección Interactive carga las tarjetas referentes a los ejercicios de Realidad Virtual y listening
 *
 * Uso:
 * ```js
 * <Interactive />
 * ```
 * */
const Interactive = () => {
  const navigation = useNavigation();

  const navigateVR = () => {
    navigation.navigate('VRScreen');
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
