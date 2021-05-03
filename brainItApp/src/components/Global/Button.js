/* eslint-disable no-use-before-define */
/* eslint-disable react/prop-types */
import React from 'react';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';

import {secondaryColor} from '../../colors';

/**
 * Botón generalizado dentro de la estructura de diseño de la app. Contiene las props nativas
 * de un botón más las siguientes:
 *
 * @param {object} styleContainer - estilos para el contenedor padre
 * @param {object} styleTitle - estilos de titulo
 * @param {string} titlePosition - posición del titulo: 'left'
 *
 * ```js
 * < Button />
 * ```
 */
const Button = ({
  title,
  onPress,
  styleContainer,
  styleTitle,
  titlePosition,
  disabled,
}) => {
  return (
    <TouchableOpacity
      style={{
        ...styles.container,
        ...styleContainer,
      }}
      disabled={disabled}
      onPress={onPress}>
      <View
        style={{
          alignSelf: titlePosition === 'left' ? 'flex-start' : 'center',
          paddingHorizontal: 15,
        }}>
        <Text style={styleTitle || styles.title}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: secondaryColor,
    borderRadius: 20,
    paddingVertical: 17,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default Button;
