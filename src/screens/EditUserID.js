import React, {useEffect, useState} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {Container, Content, Text, Button, Item, Input, Icon} from 'native-base';
import {useDispatch, useSelector} from 'react-redux';

// import actions
import profileAction from '../redux/actions/profile';

export default function EditUserID({navigation}) {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.profile);
  const auth = useSelector((state) => state.auth);
  const [userID, setUserID] = useState('');

  function doEditUserID() {
    const form = new FormData();
    form.append('userId', userID);
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
          <Input value={userID} onChangeText={(text) => setUserID(text)} />
          {userID.length !== 0 && (
            <TouchableOpacity onPress={() => setUserID('')}>
              <Icon type="MaterialIcons" name="close" style={styles.iconSize} />
            </TouchableOpacity>
          )}
        </Item>
        <Text style={styles.textLength}>{userID.length}/20</Text>
        <Text style={[styles.textLength, styles.marginTop]}>
          Set your CHATIN ID.
        </Text>
        <Text style={styles.textLength}>
          Once your ID is set, it cannot be changed
        </Text>
      </Content>
      <Button
        block
        style={styles.btnColor}
        disabled={userID.length === 0 || userID.length > 20 ? true : false}
        onPress={doEditUserID}>
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
  marginTop: {
    marginTop: 16,
  },
});
