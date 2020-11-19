import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

// import screens
import Welcome from './Welcome';
import Home from './Home';

// import navigator
const Stack = createStackNavigator();
const MainStack = createStackNavigator();

export default function Main() {
  const isLogin = false;

  return (
    <NavigationContainer>
      {!isLogin ? (
        <Stack.Navigator>
          <Stack.Screen
            name="Welcome"
            component={Welcome}
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
        </MainStack.Navigator>
      )}
    </NavigationContainer>
  );
}
