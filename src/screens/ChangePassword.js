import React from 'react';
import {StyleSheet} from 'react-native';
import {Container, Content, Text, Button, Item, Input} from 'native-base';

export default function ChangePassword() {
  return (
    <Container>
      <Content style={styles.padding}>
        <Item>
          <Input placeholder="Password (6 to 20 chars)" />
        </Item>
        <Item>
          <Input placeholder="Re-confirm password" />
        </Item>
      </Content>
      <Button block style={styles.btnColor}>
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
});
