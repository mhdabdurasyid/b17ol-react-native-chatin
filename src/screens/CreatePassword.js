import React from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import {Container, Content, Fab, Text, Item, Input, Icon} from 'native-base';

export default function CreatePassword() {
  return (
    <Container>
      <Content style={styles.padding}>
        <Text style={styles.header}>Create password</Text>
        <Text>
          Use at least one letter, one number, and four other characters
        </Text>
        <Item>
          <Input placeholder="Password" secureTextEntry />
        </Item>
        <Item>
          <Input placeholder="Reenter password" secureTextEntry />
        </Item>
      </Content>
      <View>
        <Fab containerStyle={{}} style={styles.fabColor} position="bottomRight">
          <Icon type="FontAwesome5" name="arrow-right" />
        </Fab>
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
  },
  error: {
    fontSize: 12,
    color: 'red',
  },
  iconSize: {
    fontSize: 20,
  },
  fabColor: {
    backgroundColor: '#6ab6e1',
  },
});
