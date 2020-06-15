import React from 'react';
import { View, Text, StyleSheet } from 'react-native'; 

import {cardColor, textColorOne, textColorTwo, textColorThree, textColorFour} from '../../colors';

const GrammarCard = ({
  sentence,
  subjectEj,
  verb,
  verbEj,
  complementEj,
  negative,
  negativeEj,
  interrogative,
  interrogativeEj
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text()}>{sentence}: </Text>
        {interrogative ? (
          <>
            <View>
              <Text style={styles.text(textColorFour)}>{interrogative}</Text>
              <Text style={styles.text(textColorFour)}>{interrogativeEj}</Text>
            </View>
            <Text style={{...styles.text(), marginHorizontal: 8}}>+</Text>
          </>
        ) : null}
        <View>
          <Text style={styles.text(textColorOne)}>Subject</Text>
          <Text style={styles.text(textColorOne)}>{subjectEj}</Text>
        </View>
        <Text style={{...styles.text(), marginHorizontal: 8}}>+</Text>
        {negative ? (
          <>
            <View>
              <Text style={styles.text(textColorFour)}>{negative}</Text>
              <Text style={styles.text(textColorFour)}>{negativeEj}</Text>
            </View>
            <Text style={{...styles.text(), marginHorizontal: 8}}>+</Text>
          </>
        ) : null}
        <View>
          <Text style={styles.text(textColorTwo)}>{verb}</Text>
          <Text style={styles.text(textColorTwo)}>{verbEj}</Text>
        </View>
        <Text style={{...styles.text(), marginHorizontal: 8}}>+</Text>
        <View style={styles.textWrapper}>
          <Text style={styles.text(textColorThree)}>Complement</Text>
          <Text style={styles.text(textColorThree)}>{complementEj}</Text>
        </View>
        {interrogative ? (
          <>
            <Text style={{...styles.text(), marginHorizontal: 8}}>+</Text>
            <Text style={{...styles.text(), marginHorizontal: 8}}>?</Text>
          </>
        ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 17,
    backgroundColor: cardColor,
    borderRadius: 10,
    marginTop: 19,
  },
  text: (color) => ({
    textAlign: 'center',
    color: color ? color : 'white',
    fontSize: 9,
    fontWeight: 'bold',
  })
});

export default GrammarCard;
