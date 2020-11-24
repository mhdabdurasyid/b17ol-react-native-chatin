import React from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import {Container, Content, Text} from 'native-base';
import {useDispatch} from 'react-redux';

// import actions
import authAction from '../redux/actions/auth';
import profileAction from '../redux/actions/profile';

export default function Accounts({navigation}) {
  const dispatch = useDispatch();

  function changePhone() {
    navigation.navigate('Change_Phone');
  }

  function changeEmail() {
    navigation.navigate('Change_Email');
  }

  function changePassword() {
    navigation.navigate('Change_Password');
  }

  function logout() {
    dispatch(authAction.logout());
    dispatch(profileAction.destroy());
  }

  return (
    <Container>
      <Content>
        <View style={[styles.padding, styles.hr]}>
          <TouchableOpacity onPress={changePhone}>
            <Text>Phone Number</Text>
            <Text style={styles.text}>+62 856-4961-7528</Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.padding, styles.hr]}>
          <TouchableOpacity onPress={changeEmail}>
            <Text>Email</Text>
            <Text style={styles.text}>johnhopkinss@mail.com</Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.padding, styles.hr]}>
          <TouchableOpacity onPress={changePassword}>
            <Text>Password</Text>
            <Text style={styles.text}>Complete</Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.padding, styles.hr]}>
          <TouchableOpacity>
            <Text>Delete My Account</Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.padding, styles.hr]}>
          <TouchableOpacity onPress={logout}>
            <Text>Logout</Text>
          </TouchableOpacity>
        </View>
      </Content>
    </Container>
  );
}

const styles = StyleSheet.create({
  padding: {
    paddingHorizontal: 20,
    paddingVertical: 24,
  },
  hr: {
    borderBottomColor: 'gray',
    borderBottomWidth: 0.3,
  },
  text: {
    color: '#6ab6e1',
    fontSize: 14,
  },
});
