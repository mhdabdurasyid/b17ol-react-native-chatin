import React, {useEffect, useState} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {Container, Content, Text, Button, Item, Input, Icon} from 'native-base';
import {useDispatch, useSelector} from 'react-redux';

// import actions
import profileAction from '../redux/actions/profile';

export default function EditName({navigation}) {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.profile);
  const auth = useSelector((state) => state.auth);
  const [name, setName] = useState(profile.profileData.name);

  function doEditName() {
    const form = new FormData();
    form.append('name', name);
    dispatch(profileAction.editProfile(form, auth.token));
  }

  useEffect(() => {
    if (profile.isEdit) {
      dispatch(profileAction.getProfile(auth.token));
      dispatch(profileAction.resetEdit());
      navigation.navigate('Profile');
    }
  });

  return (
    <Container>
      <Content style={styles.padding}>
        <Item>
          <Input value={name} onChangeText={(text) => setName(text)} />
          {name.length !== 0 && (
            <TouchableOpacity onPress={() => setName('')}>
              <Icon type="MaterialIcons" name="close" style={styles.iconSize} />
            </TouchableOpacity>
          )}
        </Item>
        <Text style={styles.textLength}>{name.length}/20</Text>
      </Content>
      <Button
        block
        style={styles.btnColor}
        disabled={name.length === 0 || name.length > 20 ? true : false}
        onPress={doEditName}>
        <Text>ok</Text>
      </Button>
    </Container>
  );
}

const styles = StyleSheet.create({
  padding: {
    paddingHorizontal: 30,
    paddingTop: 40,
    paddingBottom: 24,
  },
  btnColor: {
    backgroundColor: '#6ab6e1',
  },
  iconSize: {
    fontSize: 20,
  },
  textLength: {
    fontSize: 14,
    color: 'gray',
  },
});
