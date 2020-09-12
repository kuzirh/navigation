import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SignIn } from './Screens/SignIn';

type AuthStackParamList = {
  SignIn: undefined;
  CreateAccount: undefined;
};

const AuthStack = createStackNavigator<AuthStackParamList>();

export default () => (
  <NavigationContainer>
    <AuthStack.Navigator>
      <AuthStack.Screen name='SignIn' component={SignIn} />
    </AuthStack.Navigator>
  </NavigationContainer>
);
