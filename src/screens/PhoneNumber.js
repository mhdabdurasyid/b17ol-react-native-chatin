import React, {useEffect, useState} from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import {Container, Content, Fab, Text, Item, Input, Icon} from 'native-base';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {useDispatch, useSelector} from 'react-redux';

// import actions
import authAction from '../redux/actions/auth';

export default function PhoneNumber({navigation}) {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const [phoneNumber, setPhoneNumber] = useState('');

  const schema = Yup.object().shape({
    phone: Yup.string()
      .min(10, 'Min 10 characters')
      .max(12, 'Max 12 characters')
      .required('Required field'),
  });

  function checkPhoneNumber(values) {
    const data = {phoneNumber: values.phone};
    dispatch(authAction.isPhoneValid(data));
    setPhoneNumber(values.phone);
  }

  useEffect(() => {
    if (auth.isPhoneValid) {
      navigation.navigate('Enter_Password', {phoneNumber});
      dispatch(authAction.clearAlert());
    }

    if (auth.isPhoneError) {
      navigation.navigate('Register', {phoneNumber});
      dispatch(authAction.clearAlert());
    }
  });

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
