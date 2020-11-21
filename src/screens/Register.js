import React, {useState} from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import {
  Container,
  Content,
  Fab,
  Text,
  Item,
  Input,
  Icon,
  Thumbnail,
} from 'native-base';
import ImagePicker from 'react-native-image-picker';

import Avatar from '../assets/img/avatar.png';

export default function Register() {
  const [photo, setPhoto] = useState('');
  const [imgData, setImgData] = useState(null);

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
        setImgData(source);
        setPhoto(source.uri);
      }
    });
  }

  return (
    <Container>
      <Content style={styles.padding}>
        <Text style={styles.header}>Create a new account</Text>
        <Text>
          Other people on CHATIN can see your display name and profile media
        </Text>
        <TouchableOpacity onPress={selectImage}>
          <Thumbnail
            source={photo !== '' ? {uri: photo} : Avatar}
            style={styles.avatar}
          />
        </TouchableOpacity>
        <Item>
          <Input placeholder="What's your name?" />
        </Item>
      </Content>
      <View>
        <Fab containerStyle={{}} style={styles.fabColor} position="bottomRight">
          <Icon type="FontAwesome5" name="arrow-right" />
        </Fab>
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  padding: {
    paddingHorizontal: 24,
    paddingTop: 40,
    paddingBottom: 24,
  },
  header: {
    fontWeight: 'bold',
    fontSize: 28,
    marginBottom: 20,
  },
  btnColor: {
    backgroundColor: '#6ab6e1',
  },
  error: {
    fontSize: 12,
    color: 'red',
  },
  iconSize: {
    fontSize: 20,
  },
  avatar: {
    marginTop: 24,
    marginBottom: 16,
  },
  fabColor: {
    backgroundColor: '#6ab6e1',
  },
});
