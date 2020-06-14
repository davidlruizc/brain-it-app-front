import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import { CommonActions } from '@react-navigation/native';

import Layout from '../../components/Global/Layout';

const Interactive = ({navigation}) => {

  const navigateVR = () => {
    navigation.dispatch(
      CommonActions.navigate({
        name: 'VR',
        params: {
          user: 'jane',
        },
      })
    );
  };

  return (
    <Layout>
      <Text>iii</Text>
      <Button
        title="VR"
        onPress={navigateVR}
      />
    </Layout>
  );
};

export default Interactive;
