import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SignIn } from './Screens/account/SignIn';
import { CreateAccount } from './Screens/account/CreateAccount';

type AuthStackParamList = {
  SignIn: undefined;
  CreateAccount: undefined;
};

const AuthStack = createStackNavigator<AuthStackParamList>();

export default () => (
  <NavigationContainer>
    <AuthStack.Navigator>
      <AuthStack.Screen
        name='SignIn'
        component={SignIn}
        options={{ title: 'Sign In' }}
      />
      <AuthStack.Screen
        name='CreateAccount'
        component={CreateAccount}
        options={{ title: 'Create Account' }}
      />
    </AuthStack.Navigator>
  </NavigationContainer>
);
