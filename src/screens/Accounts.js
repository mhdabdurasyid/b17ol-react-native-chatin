import React from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import {Container, Content, Text} from 'native-base';
import {useDispatch, useSelector} from 'react-redux';

// import actions
import authAction from '../redux/actions/auth';
import profileAction from '../redux/actions/profile';

export default function Accounts({navigation}) {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.profile);

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
            <Text style={styles.text}>{profile.profileData.phone_number}</Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.padding, styles.hr]}>
          <TouchableOpacity onPress={changeEmail}>
            <Text>Email</Text>
            <Text style={styles.text}>
              {profile.profileData.email
                ? profile.profileData.email
                : 'Not set'}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.padding, styles.hr]}>
          <TouchableOpacity onPress={changePassword}>
            <Text>Password</Text>
            <Text style={styles.text}>Complete</Text>
          </TouchableOpacity>
        </View>
        {/* <View style={[styles.padding, styles.hr]}>
          <TouchableOpacity>
            <Text>Delete My Account</Text>
          </TouchableOpacity>
        </View> */}
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
