import React from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {Button, Text} from 'native-base';

import Logo from '../assets/img/logo.png';

export default function Welcome({navigation}) {
  function goToLoginByEmail() {
    navigation.navigate('Login_By_Email');
  }

  return (
    <View style={styles.parent}>
      <Image source={Logo} style={styles.logo} />
      <Text style={[styles.white, styles.header]}>Welcome!</Text>
      <Text style={[styles.white, styles.marginBottom, styles.subHeader]}>
        Try Chatin streamlined and faster than ever!
      </Text>
      <Button block style={[styles.btn, styles.marginBottom, styles.marginTop]}>
        <Text style={styles.blue}>start</Text>
      </Button>
      <TouchableOpacity onPress={goToLoginByEmail}>
        <Text style={styles.white}>Log in with email address</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  parent: {
    backgroundColor: '#6ab6e1',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  logo: {
    height: 75,
    width: 75,
  },
  white: {
    color: 'white',
  },
  btn: {
    backgroundColor: 'white',
  },
  blue: {
    color: '#6ab6e1',
  },
  marginBottom: {
    marginBottom: 20,
  },
  marginTop: {
    marginTop: 100,
  },
  header: {
    fontWeight: 'bold',
    fontSize: 28,
    marginBottom: 4,
    marginTop: 12,
  },
  subHeader: {
    textAlign: 'center',
    width: '70%',
  },
});
