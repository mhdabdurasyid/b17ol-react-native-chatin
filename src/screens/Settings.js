import React from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import {Container, Content, Text, Icon, Thumbnail} from 'native-base';

import Avatar from '../assets/img/avatar.png';

export default function Settings() {
  return (
    <Container>
      <Content>
        <View style={styles.hr}>
          <View style={[styles.profile, styles.padding]}>
            <Thumbnail large source={Avatar} />
            <View style={styles.profileDescription}>
              <Text style={styles.profileName}>John Hopkins</Text>
              <Text style={styles.profileID}>User ID: johnhopkinss</Text>
            </View>
          </View>
        </View>
        <View style={styles.padding}>
          <TouchableOpacity style={styles.list}>
            <Icon type="MaterialIcons" name="person" />
            <Text style={styles.listText}>Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.list}>
            <Icon type="MaterialIcons" name="account-box" />
            <Text style={styles.listText}>Accounts</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.list}>
            <Icon type="MaterialIcons" name="notifications" />
            <Text style={styles.listText}>Notifications</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.list}>
            <Icon type="MaterialIcons" name="info" />
            <Text style={styles.listText}>About CHATIN</Text>
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
  profileName: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  profileID: {
    fontSize: 14,
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
  listText: {
    fontWeight: 'bold',
    marginLeft: 16,
    fontSize: 18,
  },
  list: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 16,
  },
});
