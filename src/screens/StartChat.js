import React from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import {
  Container,
  Content,
  Text,
  Icon,
  Thumbnail,
  Item,
  Input,
} from 'native-base';

import Avatar from '../assets/img/avatar.png';

export default function StartChat({navigation}) {
  function doChat() {
    navigation.navigate('Chat');
  }

  return (
    <Container>
      <View>
        <View style={[styles.padding, styles.header]}>
          <Text style={styles.headerText}>Start Chat</Text>
        </View>
        <Item style={styles.padding}>
          <Icon type="MaterialIcons" name="search" />
          <Input placeholder="Search by name" />
        </Item>
      </View>
      <Content style={styles.padding}>
        <TouchableOpacity onPress={doChat}>
          <View style={styles.contact}>
            <Thumbnail small source={Avatar} />
            <Text style={styles.messageSender}>Jeanne</Text>
          </View>
        </TouchableOpacity>
      </Content>
    </Container>
  );
}

const styles = StyleSheet.create({
  padding: {
    paddingHorizontal: 20,
  },
  header: {
    paddingTop: 10,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
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
