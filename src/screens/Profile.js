import React from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import {Container, Content, Text, Thumbnail} from 'native-base';

import Avatar from '../assets/img/avatar.png';

export default function Profile() {
  return (
    <Container>
      <Content>
        <View style={styles.hr}>
          <View style={[styles.profile, styles.padding]}>
            <TouchableOpacity>
              <Thumbnail large source={Avatar} />
            </TouchableOpacity>
            <View style={styles.profileDescription}>
              <Text>Phone Number</Text>
              <Text style={styles.phone}>+62 856-4961-7528</Text>
            </View>
          </View>
        </View>
        <View style={[styles.padding, styles.hr]}>
          <TouchableOpacity>
            <Text>Display Name</Text>
            <Text style={styles.text}>John Hopkins</Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.padding, styles.hr]}>
          <TouchableOpacity>
            <Text>Status Message</Text>
            <Text style={styles.text}>I'm busy, text me later</Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.padding, styles.hr]}>
          <TouchableOpacity>
            <Text>User ID</Text>
            <Text style={styles.text}>johnhopkinss</Text>
          </TouchableOpacity>
        </View>
      </Content>
    </Container>
  );
}

const styles = StyleSheet.create({
  padding: {
    paddingHorizontal: 20,
    paddingVertical: 24,
  },
  phone: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  profile: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileDescription: {
    marginLeft: 12,
  },
  hr: {
    borderBottomColor: 'gray',
    borderBottomWidth: 0.3,
  },
  text: {
    color: '#6ab6e1',
    fontSize: 14,
  },
});