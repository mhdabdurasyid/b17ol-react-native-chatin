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

// import actions
import friendAction from '../redux/actions/friend';

import Avatar from '../assets/img/avatar.png';

export default function StartChat({navigation}) {
  const dispatch = useDispatch();
  const friend = useSelector((state) => state.friend);
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(friendAction.getFriendList('', auth.token));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  const schema = Yup.object().shape({
    name: Yup.string().max(20),
  });

  function doChat() {
    navigation.navigate('Chat');
  }

  function searchFriend(values) {
    dispatch(friendAction.getFriendList(values.name, auth.token));
  }

  useEffect(() => {
    if (friend.friendIsError) {
      Alert.alert("User isn't found!");
      dispatch(friendAction.resetMsg());
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
              <Text style={styles.headerText}>Start Chat</Text>
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
      <FlatList
        data={friend.friendData}
        renderItem={({item}) => (
          <TouchableOpacity
            key={item.friend}
            onPress={doChat}
            style={styles.padding}>
            <View style={styles.contact}>
              <Thumbnail
                small
                source={
                  item.contact.photo
                    ? {uri: `${API_URL}${item.contact.photo}`}
                    : Avatar
                }
              />
              <Text style={styles.messageSender}>{item.contact.name}</Text>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item, index) => index}
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
  iconSize: {
    fontSize: 20,
  },
});
