import React, {useEffect} from 'react';
import {FlatList, StyleSheet, View, TouchableOpacity} from 'react-native';
import {Container, Text, Icon, Item, Input} from 'native-base';
import {useDispatch, useSelector} from 'react-redux';
import dayjs from 'dayjs';
import jwt_decode from 'jwt-decode';
import {Formik} from 'formik';
import * as Yup from 'yup';

// import actions
import messageAction from '../redux/actions/message';

export default function Chat({route}) {
  const dispatch = useDispatch();
  const message = useSelector((state) => state.message);
  const auth = useSelector((state) => state.auth);
  const {id} = jwt_decode(auth.token);
  const {friendId, friendName} = route.params;

  const schema = Yup.object().shape({
    message: Yup.string().trim().max(1000).required(),
  });

  function sendMessage(values) {
    const data = {
      message: values.message,
      receiverId: friendId,
    };
    dispatch(messageAction.sendMessage(data, auth.token));
  }

  useEffect(() => {
    if (message.isSend) {
      dispatch(messageAction.getMessageDetail(friendId, auth.token));
      dispatch(messageAction.getMessageList(auth.token));
      dispatch(messageAction.resetSend());
    }
  });

  return (
    <Container>
      <View style={[styles.padding, styles.header]}>
        <Text style={styles.headerText}>{friendName}</Text>
      </View>
      <FlatList
        inverted
        data={message.msgDetailData.message}
        renderItem={({item}) => (
          <View style={[styles.padding, item.sender_id === id && styles.right]}>
            <View
              style={[
                styles.balloon,
                item.sender_id === id
                  ? styles.balloonRight
                  : styles.balloonLeft,
              ]}>
              <Text style={[styles.message, styles.messageWidth]}>
                {item.message}
              </Text>
              <Text style={styles.time}>
                {dayjs(item.createdAt).format('hh:mm A')}
              </Text>
            </View>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
      <View style={styles.sendMsg}>
        <Formik
          initialValues={{
            message: '',
          }}
          validationSchema={schema}
          onSubmit={(values, {resetForm}) => {
            sendMessage(values);
            resetForm({values: ''});
          }}>
          {({handleChange, handleBlur, handleSubmit, values}) => (
            <Item style={styles.padding}>
              <Input
                multiline
                style={styles.message}
                onChangeText={handleChange('message')}
                onBlur={handleBlur('message')}
                value={values.message}
              />
              <TouchableOpacity onPress={handleSubmit}>
                <Icon
                  type="MaterialIcons"
                  name="send"
                  style={styles.iconColor}
                />
              </TouchableOpacity>
            </Item>
          )}
        </Formik>
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  padding: {
    paddingHorizontal: 20,
  },
  iconColor: {
    color: '#6ab6e1',
  },
  sendMsg: {
    borderTopColor: 'gray',
    borderTopWidth: 0.3,
  },
  header: {
    paddingVertical: 10,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  message: {
    fontSize: 14,
  },
  date: {
    marginTop: 8,
    marginBottom: 4,
  },
  time: {
    fontSize: 10,
    textAlign: 'right',
  },
  messageWidth: {
    width: '80%',
  },
  balloon: {
    marginVertical: 4,
    padding: 8,
    borderRadius: 10,
    width: '75%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  balloonLeft: {
    backgroundColor: '#dadedf',
  },
  balloonRight: {
    backgroundColor: '#6ab6e1',
  },
  right: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
});
