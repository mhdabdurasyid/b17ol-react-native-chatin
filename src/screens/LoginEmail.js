import React, {useEffect} from 'react';
import {Alert, StyleSheet, TouchableOpacity, View} from 'react-native';
import {Container, Content, Button, Text, Item, Input} from 'native-base';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {useDispatch, useSelector} from 'react-redux';

// import actions
import authAction from '../redux/actions/auth';

export default function LoginEmail({navigation}) {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  const schema = Yup.object().shape({
    email: Yup.string()
      .email('Invalid email')
      .max(50, 'Max 50 characters')
      .required('Required field'),
    password: Yup.string()
      .min(6, 'Password required 6 characters')
      .max(20, 'Password required max 20 characters')
      .required('Required field'),
  });

  function goToForgot() {
    navigation.navigate('Forgot');
  }

  function login(data) {
    dispatch(authAction.loginByEmail(data));
  }

  useEffect(() => {
    if (auth.isError) {
      Alert.alert(auth.alertMsg);
      dispatch(authAction.clearAlert());
    }
  });

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={schema}
      onSubmit={(values) => login(values)}>
      {({handleChange, handleBlur, handleSubmit, values, touched, errors}) => (
        <Container>
          <Content style={styles.padding}>
            <Item>
              <Input
                placeholder="Email address"
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
              />
            </Item>
            {touched.email && errors.email && (
              <Text style={styles.error}>{errors.email}</Text>
            )}
            <Item>
              <Input
                placeholder="Password"
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                secureTextEntry
              />
            </Item>
            {touched.password && errors.password && (
              <Text style={styles.error}>{errors.password}</Text>
            )}
            <TouchableOpacity onPress={goToForgot}>
              <Text style={styles.forgotLink}>Forgot your password?</Text>
            </TouchableOpacity>
          </Content>
          <View style={styles.padding}>
            <Button block style={styles.btnColor} onPress={handleSubmit}>
              <Text>login</Text>
            </Button>
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
  btnColor: {
    backgroundColor: '#6ab6e1',
  },
  forgotLink: {
    color: '#6ab6e1',
    textDecorationLine: 'underline',
    fontSize: 14,
    marginTop: 16,
  },
  error: {
    fontSize: 12,
    color: 'red',
  },
});
