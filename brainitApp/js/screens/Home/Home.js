import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

import Layout from '../../components/Global/Layout';
import VieoCard from '../../components/Home/VideoCard';

const tempData = [
  {
    title: 'Welcome to brainit',
    shortDescription: 'Short description of the video to give an intro for the audience',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    videoId: 'PAaJtiIG6ro'
  },
  {
    title: 'Simple past',
    shortDescription: 'Short description of the video to give an intro for the audience',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    videoId: 'U9GfQpK9YPg'
  },
  {
    title: 'Past continuous',
    shortDescription: 'Short description of the video to give an intro for the audience',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    videoId: 'zQqZe6M64Yo'
  },
  {
    title: 'Past perfect',
    shortDescription: 'Short description of the video to give an intro for the audience',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    videoId: 'KiW6dI3Mm5M'
  },
];

const Home = ({navigation}) => {
  const handleVideoNav = (args) => {
    navigation.navigate('VideoPlayer', {args});
  };

  return(
    <Layout>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false} >
        <Text style={styles.title}>Watch the lessons</Text>
        {tempData.map((card, index) => (
          <VieoCard key={index} {...card} handleNavigation={handleVideoNav} />
        ))}
      </ScrollView>
    </Layout>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    marginTop: 30
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: 'white'
  }
});

export default Home;
