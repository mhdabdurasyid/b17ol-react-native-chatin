import React from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import {Container, Content, Text} from 'native-base';

export default function Accounts({navigation}) {
  function changePhone() {
    navigation.navigate('Change_Phone');
  }
  return (
    <Container>
      <Content>
        <View style={[styles.padding, styles.hr]}>
          <TouchableOpacity onPress={changePhone}>
            <Text>Phone Number</Text>
            <Text style={styles.text}>+62 856-4961-7528</Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.padding, styles.hr]}>
          <TouchableOpacity>
            <Text>Email</Text>
            <Text style={styles.text}>johnhopkinss@mail.com</Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.padding, styles.hr]}>
          <TouchableOpacity>
            <Text>Password</Text>
            <Text style={styles.text}>Complete</Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.padding, styles.hr]}>
          <TouchableOpacity>
            <Text>Delete My Account</Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.padding, styles.hr]}>
          <TouchableOpacity>
            <Text>Logout</Text>
          </TouchableOpacity>
        </View>
      </Content>
    </Container>
  );
}

const styles = StyleSheet.create({
  padding: {
    paddingHorizontal: 20,
    paddingVertical: 24,
  },
  hr: {
    borderBottomColor: 'gray',
    borderBottomWidth: 0.3,
  },
  text: {
    color: '#6ab6e1',
    fontSize: 14,
  },
});