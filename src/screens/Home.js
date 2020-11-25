import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  View,
  TouchableOpacity,
} from 'react-native';
import {Container, Text, Icon, Fab, Thumbnail} from 'native-base';
import {useDispatch, useSelector} from 'react-redux';
import dayjs from 'dayjs';
import jwt_decode from 'jwt-decode';
import {API_URL} from '@env';

// import actions
import messageAction from '../redux/actions/message';

import Logo from '../assets/img/logo.png';
import Avatar from '../assets/img/avatar.png';

export default function Home({navigation}) {
  const dispatch = useDispatch();
  const message = useSelector((state) => state.message);
  const auth = useSelector((state) => state.auth);
  const {id} = jwt_decode(auth.token);

  useEffect(() => {
    dispatch(messageAction.getMessageList(auth.token));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  function startChat() {
    navigation.navigate('Start_Chat');
  }

  function readMessage(friendId, friendName) {
    dispatch(messageAction.clearDetail());
    dispatch(messageAction.getMessageDetail(friendId, auth.token));
    navigation.navigate('Chat', {friendId, friendName});
  }

  function getFriends() {
    navigation.navigate('Friends');
  }

  function addFriend() {
    navigation.navigate('Add_Friend');
  }

  function goToSettings() {
    navigation.navigate('Settings');
  }

  function loadMore() {
    const nextPage = message.messagePageInfo.currentPage + 1;
    if (message.messagePageInfo.nextLink) {
      dispatch(messageAction.getMessageList(auth.token, nextPage));
    }
  }

  const [data, setData] = useState([]);

  useEffect(() => {
    if (message.messageData) {
      if (message.messagePageInfo.currentPage === 1) {
        setData(message.messageData);
      } else {
        const newData = data.concat(message.messageData);
        setData(newData);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [message.messageData]);

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
          <TouchableOpacity onPress={addFriend}>
            <Icon
              type="MaterialIcons"
              name="person-add"
              style={styles.iconSize}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={goToSettings}>
            <Icon
              type="MaterialIcons"
              name="settings"
              style={styles.iconSize}
            />
          </TouchableOpacity>
        </View>
      </View>
      <FlatList
        data={data}
        renderItem={({item}) => (
          <View style={[styles.chatCard, styles.padding]}>
            <Thumbnail
              source={
                item.sender_id !== id
                  ? item.sender_photo
                    ? {uri: `${API_URL}${item.sender_photo}`}
                    : Avatar
                  : item.receiver_photo
                  ? {uri: `${API_URL}${item.receiver_photo}`}
                  : Avatar
              }
            />
            <TouchableOpacity
              style={styles.message}
              onPress={
                item.sender_id !== id
                  ? () => readMessage(item.sender_id, item.sender_name)
                  : () => readMessage(item.receiver_id, item.receiver_name)
              }>
              <Text style={styles.messageSender}>
                {item.sender_id !== id ? item.sender_name : item.receiver_name}
              </Text>
              <Text
                numberOfLines={1}
                ellipsizeMode="tail"
                style={styles.messageContent}>
                {item.message}
              </Text>
              <Text style={styles.timeContent}>
                {dayjs(item.createdAt).format('hh:mm A DD/MM/YY')}
              </Text>
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={(item) => item.id}
        onEndReached={loadMore}
        onEndReachedThreshold={0.5}
      />
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
    fontSize: 14,
  },
  timeContent: {
    fontSize: 11,
  },
});
