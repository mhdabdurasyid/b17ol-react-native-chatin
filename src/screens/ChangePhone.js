import React, {useEffect, useState} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {Container, Content, Text, Button, Item, Input, Icon} from 'native-base';
import {useDispatch, useSelector} from 'react-redux';

// import actions
import profileAction from '../redux/actions/profile';

export default function ChangePhone({navigation}) {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.profile);
  const auth = useSelector((state) => state.auth);
  const [phone, setPhone] = useState('');

  function doChangePhone() {
    const form = new FormData();
    form.append('phoneNumber', phone);
    dispatch(profileAction.editProfile(form, auth.token));
  }

  useEffect(() => {
    if (profile.isEdit) {
      dispatch(profileAction.getProfile(auth.token));
      dispatch(profileAction.resetEdit());
      navigation.navigate('Accounts');
    }
  });

  return (
    <Container>
      <Content style={styles.padding}>
        <Item>
          <Input
            value={phone}
            keyboardType={'phone-pad'}
            onChangeText={(text) => setPhone(text)}
          />
          {phone.length !== 0 && (
            <TouchableOpacity onPress={() => setPhone('')}>
              <Icon type="MaterialIcons" name="close" style={styles.iconSize} />
            </TouchableOpacity>
          )}
        </Item>
        <Text style={styles.text}>
          By tapping Next, you agree to CHATIN Terms and Conditions of Use and
          Privacy Policy
        </Text>
      </Content>
      <Button
        block
        style={styles.btnColor}
        disabled={phone.length < 10 || phone.length > 12 ? true : false}
        onPress={doChangePhone}>
        <Text>next</Text>
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
  text: {
    fontSize: 14,
    color: 'gray',
    marginTop: 12,
  },
});
