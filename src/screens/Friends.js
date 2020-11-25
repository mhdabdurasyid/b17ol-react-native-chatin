import React, {useEffect, useState} from 'react';
import {
  Alert,
  FlatList,
  Modal,
  StyleSheet,
  View,
  TouchableOpacity,
} from 'react-native';
import {Container, Text, Icon, Item, Input, Thumbnail} from 'native-base';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {useDispatch, useSelector} from 'react-redux';
import {API_URL} from '@env';

// import actions
import friendAction from '../redux/actions/friend';
import messageAction from '../redux/actions/message';

import Avatar from '../assets/img/avatar.png';
import Contact from '../components/Contact';

export default function Friends({navigation}) {
  const dispatch = useDispatch();
  const friend = useSelector((state) => state.friend);
  const auth = useSelector((state) => state.auth);

  const [modalVisible, setModalVisible] = useState(false);
  const [image, setImage] = useState('');
  const [name, setName] = useState('');
  const [status, setStatus] = useState('');
  const [friendId, setFriendId] = useState('');

  const schema = Yup.object().shape({
    name: Yup.string().max(20),
  });

  useEffect(() => {
    dispatch(friendAction.getFriendList('', auth.token));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  function addFriend() {
    navigation.navigate('Add_Friend');
  }

  function searchFriend(values) {
    dispatch(friendAction.getFriendList(values.name, auth.token));
  }

  function setModalData(img, _name, _status, _friendId) {
    setModalVisible(true);
    setImage(img);
    setName(_name);
    setStatus(_status);
    setFriendId(_friendId);
  }

  function doChat(_friendId, friendName) {
    setModalVisible(false);
    dispatch(messageAction.clearDetail());
    dispatch(messageAction.getMessageDetail(_friendId, auth.token));
    navigation.navigate('Chat', {friendId: _friendId, friendName});
  }

  function deleteFriend(_friendId) {
    setModalVisible(false);
    dispatch(friendAction.deleteFriend(_friendId, auth.token));
  }

  useEffect(() => {
    if (friend.friendIsError) {
      Alert.alert("User isn't found!");
      dispatch(friendAction.resetMsg());
    }

    if (friend.isDelete) {
      dispatch(friendAction.resetMsg());
      dispatch(friendAction.getFriendList('', auth.token));
    }
  });

  return (
    <Container>
      <Formik
        initialValues={{
          name: '',
        }}
        validationSchema={schema}
        onSubmit={(values) => searchFriend(values)}>
        {({handleChange, handleBlur, handleSubmit, values, handleReset}) => (
          <View>
            <View style={[styles.padding, styles.header]}>
              <Text style={styles.headerText}>Friends</Text>
              <TouchableOpacity onPress={addFriend}>
                <Icon
                  type="MaterialIcons"
                  name="person-add"
                  style={styles.iconSize}
                />
              </TouchableOpacity>
            </View>
            <Item style={styles.padding}>
              <Icon type="MaterialIcons" name="search" />
              <Input
                placeholder="Search by name"
                onChangeText={handleChange('name')}
                onBlur={handleBlur('name')}
                value={values.name}
                onSubmitEditing={handleSubmit}
              />
              {values.name.length !== 0 && (
                <TouchableOpacity onPress={handleReset}>
                  <Icon
                    type="MaterialIcons"
                    name="close"
                    style={styles.iconSize}
                  />
                </TouchableOpacity>
              )}
            </Item>
          </View>
        )}
      </Formik>
      <Text style={[styles.friendCount, styles.padding]}>
        Friends {friend.friendData.length}
      </Text>
      <FlatList
        data={friend.friendData}
        renderItem={({item}) => (
          <TouchableOpacity
            style={styles.padding}
            onPress={() =>
              setModalData(
                item.contact.photo,
                item.contact.name,
                item.contact.status,
                item.friend,
              )
            }>
            <Contact item={item} />
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.friend}
      />

      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Thumbnail
              large
              source={image ? {uri: `${API_URL}${image}`} : Avatar}
            />
            <Text style={[styles.headerText, styles.name]}>{name}</Text>
            <Text style={styles.status}>{status}</Text>
            <View style={styles.modalFooter}>
              <TouchableOpacity
                style={styles.modalIcon}
                onPress={() => doChat(friendId, name)}>
                <Icon type="MaterialIcons" name="sms" style={styles.iconSize} />
                <Text style={styles.textStyle}>Chat</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.modalIcon}
                onPress={() => {
                  deleteFriend(friendId);
                }}>
                <Icon
                  type="MaterialIcons"
                  name="delete"
                  style={styles.iconSize}
                />
                <Text style={styles.textStyle}>Remove</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.modalIcon}
                onPress={() => {
                  setModalVisible(false);
                }}>
                <Icon
                  type="MaterialIcons"
                  name="close"
                  style={styles.iconSize}
                />
                <Text style={styles.textStyle}>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
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
  iconSize: {
    fontSize: 24,
  },
  friendCount: {
    marginTop: 10,
    marginBottom: 6,
    fontSize: 14,
    fontWeight: 'bold',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 4,
    paddingTop: 32,
    paddingBottom: 24,
    width: '80%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  textStyle: {
    fontSize: 12,
  },
  name: {
    marginTop: 20,
  },
  status: {
    fontSize: 14,
    marginBottom: 24,
  },
  modalFooter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  modalIcon: {
    paddingHorizontal: 32,
    alignItems: 'center',
  },
});
