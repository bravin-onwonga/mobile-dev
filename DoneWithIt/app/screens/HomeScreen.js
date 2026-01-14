import React from 'react';
import { ImageBackground, StyleSheet, View, Image, Text } from 'react-native';

function HomeScreen(props) {
  return (
    <ImageBackground style={styles.background} source={require('../assets/background.jpg')} >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={
          require('../assets/logo.png')} />
        <Text style={{ fontWeight: 'bold', color: '#ffffff', fontSize: 20 }}>Sell what you don't need</Text>
      </View>
      <View style={styles.loginButton}></View>
      <View style={styles.registerButton}></View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({ //rnss
  background: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  logo: {
    height: 100,
    width: 100,
  },
  logoContainer: {
    alignItems: 'center',
    position: 'absolute',
    top: 70,
  },
  loginButton: {
    backgroundColor: '#F88379',
    width: '100%',
    height: 60,
  },
  registerButton: {
    backgroundColor: '#00fff2',
    width: '100%',
    height: 60,
  },
});

export default HomeScreen;