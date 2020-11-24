import React, {useEffect} from 'react';
import {
  Alert,
  FlatList,
  StyleSheet,
  View,
  TouchableOpacity,
} from 'react-native';
import {Container, Text, Icon, Thumbnail, Item, Input} from 'native-base';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {useDispatch, useSelector} from 'react-redux';
import {API_URL} from '@env';
import jwt_decode from 'jwt-decode';

// import actions
import friendAction from '../redux/actions/friend';

import Avatar from '../assets/img/avatar.png';

export default function AddFriend() {
  const dispatch = useDispatch();
  const friend = useSelector((state) => state.friend);
  const auth = useSelector((state) => state.auth);
  const {id} = jwt_decode(auth.token);

  const schema = Yup.object().shape({
    userId: Yup.string().max(20).required(),
  });

  function searchUser(data) {
    dispatch(friendAction.searchUser(data, auth.token));
  }

  function addFriend(friendId) {
    if (friendId !== id) {
      dispatch(friendAction.addFriend({friendId}, auth.token));
    }
  }

  useEffect(() => {
    if (friend.searchIsError) {
      Alert.alert(friend.searchAlert);
      dispatch(friendAction.resetMsg());
    }

    if (friend.addIsError || friend.isAdd) {
      Alert.alert(friend.addAlert);
      dispatch(friendAction.resetMsg());
    }
  });

  return (
    <Container>
      <Formik
        initialValues={{
          userId: '',
        }}
        validationSchema={schema}
        onSubmit={(values) => searchUser(values)}>
        {({handleChange, handleBlur, handleSubmit, values, handleReset}) => (
          <View>
            <View style={[styles.padding, styles.header]}>
              <Text style={styles.headerText}>Add Friends</Text>
              <TouchableOpacity>
                <Icon
                  type="MaterialIcons"
                  name="share"
                  style={styles.iconSize}
                />
              </TouchableOpacity>
            </View>
            <Item style={styles.padding}>
              <Icon type="MaterialIcons" name="search" />
              <Input
                placeholder="Enter your friend's ID"
                onChangeText={handleChange('userId')}
                onBlur={handleBlur('userId')}
                value={values.userId}
                onSubmitEditing={handleSubmit}
              />
              {values.userId.length !== 0 && (
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
      <FlatList
        data={friend.searchData}
        renderItem={({item}) => (
          <View style={[styles.contact, styles.padding]}>
            <Thumbnail
              small
              source={item.photo ? {uri: `${API_URL}${item.photo}`} : Avatar}
            />
            <View style={styles.addFriend}>
              <Text style={styles.contactName}>{item.name}</Text>
              <TouchableOpacity onPress={() => addFriend(item.id)}>
                <Icon
                  type="MaterialIcons"
                  name="person-add"
                  style={styles.iconSize}
                />
              </TouchableOpacity>
            </View>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
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
