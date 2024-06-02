import React from 'react';
import { Image, StyleSheet, ScrollView } from 'react-native';

const HomeScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={require('../assets/images/header.png')} style={styles.header} />
      <Image source={require('../assets/images/image2.png')} style={styles.image2} />
      <Image source={require('../assets/images/image3.png')} style={styles.image3} />
      <Image source={require('../assets/images/image4.png')} style={styles.image4} />
      <Image source={require('../assets/images/Footer.png')} style={styles.footernew} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#000',
    alignItems: 'center',
  },
  header: {
    width: 375,
    height: 124,
    marginVertical: 10,
    opacity: 1,
    backgroundColor: '#000000',
  },
  image2: {
    width: 375,
    height: 670.4,
    paddingTop: 20,
    paddingRight: 24,
    paddingBottom: 30,
    paddingLeft: 24,
    marginVertical: 10,
    backgroundColor: '#0F1014',
  },
  image3: {
    width: 375,
    height: 296.14,
    paddingTop: 30,
    paddingRight: 24,
    paddingBottom: 30,
    paddingLeft: 24,
    marginVertical: 32,
    opacity: 1,
    backgroundColor: '#050505',
  },
  image4: {
    width: 375,
    height: 416,
    paddingTop: 30,
    paddingRight: 24,
    paddingBottom: 30,
    paddingLeft: 24,
    marginVertical: 10,
    opacity: 1,
    backgroundColor: '#000000',
  },
  footernew: {
    footer: {
      width: '100%',
      height: 332.8,
      paddingTop: 61.61,
      paddingRight: 260.5,
      paddingBottom: 62.4,
      paddingLeft: 260.5,
      marginVertical: 24,
      opacity: 0,
    },
  },
});

export default HomeScreen;
