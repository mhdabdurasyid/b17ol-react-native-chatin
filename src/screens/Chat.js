import React from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import {Container, Content, Text, Icon, Item, Input} from 'native-base';

export default function Chat() {
  return (
    <Container>
      <View style={[styles.padding, styles.header]}>
        <Text style={styles.headerText}>Jeanne</Text>
      </View>
      <Content style={styles.padding}>
        <View>
          <Text style={[styles.message, styles.date]}>11.20.(Fri)</Text>
          <View style={[styles.balloon, styles.balloonLeft]}>
            <Text style={[styles.message, styles.messageWidth]}>
              Hallo, selamat pagi.
            </Text>
            <Text style={styles.time}>19.00</Text>
          </View>

          <View style={styles.right}>
            <View style={[styles.balloon, styles.balloonRight]}>
              <Text style={[styles.message, styles.messageWidth]}>
                Iya selamat pagi juga.
              </Text>
              <Text style={styles.time}>19.01</Text>
            </View>
          </View>
        </View>

        <View>
          <Text style={[styles.message, styles.date]}>11.21.(Sat)</Text>
          <View style={[styles.balloon, styles.balloonLeft]}>
            <Text style={[styles.message, styles.messageWidth]}>
              Hallo, selamat pagi.
            </Text>
            <Text style={styles.time}>19.00</Text>
          </View>

          <View style={styles.right}>
            <View style={[styles.balloon, styles.balloonRight]}>
              <Text style={[styles.message, styles.messageWidth]}>
                Iya selamat pagi juga.
              </Text>
              <Text style={styles.time}>19.01</Text>
            </View>
          </View>
        </View>
      </Content>
      <View style={styles.sendMsg}>
        <Item style={styles.padding}>
          <Input multiline style={styles.message} />
          <TouchableOpacity>
            <Icon type="MaterialIcons" name="send" style={styles.iconColor} />
          </TouchableOpacity>
        </Item>
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  padding: {
    paddingHorizontal: 20,
  },
  iconColor: {
    color: '#6ab6e1',
  },
  sendMsg: {
    borderTopColor: 'gray',
    borderTopWidth: 0.3,
  },
  header: {
    paddingVertical: 10,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  message: {
    fontSize: 14,
  },
  date: {
    marginTop: 8,
    marginBottom: 4,
  },
  time: {
    fontSize: 10,
    textAlign: 'right',
  },
  messageWidth: {
    width: '80%',
  },
  balloon: {
    marginVertical: 4,
    padding: 8,
    borderRadius: 10,
    width: '75%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  balloonLeft: {
    backgroundColor: '#dadedf',
  },
  balloonRight: {
    backgroundColor: '#6ab6e1',
  },
  right: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
});
