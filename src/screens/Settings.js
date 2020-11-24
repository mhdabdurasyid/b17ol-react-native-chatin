import React, {useEffect} from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import {Container, Content, Text, Icon, Thumbnail} from 'native-base';
import {useDispatch, useSelector} from 'react-redux';
import {API_URL} from '@env';

// import actions
import profileAction from '../redux/actions/profile';

import Avatar from '../assets/img/avatar.png';

export default function Settings({navigation}) {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const profile = useSelector((state) => state.profile);

  useEffect(() => {
    dispatch(profileAction.getProfile(auth.token));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  function goToProfile() {
    navigation.navigate('Profile');
  }

  function goToAccounts() {
    navigation.navigate('Accounts');
  }

  return (
    <Container>
      {profile.profileData && (
        <Content>
          <View style={styles.hr}>
            <View style={[styles.profile, styles.padding]}>
              <Thumbnail
                large
                source={
                  profile.profileData.photo
                    ? {uri: `${API_URL}${profile.profileData.photo}`}
                    : Avatar
                }
              />
              <View style={styles.profileDescription}>
                <Text style={styles.profileName}>
                  {profile.profileData.name}
                </Text>
                <Text style={styles.profileID}>
                  User ID:{' '}
                  {profile.profileData.user_id
                    ? profile.profileData.user_id
                    : 'Not set'}
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.padding}>
            <TouchableOpacity style={styles.list} onPress={goToProfile}>
              <Icon type="MaterialIcons" name="person" />
              <Text style={styles.listText}>Profile</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.list} onPress={goToAccounts}>
              <Icon type="MaterialIcons" name="account-box" />
              <Text style={styles.listText}>Accounts</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.list}>
              <Icon type="MaterialIcons" name="notifications" />
              <Text style={styles.listText}>Notifications</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.list}>
              <Icon type="MaterialIcons" name="info" />
              <Text style={styles.listText}>About CHATIN</Text>
            </TouchableOpacity>
          </View>
        </Content>
      )}
    </Container>
  );
}

const styles = StyleSheet.create({
  padding: {
    paddingHorizontal: 20,
    paddingVertical: 24,
  },
  profileName: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  profileID: {
    fontSize: 14,
  },
  profile: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileDescription: {
    marginLeft: 12,
  },
  hr: {
    borderBottomColor: 'gray',
    borderBottomWidth: 0.3,
  },
  listText: {
    fontWeight: 'bold',
    marginLeft: 16,
    fontSize: 18,
  },
  list: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 16,
  },
});
