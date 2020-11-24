import React, {useEffect, useState} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {Container, Content, Text, Button, Item, Input, Icon} from 'native-base';
import {useDispatch, useSelector} from 'react-redux';

// import actions
import profileAction from '../redux/actions/profile';

export default function Status({navigation}) {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.profile);
  const auth = useSelector((state) => state.auth);
  const [status, setStatus] = useState(
    profile.profileData.status ? profile.profileData.status : '',
  );

  function doEditStatus() {
    const form = new FormData();
    form.append('status', status);
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
          <Input value={status} onChangeText={(text) => setStatus(text)} />
          {status.length !== 0 && (
            <TouchableOpacity onPress={() => setStatus('')}>
              <Icon type="MaterialIcons" name="close" style={styles.iconSize} />
            </TouchableOpacity>
          )}
        </Item>
        <Text style={styles.textLength}>{status.length}/500</Text>
      </Content>
      <Button
        block
        style={styles.btnColor}
        disabled={status.length === 0 || status.length > 500 ? true : false}
        onPress={doEditStatus}>
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
