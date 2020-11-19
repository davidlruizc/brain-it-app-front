/* eslint-disable no-use-before-define */
/* eslint-disable react/prop-types */
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';

import { secondaryColor, layerColor, layerMiniColor } from '../../colors';

const ActivityCard = ({ title, questions, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.topWrapper}>
        <View style={styles.titleContent}>
          <Icon name="local-activity" type="materia" color={layerColor} size={20} />
          <Text style={styles.contentText}>{title}</Text>
        </View>
        <View style={styles.loadContent}>
          <Text style={styles.moreText}>More</Text>
          <Icon name="keyboard-arrow-right" type="materia" color={layerMiniColor} size={20} />
        </View>
      </View>
      <View style={styles.downWrapper}>
        <Text style={styles.textQuestion}>{questions} Questions</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    backgroundColor: secondaryColor,
    marginTop: 15,
  },
  topWrapper: {
    paddingHorizontal: 10,
    paddingVertical: 13,
    flexDirection: 'row',
  },
  titleContent: {
    flexDirection: 'row',
    width: '85%',
  },
  contentText: {
    color: layerColor,
    fontSize: 14,
    fontWeight: 'bold',
    marginLeft: 8,
  },
  loadContent: {
    flexDirection: 'row',
    width: '15%',
  },
  moreText: {
    color: layerMiniColor,
    fontSize: 12,
  },
  downWrapper: {
    paddingHorizontal: 10,
    paddingVertical: 13,
  },
  textQuestion: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ActivityCard;
