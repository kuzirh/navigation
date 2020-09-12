import React from 'react';
import { Text } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { ScreenContainer } from './ScreenContainer';

type AuthStackParamList = {
  SignIn: undefined;
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
    </ScreenContainer>
  );
};
