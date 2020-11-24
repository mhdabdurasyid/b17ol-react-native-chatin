import React, {useEffect} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {Container, Content, Text, Button, Item, Input, Icon} from 'native-base';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {useDispatch, useSelector} from 'react-redux';

// import actions
import profileAction from '../redux/actions/profile';

export default function ChangeEmail({navigation}) {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.profile);
  const auth = useSelector((state) => state.auth);

  const schema = Yup.object().shape({
    email: Yup.string()
      .email('Invalid email')
      .max(50, 'Max 50 characters')
      .required('Required field'),
  });

  function doChangeEmail(values) {
    const form = new FormData();
    form.append('email', values.email);
    dispatch(profileAction.editProfile(form, auth.token));
  }

  useEffect(() => {
    if (profile.isEdit) {
      dispatch(profileAction.getProfile(auth.token));
      dispatch(profileAction.resetEdit());
      navigation.navigate('Accounts');
    }
  });

  return (
    <Formik
      initialValues={{
        email: '',
      }}
      validationSchema={schema}
      onSubmit={(values) => doChangeEmail(values)}>
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        handleReset,
        touched,
        errors,
      }) => (
        <Container>
          <Content style={styles.padding}>
            <Item>
              <Input
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
              />
              {values.email.length !== 0 && (
                <TouchableOpacity onPress={handleReset}>
                  <Icon
                    type="MaterialIcons"
                    name="close"
                    style={styles.iconSize}
                  />
                </TouchableOpacity>
              )}
            </Item>
            {touched.email && errors.email && (
              <Text style={styles.error}>{errors.email}</Text>
            )}
            <Text style={styles.text}>
              Register an email address to keep all your account data backed up.
              If you switch devices or phone numbers, you'll be able to restore
              your friends, groups, profile info, and more.
            </Text>
          </Content>
          <Button
            block
            style={styles.btnColor}
            disabled={values.email.length === 0 ? true : false}
            onPress={handleSubmit}>
            <Text>next</Text>
          </Button>
        </Container>
      )}
    </Formik>
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
  text: {
    fontSize: 14,
    color: 'gray',
    marginTop: 12,
  },
  error: {
    fontSize: 12,
    color: 'red',
  },
});
