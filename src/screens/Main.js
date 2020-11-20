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
import Chat from './Chat';
import Friends from './Friends';
import AddFriend from './AddFriend';
import Settings from './Settings';
import Profile from './Profile';
import EditName from './EditName';
import EditStatus from './EditStatus';
import EditUserID from './EditUserID';
import Accounts from './Accounts';
import ChangePhone from './ChangePhone';

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
          <MainStack.Screen
            name="Chat"
            component={Chat}
            options={{headerShown: false}}
          />
          <MainStack.Screen
            name="Friends"
            component={Friends}
            options={{headerShown: false}}
          />
          <MainStack.Screen
            name="Add_Friend"
            component={AddFriend}
            options={{headerShown: false}}
          />
          <MainStack.Screen
            name="Settings"
            component={Settings}
            options={{headerShown: false}}
          />
          <MainStack.Screen
            name="Profile"
            component={Profile}
            options={{headerLeft: ''}}
          />
          <MainStack.Screen
            name="Edit_Name"
            component={EditName}
            options={{headerLeft: '', title: 'Display Name'}}
          />
          <MainStack.Screen
            name="Edit_Status"
            component={EditStatus}
            options={{headerLeft: '', title: 'Status Message'}}
          />
          <MainStack.Screen
            name="Edit_UserID"
            component={EditUserID}
            options={{headerLeft: '', title: 'User ID'}}
          />
          <MainStack.Screen
            name="Accounts"
            component={Accounts}
            options={{headerLeft: ''}}
          />
          <MainStack.Screen
            name="Change_Phone"
            component={ChangePhone}
            options={{headerLeft: '', title: 'Change Phone Number'}}
          />
        </MainStack.Navigator>
      )}
    </NavigationContainer>
  );
}
