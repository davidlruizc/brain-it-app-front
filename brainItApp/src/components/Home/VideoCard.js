import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

import {secondaryColor} from '../../colors';

const thumbOne = require('../../../assets/tempThumbnail.jpeg');
const thumbTwo = require('../../../assets/thumbnailPast.png');
const thumbThree = require('../../../assets/thumbnailContinuous.png');
const thumbFour = require('../../../assets/thumbnailPerfect.png');

const VideoCard = ({
  title,
  description,
  shortDescription,
  handleNavigation,
  videoId,
  image,
}) => {
  const imageSelected = React.useMemo(() => {
    if (image === 'tempThumbnail') {
      return thumbOne;
    } else if (image === 'thumbnailContinuous') {
      return thumbThree;
    } else if (image === 'thumbnailPast') {
      return thumbTwo;
    } else if (image === 'thumbnailPerfect') {
      return thumbFour;
    }
  }, [image]);

  return (
    <TouchableOpacity
      style={styles.wrapper}
      onPress={() => handleNavigation({title, description, videoId})}>
      <View>
        <Image source={imageSelected} style={styles.thumbnail} />
      </View>
      <View style={styles.textWrapper}>
        <Text style={styles.title}>{title}</Text>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.description}>{shortDescription}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    padding: 17,
    backgroundColor: secondaryColor,
    borderRadius: 10,
    marginTop: 19,
  },
  thumbnail: {
    width: 156,
    height: 86,
    borderRadius: 10,
  },
  textWrapper: {
    marginHorizontal: 7,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'white',
  },
  description: {
    flex: 1,
    fontSize: 11,
    color: 'white',
    flexWrap: 'wrap',
  },
});

export default VideoCard;
