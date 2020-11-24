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
import {Formik} from 'formik';
import * as Yup from 'yup';

import Avatar from '../assets/img/avatar.png';

export default function Register({route, navigation}) {
  const [photo, setPhoto] = useState('');
  const [imgData, setImgData] = useState(null);
  const {phoneNumber} = route.params;

  const schema = Yup.object().shape({
    name: Yup.string().max(20, 'Max 20 characters').required('Required field'),
  });

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

  function createPassword(values) {
    navigation.navigate('Create_Password', {
      phoneNumber,
      name: values.name,
      image: imgData,
    });
  }

  return (
    <Formik
      initialValues={{
        name: '',
      }}
      validationSchema={schema}
      onSubmit={(values) => createPassword(values)}>
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        touched,
        errors,
        handleReset,
      }) => (
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
              <Input
                placeholder="What's your name?"
                onChangeText={handleChange('name')}
                onBlur={handleBlur('name')}
                value={values.name}
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
            {touched.name && errors.name && (
              <Text style={styles.error}>{errors.name}</Text>
            )}
          </Content>
          <View>
            <Fab
              containerStyle={{}}
              style={styles.fabColor}
              position="bottomRight"
              onPress={handleSubmit}>
              <Icon type="FontAwesome5" name="arrow-right" />
            </Fab>
          </View>
        </Container>
      )}
    </Formik>
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
