import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

// import screens
import Welcome from './Welcome';
import Home from './Home';
import LoginEmail from './LoginEmail';
import Forgot from './Forgot';
import ResetPassword from './ResetPassword';
import PhoneNumber from './PhoneNumber';
import StartChat from './StartChat';

// import navigator
const Stack = createStackNavigator();
const MainStack = createStackNavigator();

export default function Main() {
  const isLogin = true;

  return (
    <NavigationContainer>
      {!isLogin ? (
        <Stack.Navigator>
          <Stack.Screen
            name="Welcome"
            component={Welcome}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Login_By_Email"
            component={LoginEmail}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Forgot"
            component={Forgot}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Reset"
            component={ResetPassword}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Phone"
            component={PhoneNumber}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      ) : (
        <MainStack.Navigator>
          <MainStack.Screen
            name="Home"
            component={Home}
            options={{headerShown: false}}
          />
          <MainStack.Screen
            name="Start_Chat"
            component={StartChat}
            options={{headerShown: false}}
          />
        </MainStack.Navigator>
      )}
    </NavigationContainer>
  );
}
