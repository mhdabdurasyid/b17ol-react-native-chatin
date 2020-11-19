import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Container, Content, Button, Text, Item, Input} from 'native-base';

export default function ResetPassword() {
  return (
    <Container>
      <Content style={styles.padding}>
        <Text style={styles.header}>Create new password</Text>
        <Item>
          <Input placeholder="New Password" />
        </Item>
        <Item>
          <Input placeholder="Repeat Password" />
        </Item>
      </Content>
      <View style={styles.padding}>
        <Button block style={styles.btnColor}>
          <Text>save</Text>
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
  error: {
    fontSize: 12,
    color: 'red',
  },
  header: {
    fontWeight: 'bold',
    fontSize: 28,
    marginBottom: 20,
  },
  btnColor: {
    backgroundColor: '#6ab6e1',
  },
});
