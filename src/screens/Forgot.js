import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Container, Content, Button, Text, Item, Input} from 'native-base';

export default function Forgot() {
  return (
    <Container>
      <Content style={styles.padding}>
        <Text style={styles.header}>Forgot your password?</Text>
        <Text>
          To reset your password, please enter your registered email address.
        </Text>
        <Item>
          <Input placeholder="Email address" />
        </Item>
      </Content>
      <View style={styles.padding}>
        <Button block style={styles.btnColor}>
          <Text>next</Text>
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
  error: {
    fontSize: 12,
    color: 'red',
  },
  header: {
    fontWeight: 'bold',
    fontSize: 28,
    marginBottom: 20,
  },
});
