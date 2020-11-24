import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text, Thumbnail} from 'native-base';
import {API_URL} from '@env';

import Avatar from '../assets/img/avatar.png';

export default function Contact({item}) {
  return (
    <View style={styles.contact}>
      <Thumbnail
        small
        source={
          item.contact.photo ? {uri: `${API_URL}${item.contact.photo}`} : Avatar
        }
      />
      <Text style={styles.messageSender}>{item.contact.name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  contact: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  messageSender: {
    fontWeight: 'bold',
    marginLeft: 12,
  },
});
