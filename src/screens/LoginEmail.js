import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {Container, Content, Button, Text, Item, Input} from 'native-base';

export default function LoginEmail() {
  return (
    <Container>
      <Content style={styles.padding}>
        <Item>
          <Input placeholder="Email address" />
        </Item>
        <Item>
          <Input placeholder="Password" />
        </Item>
        <TouchableOpacity>
          <Text style={styles.forgotLink}>Forgot your password?</Text>
        </TouchableOpacity>
      </Content>
      <View style={styles.padding}>
        <Button block style={styles.btnColor}>
          <Text style={styles.blue}>login</Text>
        </Button>
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
  btnColor: {
    backgroundColor: '#6ab6e1',
  },
  forgotLink: {
    color: '#6ab6e1',
    textDecorationLine: 'underline',
    fontSize: 14,
    marginTop: 16,
  },
});
