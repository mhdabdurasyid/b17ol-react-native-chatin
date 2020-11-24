import React, {useEffect} from 'react';
import {
  Alert,
  FlatList,
  StyleSheet,
  View,
  TouchableOpacity,
} from 'react-native';
import {Container, Text, Icon, Item, Input} from 'native-base';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {useDispatch, useSelector} from 'react-redux';

// import actions
import friendAction from '../redux/actions/friend';

import Contact from '../components/Contact';

export default function Friends({navigation}) {
  const dispatch = useDispatch();
  const friend = useSelector((state) => state.friend);
  const auth = useSelector((state) => state.auth);

  const schema = Yup.object().shape({
    name: Yup.string().max(20),
  });

  useEffect(() => {
    dispatch(friendAction.getFriendList('', auth.token));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  function addFriend() {
    navigation.navigate('Add_Friend');
  }

  function searchFriend(values) {
    dispatch(friendAction.getFriendList(values.name, auth.token));
  }

  useEffect(() => {
    if (friend.friendIsError) {
      Alert.alert("User isn't found!");
      dispatch(friendAction.resetMsg());
    }
  });

  return (
    <Container>
      <Formik
        initialValues={{
          name: '',
        }}
        validationSchema={schema}
        onSubmit={(values) => searchFriend(values)}>
        {({handleChange, handleBlur, handleSubmit, values, handleReset}) => (
          <View>
            <View style={[styles.padding, styles.header]}>
              <Text style={styles.headerText}>Friends</Text>
              <TouchableOpacity onPress={addFriend}>
                <Icon
                  type="MaterialIcons"
                  name="person-add"
                  style={styles.iconSize}
                />
              </TouchableOpacity>
            </View>
            <Item style={styles.padding}>
              <Icon type="MaterialIcons" name="search" />
              <Input
                placeholder="Search by name"
                onChangeText={handleChange('name')}
                onBlur={handleBlur('name')}
                value={values.name}
                onSubmitEditing={handleSubmit}
              />
              {values.name.length !== 0 && (
                <TouchableOpacity onPress={handleReset}>
                  <Icon
                    type="MaterialIcons"
                    name="close"
                    style={styles.iconSize}
                  />
                </TouchableOpacity>
              )}
            </Item>
          </View>
        )}
      </Formik>
      <Text style={[styles.friendCount, styles.padding]}>
        Friends {friend.friendData.length}
      </Text>
      <FlatList
        data={friend.friendData}
        renderItem={({item}) => (
          <TouchableOpacity style={styles.padding}>
            <Contact item={item} />
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.friend}
      />
    </Container>
  );
}

const styles = StyleSheet.create({
  padding: {
    paddingHorizontal: 20,
  },
  header: {
    paddingTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  iconSize: {
    fontSize: 24,
  },
  friendCount: {
    marginTop: 10,
    marginBottom: 6,
    fontSize: 14,
    fontWeight: 'bold',
  },
});
