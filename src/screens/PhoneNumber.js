import React from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import {Container, Content, Button, Text, Item, Input, Icon} from 'native-base';
import {Formik} from 'formik';
import * as Yup from 'yup';

export default function PhoneNumber({navigation}) {
  const schema = Yup.object().shape({
    phone: Yup.string()
      .min(10, 'Min 10 characters')
      .max(12, 'Max 12 characters')
      .required('Required field'),
  });

  function checkPhoneNumber(values) {
    navigation.navigate('Register');
  }

  return (
    <Formik
      initialValues={{
        phone: '',
      }}
      validationSchema={schema}
      onSubmit={(values) => checkPhoneNumber(values)}>
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
            <Text style={styles.header}>
              What's the phone number for this device?
            </Text>
            <Text>
              By tapping the next button, you accept Chatin's Terms and
              Conditions of Use and Privacy Policy.
            </Text>
            <Item>
              <Input
                placeholder="Phone Number"
                keyboardType={'phone-pad'}
                onChangeText={handleChange('phone')}
                onBlur={handleBlur('phone')}
                value={values.phone}
              />
              {values.phone.length !== 0 && (
                <TouchableOpacity onPress={handleReset}>
                  <Icon
                    type="MaterialIcons"
                    name="close"
                    style={styles.iconSize}
                  />
                </TouchableOpacity>
              )}
            </Item>
            {touched.phone && errors.phone && (
              <Text style={styles.error}>{errors.phone}</Text>
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
});
