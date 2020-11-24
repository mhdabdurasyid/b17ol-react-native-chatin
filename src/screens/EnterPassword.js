import React, {useEffect} from 'react';
import {Alert, StyleSheet, View, TouchableOpacity} from 'react-native';
import {Container, Content, Fab, Text, Item, Input, Icon} from 'native-base';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {useDispatch, useSelector} from 'react-redux';

// import actions
import authAction from '../redux/actions/auth';

export default function EnterPassword({route}) {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const {phoneNumber} = route.params;

  const schema = Yup.object().shape({
    password: Yup.string()
      .min(6, 'Password required 6 character')
      .max(20, 'Password required max 20 characters')
      .required('Required field'),
  });

  function login(values) {
    const data = {
      phoneNumber,
      password: values.password,
    };
    dispatch(authAction.loginByPhone(data));
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
        password: '',
      }}
      validationSchema={schema}
      onSubmit={(values) => login(values)}>
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        touched,
        errors,
        handleReset,
      }) => (
        <Container>
          <Content style={styles.padding}>
            <Text style={styles.header}>Enter your password</Text>
            <Item>
              <Input
                placeholder="Password"
                secureTextEntry
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
              />
              {values.password.length !== 0 && (
                <TouchableOpacity onPress={handleReset}>
                  <Icon
                    type="MaterialIcons"
                    name="close"
                    style={styles.iconSize}
                  />
                </TouchableOpacity>
              )}
            </Item>
            {touched.password && errors.password && (
              <Text style={styles.error}>{errors.password}</Text>
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
