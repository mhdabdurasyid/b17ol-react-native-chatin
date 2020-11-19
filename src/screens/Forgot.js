import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Container, Content, Button, Text, Item, Input} from 'native-base';
import {Formik} from 'formik';
import * as Yup from 'yup';

export default function Forgot() {
  const schema = Yup.object().shape({
    email: Yup.string()
      .email('Invalid email')
      .max(50, 'Max 50 characters')
      .required('Required field'),
  });

  return (
    <Formik
      initialValues={{
        email: '',
      }}
      validationSchema={schema}
      onSubmit={(values) => console.log(values)}>
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
