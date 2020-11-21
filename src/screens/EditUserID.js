import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {Container, Content, Text, Button, Item, Input, Icon} from 'native-base';

export default function EditUserID() {
  const [userID, setUserID] = useState('johnhopkinss');

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
        disabled={userID.length === 0 ? true : false}>
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
