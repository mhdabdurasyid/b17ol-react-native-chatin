import React from 'react';
import {StyleSheet} from 'react-native';
import {Container, Content, Text, Button, Item, Input} from 'native-base';
import {Formik} from 'formik';
import * as Yup from 'yup';

export default function ChangePassword() {
  const schema = Yup.object().shape({
    newPassword: Yup.string()
      .min(6, 'Password required 6 characters')
      .max(20, 'Password required max 20 characters')
      .required('Required field'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('newPassword'), null], 'New password must match')
      .required('Required field'),
  });

  return (
    <Formik
      initialValues={{
        newPassword: '',
        confirmPassword: '',
      }}
      validationSchema={schema}
      onSubmit={(values) => console.log(values)}>
      {({handleChange, handleBlur, handleSubmit, values, touched, errors}) => (
        <Container>
          <Content style={styles.padding}>
            <Item>
              <Input
                placeholder="Password (6 to 20 chars)"
                onChangeText={handleChange('newPassword')}
                onBlur={handleBlur('newPassword')}
                value={values.newPassword}
                secureTextEntry
              />
            </Item>
            {touched.newPassword && errors.newPassword && (
              <Text style={styles.error}>{errors.newPassword}</Text>
            )}
            <Item>
              <Input
                placeholder="Re-confirm password"
                onChangeText={handleChange('confirmPassword')}
                onBlur={handleBlur('confirmPassword')}
                value={values.confirmPassword}
                secureTextEntry
              />
            </Item>
            {touched.confirmPassword && errors.confirmPassword && (
              <Text style={styles.error}>{errors.confirmPassword}</Text>
            )}
          </Content>
          <Button block style={styles.btnColor} onPress={handleSubmit}>
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
  error: {
    fontSize: 12,
    color: 'red',
  },
});
