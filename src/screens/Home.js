import React from 'react';
import {Image, StyleSheet, View, TouchableOpacity} from 'react-native';
import {Container, Content, Text, Icon, Fab, Thumbnail} from 'native-base';

import Logo from '../assets/img/logo.png';
import Avatar from '../assets/img/avatar.png';

export default function Home({navigation}) {
  function startChat() {
    navigation.navigate('Start_Chat');
  }

  function readMessage() {
    navigation.navigate('Chat');
  }

  function getFriends() {
    navigation.navigate('Friends');
  }

  return (
    <Container>
      <View style={[styles.padding, styles.appHeader]}>
        <View style={styles.brand}>
          <Image source={Logo} style={styles.logo} />
          <Text style={styles.brandText}>CHATIN</Text>
        </View>
        <View style={styles.icon}>
          <TouchableOpacity onPress={getFriends}>
            <Icon type="MaterialIcons" name="person" style={styles.iconSize} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon
              type="MaterialIcons"
              name="person-add"
              style={styles.iconSize}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon
              type="MaterialIcons"
              name="settings"
              style={styles.iconSize}
            />
          </TouchableOpacity>
        </View>
      </View>
      <Content style={styles.padding}>
        <View style={styles.chatCard}>
          <Thumbnail source={Avatar} />
          <TouchableOpacity style={styles.message} onPress={readMessage}>
            <Text style={styles.messageSender}>Jeanne</Text>
            <Text
              numberOfLines={1}
              ellipsizeMode="tail"
              style={styles.messageContent}>
              Lorem ipsum dolor dolorLorem ipsum dolor dolorLorem ipsum dolor
              dolorLorem ipsum dolor dolorLorem ipsum dolor dolorLorem ipsum
              dolor dolorLorem ipsum dolor dolorLorem ipsum dolor dolorLorem
              ipsum dolor dolorLorem ipsum dolor dolor
            </Text>
            <Text style={styles.messageContent}>19.00</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.chatCard}>
          <Thumbnail source={Avatar} />
          <View style={styles.message}>
            <Text style={styles.messageSender}>Jeanne</Text>
            <Text
              numberOfLines={1}
              ellipsizeMode="tail"
              style={styles.messageContent}>
              Lorem ipsum dolor dolorLorem ipsum dolor dolorLorem ipsum dolor
              dolorLorem ipsum dolor dolorLorem ipsum dolor dolorLorem ipsum
              dolor dolorLorem ipsum dolor dolorLorem ipsum dolor dolorLorem
              ipsum dolor dolorLorem ipsum dolor dolor
            </Text>
            <Text style={styles.messageContent}>19.00</Text>
          </View>
        </View>
        <View style={styles.chatCard}>
          <Thumbnail source={Avatar} />
          <View style={styles.message}>
            <Text style={styles.messageSender}>Jeanne</Text>
            <Text
              numberOfLines={1}
              ellipsizeMode="tail"
              style={styles.messageContent}>
              Lorem ipsum dolor dolorLorem ipsum dolor dolorLorem ipsum dolor
              dolorLorem ipsum dolor dolorLorem ipsum dolor dolorLorem ipsum
              dolor dolorLorem ipsum dolor dolorLorem ipsum dolor dolorLorem
              ipsum dolor dolorLorem ipsum dolor dolor
            </Text>
            <Text style={styles.messageContent}>19.00</Text>
          </View>
        </View>
        <View style={styles.chatCard}>
          <Thumbnail source={Avatar} />
          <View style={styles.message}>
            <Text style={styles.messageSender}>Jeanne</Text>
            <Text
              numberOfLines={1}
              ellipsizeMode="tail"
              style={styles.messageContent}>
              Lorem ipsum dolor dolorLorem ipsum dolor dolorLorem ipsum dolor
              dolorLorem ipsum dolor dolorLorem ipsum dolor dolorLorem ipsum
              dolor dolorLorem ipsum dolor dolorLorem ipsum dolor dolorLorem
              ipsum dolor dolorLorem ipsum dolor dolor
            </Text>
            <Text style={styles.messageContent}>19.00</Text>
          </View>
        </View>
        <View style={styles.chatCard}>
          <Thumbnail source={Avatar} />
          <View style={styles.message}>
            <Text style={styles.messageSender}>Jeanne</Text>
            <Text
              numberOfLines={1}
              ellipsizeMode="tail"
              style={styles.messageContent}>
              Lorem ipsum dolor dolorLorem ipsum dolor dolorLorem ipsum dolor
              dolorLorem ipsum dolor dolorLorem ipsum dolor dolorLorem ipsum
              dolor dolorLorem ipsum dolor dolorLorem ipsum dolor dolorLorem
              ipsum dolor dolorLorem ipsum dolor dolor
            </Text>
            <Text style={styles.messageContent}>19.00</Text>
          </View>
        </View>
        <View style={styles.chatCard}>
          <Thumbnail source={Avatar} />
          <View style={styles.message}>
            <Text style={styles.messageSender}>Jeanne</Text>
            <Text
              numberOfLines={1}
              ellipsizeMode="tail"
              style={styles.messageContent}>
              Lorem ipsum dolor dolorLorem ipsum dolor dolorLorem ipsum dolor
              dolorLorem ipsum dolor dolorLorem ipsum dolor dolorLorem ipsum
              dolor dolorLorem ipsum dolor dolorLorem ipsum dolor dolorLorem
              ipsum dolor dolorLorem ipsum dolor dolor
            </Text>
            <Text style={styles.messageContent}>19.00</Text>
          </View>
        </View>
        <View style={styles.chatCard}>
          <Thumbnail source={Avatar} />
          <View style={styles.message}>
            <Text style={styles.messageSender}>Jeanne</Text>
            <Text
              numberOfLines={1}
              ellipsizeMode="tail"
              style={styles.messageContent}>
              Lorem ipsum dolor dolorLorem ipsum dolor dolorLorem ipsum dolor
              dolorLorem ipsum dolor dolorLorem ipsum dolor dolorLorem ipsum
              dolor dolorLorem ipsum dolor dolorLorem ipsum dolor dolorLorem
              ipsum dolor dolorLorem ipsum dolor dolor
            </Text>
            <Text style={styles.messageContent}>19.00</Text>
          </View>
        </View>
        <View style={styles.chatCard}>
          <Thumbnail source={Avatar} />
          <View style={styles.message}>
            <Text style={styles.messageSender}>Jeanne</Text>
            <Text
              numberOfLines={1}
              ellipsizeMode="tail"
              style={styles.messageContent}>
              Lorem ipsum dolor dolorLorem ipsum dolor dolorLorem ipsum dolor
              dolorLorem ipsum dolor dolorLorem ipsum dolor dolorLorem ipsum
              dolor dolorLorem ipsum dolor dolorLorem ipsum dolor dolorLorem
              ipsum dolor dolorLorem ipsum dolor dolor
            </Text>
            <Text style={styles.messageContent}>19.00</Text>
          </View>
        </View>
        <View style={styles.chatCard}>
          <Thumbnail source={Avatar} />
          <View style={styles.message}>
            <Text style={styles.messageSender}>Jeanne</Text>
            <Text
              numberOfLines={1}
              ellipsizeMode="tail"
              style={styles.messageContent}>
              Lorem ipsum dolor dolorLorem ipsum dolor dolorLorem ipsum dolor
              dolorLorem ipsum dolor dolorLorem ipsum dolor dolorLorem ipsum
              dolor dolorLorem ipsum dolor dolorLorem ipsum dolor dolorLorem
              ipsum dolor dolorLorem ipsum dolor dolor
            </Text>
            <Text style={styles.messageContent}>19.00</Text>
          </View>
        </View>
        <View style={styles.chatCard}>
          <Thumbnail source={Avatar} />
          <View style={styles.message}>
            <Text style={styles.messageSender}>Jeanne</Text>
            <Text
              numberOfLines={1}
              ellipsizeMode="tail"
              style={styles.messageContent}>
              Lorem ipsum dolor dolorLorem ipsum dolor dolorLorem ipsum dolor
              dolorLorem ipsum dolor dolorLorem ipsum dolor dolorLorem ipsum
              dolor dolorLorem ipsum dolor dolorLorem ipsum dolor dolorLorem
              ipsum dolor dolorLorem ipsum dolor dolor
            </Text>
            <Text style={styles.messageContent}>19.00</Text>
          </View>
        </View>
        <View style={styles.chatCard}>
          <Thumbnail source={Avatar} />
          <View style={styles.message}>
            <Text style={styles.messageSender}>Jeanne</Text>
            <Text
              numberOfLines={1}
              ellipsizeMode="tail"
              style={styles.messageContent}>
              Lorem ipsum dolor dolorLorem ipsum dolor dolorLorem ipsum dolor
              dolorLorem ipsum dolor dolorLorem ipsum dolor dolorLorem ipsum
              dolor dolorLorem ipsum dolor dolorLorem ipsum dolor dolorLorem
              ipsum dolor dolorLorem ipsum dolor dolor
            </Text>
            <Text style={styles.messageContent}>19.00</Text>
          </View>
        </View>
        <View style={styles.chatCard}>
          <Thumbnail source={Avatar} />
          <View style={styles.message}>
            <Text style={styles.messageSender}>Jeanne</Text>
            <Text
              numberOfLines={1}
              ellipsizeMode="tail"
              style={styles.messageContent}>
              Lorem ipsum dolor dolorLorem ipsum dolor dolorLorem ipsum dolor
              dolorLorem ipsum dolor dolorLorem ipsum dolor dolorLorem ipsum
              dolor dolorLorem ipsum dolor dolorLorem ipsum dolor dolorLorem
              ipsum dolor dolorLorem ipsum dolor dolor
            </Text>
            <Text style={styles.messageContent}>19.00</Text>
          </View>
        </View>
        <View style={styles.chatCard}>
          <Thumbnail source={Avatar} />
          <View style={styles.message}>
            <Text style={styles.messageSender}>Jeanne</Text>
            <Text
              numberOfLines={1}
              ellipsizeMode="tail"
              style={styles.messageContent}>
              Lorem ipsum dolor dolorLorem ipsum dolor dolorLorem ipsum dolor
              dolorLorem ipsum dolor dolorLorem ipsum dolor dolorLorem ipsum
              dolor dolorLorem ipsum dolor dolorLorem ipsum dolor dolorLorem
              ipsum dolor dolorLorem ipsum dolor dolor
            </Text>
            <Text style={styles.messageContent}>19.00</Text>
          </View>
        </View>
      </Content>
      <View>
        <Fab
          containerStyle={{}}
          style={styles.fabColor}
          position="bottomRight"
          onPress={startChat}>
          <Icon type="MaterialIcons" name="add" />
        </Fab>
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  padding: {
    paddingHorizontal: 20,
  },
  logo: {
    width: 35,
    height: 35,
  },
  brand: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '60%',
  },
  brandText: {
    fontWeight: 'bold',
    marginLeft: 4,
    color: '#6ab6e1',
    fontSize: 18,
  },
  icon: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '40%',
  },
  appHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 16,
  },
  iconSize: {
    fontSize: 24,
  },
  fabColor: {
    backgroundColor: '#6ab6e1',
  },
  chatCard: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  message: {
    marginLeft: 12,
    width: '75%',
  },
  messageSender: {
    fontWeight: 'bold',
  },
  messageContent: {
    fontSize: 12,
  },
});
