import React from 'react';
import { Text, Button } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { ScreenContainer } from '../ScreenContainer';

type AuthStackParamList = {
  SignIn: undefined;
  CreateAccount: undefined;
};
type SignInScreenNavigationProp = StackNavigationProp<
  AuthStackParamList,
  'SignIn'
>;

type Props = {
  navigation: SignInScreenNavigationProp;
};

export const SignIn = ({ navigation }: Props) => {
  return (
    <ScreenContainer>
      <Text>Siggity Sign in Bois</Text>
      <Button
        title='Sign In'
        onPress={() => {
          alert('Todo!');
        }}
      />
      <Button
        title='Create Account'
        onPress={() => {
          navigation.push('CreateAccount');
        }}
      />
    </ScreenContainer>
  );
};
