import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {Container, Content, Text, Button, Item, Input, Icon} from 'native-base';

export default function Status() {
  const [status, setStatus] = useState('Im busy, text me later');

  return (
    <Container>
      <Content style={styles.padding}>
        <Item>
          <Input value={status} onChangeText={(text) => setStatus(text)} />
          {status.length !== 0 && (
            <TouchableOpacity onPress={() => setStatus('')}>
              <Icon type="MaterialIcons" name="close" style={styles.iconSize} />
            </TouchableOpacity>
          )}
        </Item>
        <Text style={styles.textLength}>{status.length}/500</Text>
      </Content>
      <Button
        block
        style={styles.btnColor}
        disabled={status.length === 0 ? true : false}>
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
});
