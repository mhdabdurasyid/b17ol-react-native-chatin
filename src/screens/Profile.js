import React, {useEffect, useState} from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import {Container, Content, Text, Thumbnail} from 'native-base';
import ImagePicker from 'react-native-image-picker';
import {useDispatch, useSelector} from 'react-redux';
import {API_URL} from '@env';

// import actions
import profileAction from '../redux/actions/profile';

import Avatar from '../assets/img/avatar.png';

export default function Profile({navigation}) {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.profile);
  const auth = useSelector((state) => state.auth);
  const [photo, setPhoto] = useState(profile.profileData.photo);

  function selectImage() {
    let options = {
      maxWidth: 300,
      maxHeight: 300,
      mediaType: 'photo',
      noData: true,
      storageOptions: {
        skipBackup: true,
      },
    };

    ImagePicker.showImagePicker(options, (response) => {
      if (response.didCancel) {
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        const source = {
          uri: response.uri,
          name: response.fileName,
          type: response.type,
        };

        setPhoto(source.uri);
        const form = new FormData();
        form.append('image', source);
        dispatch(profileAction.editProfile(form, auth.token));
      }
    });
  }

  useEffect(() => {
    if (profile.isEdit) {
      dispatch(profileAction.getProfile(auth.token));
      dispatch(profileAction.resetEdit());
    }
  });

  function editName() {
    navigation.navigate('Edit_Name');
  }

  function editStatus() {
    navigation.navigate('Edit_Status');
  }

  function editUserID() {
    navigation.navigate('Edit_UserID');
  }

  return (
    <Container>
      <Content>
        <View style={styles.hr}>
          <View style={[styles.profile, styles.padding]}>
            <TouchableOpacity onPress={selectImage}>
              <Thumbnail
                large
                source={
                  photo
                    ? {
                        uri: photo.includes('upload')
                          ? `${API_URL}${photo}`
                          : photo,
                      }
                    : Avatar
                }
              />
            </TouchableOpacity>
            <View style={styles.profileDescription}>
              <Text>Phone Number</Text>
              <Text style={styles.phone}>
                {profile.profileData.phone_number}
              </Text>
            </View>
          </View>
        </View>
        <View style={[styles.padding, styles.hr]}>
          <TouchableOpacity onPress={editName}>
            <Text>Display Name</Text>
            <Text style={styles.text}>{profile.profileData.name}</Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.padding, styles.hr]}>
          <TouchableOpacity onPress={editStatus}>
            <Text>Status Message</Text>
            <Text style={styles.text}>
              {profile.profileData.status
                ? profile.profileData.status
                : 'Not set'}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.padding, styles.hr]}>
          <TouchableOpacity
            onPress={editUserID}
            disabled={profile.profileData.user_id ? true : false}>
            <Text>User ID</Text>
            <Text style={styles.text}>
              {profile.profileData.user_id
                ? profile.profileData.user_id
                : 'Not set'}
            </Text>
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
  phone: {
    fontSize: 20,
    fontWeight: 'bold',
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
  text: {
    color: '#6ab6e1',
    fontSize: 14,
  },
});
