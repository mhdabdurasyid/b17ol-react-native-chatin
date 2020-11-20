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

export default function Friends() {
  return (
    <Container>
      <View>
        <View style={[styles.padding, styles.header]}>
          <Text style={styles.headerText}>Friends</Text>
          <TouchableOpacity>
            <Icon
              type="MaterialIcons"
              name="person-add"
              style={styles.iconSize}
            />
          </TouchableOpacity>
        </View>
        <Item style={styles.padding}>
          <Icon type="MaterialIcons" name="search" />
          <Input placeholder="Search by name" />
        </Item>
      </View>
      <Content style={styles.padding}>
        <Text style={styles.friendCount}>Friends 3</Text>
        <TouchableOpacity style={styles.contact}>
          <Thumbnail small source={Avatar} />
          <Text style={styles.contactName}>Jeanne</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.contact}>
          <Thumbnail small source={Avatar} />
          <Text style={styles.contactName}>Jeanne</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.contact}>
          <Thumbnail small source={Avatar} />
          <Text style={styles.contactName}>Jeanne</Text>
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
  contactName: {
    fontWeight: 'bold',
    marginLeft: 12,
  },
  iconSize: {
    fontSize: 24,
  },
  friendCount: {
    marginTop: 10,
    marginBottom: 6,
    fontSize: 14,
    fontWeight: 'bold',
  },
});
