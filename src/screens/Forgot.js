import React, {useEffect} from 'react';
import {Alert, StyleSheet, View} from 'react-native';
import {Container, Content, Button, Text, Item, Input} from 'native-base';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {useDispatch, useSelector} from 'react-redux';

// import actions
import authAction from '../redux/actions/auth';

export default function Forgot({navigation}) {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  const schema = Yup.object().shape({
    email: Yup.string()
      .email('Invalid email')
      .max(50, 'Max 50 characters')
      .required('Required field'),
  });

  function goToResetPassword(data) {
    dispatch(authAction.forgotPassword(data));
  }

  useEffect(() => {
    if (auth.isEmailError) {
      Alert.alert(auth.alertMsg);
      dispatch(authAction.clearAlert());
    }

    if (auth.emailValidData.id) {
      navigation.navigate('Reset', {id: auth.emailValidData.id});
      dispatch(authAction.clearAlert());
    }
  });

  return (
    <Formik
      initialValues={{
        email: '',
      }}
      validationSchema={schema}
      onSubmit={(values) => goToResetPassword(values)}>
      {({handleChange, handleBlur, handleSubmit, values, touched, errors}) => (
        <Container>
          <Content style={styles.padding}>
            <Text style={styles.header}>Forgot your password?</Text>
            <Text>
              To reset your password, please enter your registered email
              address.
            </Text>
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
          </Content>
          <View style={styles.padding}>
            <Button block style={styles.btnColor} onPress={handleSubmit}>
              <Text>next</Text>
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
  error: {
    fontSize: 12,
    color: 'red',
  },
  header: {
    fontWeight: 'bold',
    fontSize: 28,
    marginBottom: 20,
  },
});
