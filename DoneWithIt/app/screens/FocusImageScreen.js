import React from 'react';
import { ImageBackground, StyleSheet, View, Image, Text } from 'react-native';

import colors from '../config/colors';


function FocusImageScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}></View>
      <View style={styles.deleteIcon}></View>
      <Image style={styles.image} source={require('../assets/laptop.jpg')}></Image>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    // flex: 1,
    width: '100%',
    height: '100%',
    objectFit: 'contain'
  },
  container: {
    backgroundColor: colors.black,
    flex: 1,
  },
  closeIcon: {
    width: 50,
    height: 50,
    backgroundColor: colors.primary,
    position: 'absolute',
    top: 40,
    left: 40
  },
  deleteIcon: {
    width: 50,
    height: 50,
    backgroundColor: colors.secondary,
    position: 'absolute',
    top: 40,
    right: 40,
  },
})

export default FocusImageScreen;