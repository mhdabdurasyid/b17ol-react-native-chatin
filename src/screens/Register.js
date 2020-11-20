import React from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import {
  Container,
  Content,
  Fab,
  Text,
  Item,
  Input,
  Icon,
  Thumbnail,
} from 'native-base';

import Avatar from '../assets/img/avatar.png';

export default function Register() {
  return (
    <Container>
      <Content style={styles.padding}>
        <Text style={styles.header}>Create a new account</Text>
        <Text>
          Other people on CHATIN can see your display name and profile media
        </Text>
        <TouchableOpacity>
          <Thumbnail source={Avatar} style={styles.avatar} />
        </TouchableOpacity>
        <Item>
          <Input placeholder="What's your name?" />
        </Item>
      </Content>
      <View>
        <Fab containerStyle={{}} style={styles.fabColor} position="bottomRight">
          <Icon type="FontAwesome5" name="arrow-right" />
        </Fab>
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  padding: {
    paddingHorizontal: 24,
    paddingTop: 40,
    paddingBottom: 24,
  },
  header: {
    fontWeight: 'bold',
    fontSize: 28,
    marginBottom: 20,
  },
  btnColor: {
    backgroundColor: '#6ab6e1',
  },
  error: {
    fontSize: 12,
    color: 'red',
  },
  iconSize: {
    fontSize: 20,
  },
  avatar: {
    marginTop: 24,
    marginBottom: 16,
  },
  fabColor: {
    backgroundColor: '#6ab6e1',
  },
});
