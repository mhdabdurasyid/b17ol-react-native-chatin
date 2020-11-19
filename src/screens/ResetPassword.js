import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Container, Content, Button, Text, Item, Input} from 'native-base';
import {Formik} from 'formik';
import * as Yup from 'yup';

export default function ResetPassword() {
  const schema = Yup.object().shape({
    newPassword: Yup.string()
      .min(6, 'Password required 6 characters')
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
            <Text style={styles.header}>Create new password</Text>
            <Item>
              <Input
                placeholder="New Password"
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
                placeholder="Repeat Password"
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
          <View style={styles.padding}>
            <Button block style={styles.btnColor} onPress={handleSubmit}>
              <Text>save</Text>
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
  error: {
    fontSize: 12,
    color: 'red',
  },
  header: {
    fontWeight: 'bold',
    fontSize: 28,
    marginBottom: 20,
  },
  btnColor: {
    backgroundColor: '#6ab6e1',
  },
});
