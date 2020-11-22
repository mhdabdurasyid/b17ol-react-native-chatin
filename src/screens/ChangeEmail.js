import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {Container, Content, Text, Button, Item, Input, Icon} from 'native-base';

export default function ChangeEmail() {
  const [email, setEmail] = useState('');

  return (
    <Container>
      <Content style={styles.padding}>
        <Item>
          <Input
            value={email}
            keyboardType={'number-pad'}
            onChangeText={(text) => setEmail(text)}
          />
          {email.length !== 0 && (
            <TouchableOpacity onPress={() => setEmail('')}>
              <Icon type="MaterialIcons" name="close" style={styles.iconSize} />
            </TouchableOpacity>
          )}
        </Item>
        <Text style={styles.text}>
          Register an email address to keep all your account data backed up. If
          you switch devices or phone numbers, you'll be able to restore your
          friends, groups, profile info, and more.
        </Text>
      </Content>
      <Button
        block
        style={styles.btnColor}
        disabled={email.length === 0 ? true : false}>
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
