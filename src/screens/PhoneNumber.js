import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Container, Content, Button, Text, Item, Input} from 'native-base';

export default function PhoneNumber() {
  return (
    <Container>
      <Content style={styles.padding}>
        <Text style={styles.header}>
          What's the phone number for this device?
        </Text>
        <Text>
          By tapping the next button, you accept Chatin's Terms and Conditions
          of Use and Privacy Policy.
        </Text>
        <Item>
          <Input placeholder="Phone Number" keyboardType={'number-pad'} />
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
  header: {
    fontWeight: 'bold',
    fontSize: 28,
    marginBottom: 20,
  },
  btnColor: {
    backgroundColor: '#6ab6e1',
    borderRadius: 100,
  },
});
