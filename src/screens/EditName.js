import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {Container, Content, Text, Button, Item, Input, Icon} from 'native-base';

export default function EditName() {
  const [name, setName] = useState('John Hopkins');

  return (
    <Container>
      <Content style={styles.padding}>
        <Item>
          <Input value={name} onChangeText={(text) => setName(text)} />
          {name.length !== 0 && (
            <TouchableOpacity onPress={() => setName('')}>
              <Icon type="MaterialIcons" name="close" style={styles.iconSize} />
            </TouchableOpacity>
          )}
        </Item>
        <Text style={styles.textLength}>{name.length}/20</Text>
      </Content>
      <Button
        block
        style={styles.btnColor}
        disabled={name.length === 0 ? true : false}>
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
