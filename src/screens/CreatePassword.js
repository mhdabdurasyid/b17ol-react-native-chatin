import React, {useEffect} from 'react';
import {Alert, StyleSheet, View} from 'react-native';
import {Container, Content, Fab, Text, Item, Input, Icon} from 'native-base';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {useDispatch, useSelector} from 'react-redux';

// import actions
import authAction from '../redux/actions/auth';

export default function CreatePassword({route, navigation}) {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const {phoneNumber, name, image} = route.params;

  const schema = Yup.object().shape({
    password: Yup.string()
      .min(6, 'Password required 6 character')
      .max(20, 'Password required max 20 characters')
      .required('Required field'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Password must match')
      .required('Required field'),
  });

  function register(values) {
    const form = new FormData();
    form.append('phoneNumber', phoneNumber);
    form.append('name', name);
    form.append('password', values.password);
    form.append('confirmPassword', values.confirmPassword);
    if (image) {
      form.append('image', image);
    }
    dispatch(authAction.register(form));
  }

  useEffect(() => {
    if (auth.isRegister) {
      Alert.alert('Register success, login first');
      navigation.navigate('Enter_Password', {phoneNumber});
      dispatch(authAction.clearAlert());
    }
  });

  return (
    <Formik
      initialValues={{
        password: '',
        confirmPassword: '',
      }}
      validationSchema={schema}
      onSubmit={(values) => register(values)}>
      {({handleChange, handleBlur, handleSubmit, values, touched, errors}) => (
        <Container>
          <Content style={styles.padding}>
            <Text style={styles.header}>Create password</Text>
            <Text>
              Use at least one letter, one number, and four other characters
            </Text>
            <Item>
              <Input
                placeholder="Password"
                secureTextEntry
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
              />
            </Item>
            {touched.password && errors.password && (
              <Text style={styles.error}>{errors.password}</Text>
            )}
            <Item>
              <Input
                placeholder="Reenter password"
                secureTextEntry
                onChangeText={handleChange('confirmPassword')}
                onBlur={handleBlur('confirmPassword')}
                value={values.confirmPassword}
              />
            </Item>
            {touched.confirmPassword && errors.confirmPassword && (
              <Text style={styles.error}>{errors.confirmPassword}</Text>
            )}
          </Content>
          <View>
            <Fab
              containerStyle={{}}
              style={styles.fabColor}
              position="bottomRight"
              onPress={handleSubmit}>
              <Icon type="FontAwesome5" name="arrow-right" />
            </Fab>
          </View>
        </Container>
      )}
    </Formik>
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
