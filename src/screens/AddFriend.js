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

export default function AddFriend() {
  return (
    <Container>
      <View>
        <View style={[styles.padding, styles.header]}>
          <Text style={styles.headerText}>Add Friends</Text>
          <TouchableOpacity>
            <Icon type="MaterialIcons" name="share" style={styles.iconSize} />
          </TouchableOpacity>
        </View>
        <Item style={styles.padding}>
          <Icon type="MaterialIcons" name="search" />
          <Input placeholder="Enter your friend's ID" />
        </Item>
      </View>
      <Content style={styles.padding}>
        <View style={styles.contact}>
          <Thumbnail small source={Avatar} />
          <View style={styles.addFriend}>
            <Text style={styles.contactName}>Eleven Christine</Text>
            <TouchableOpacity>
              <Icon
                type="MaterialIcons"
                name="person-add"
                style={styles.iconSize}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.contact}>
          <Thumbnail small source={Avatar} />
          <View style={styles.addFriend}>
            <Text style={styles.contactName}>John Hopkins</Text>
            <TouchableOpacity>
              <Icon
                type="MaterialIcons"
                name="person-add"
                style={styles.iconSize}
              />
            </TouchableOpacity>
          </View>
        </View>
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
  },
  iconSize: {
    fontSize: 24,
  },
  addFriend: {
    marginLeft: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
  },
});
