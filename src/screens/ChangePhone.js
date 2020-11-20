import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {Container, Content, Text, Button, Item, Input, Icon} from 'native-base';

export default function ChangePhone() {
  const [phone, setPhone] = useState('');

  return (
    <Container>
      <Content style={styles.padding}>
        <Item>
          <Input
            value={phone}
            keyboardType={'number-pad'}
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
        disabled={phone.length === 0 ? true : false}>
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
