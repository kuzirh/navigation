import React, { useContext } from 'react';
import { Text, Button } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { ScreenContainer } from '../ScreenContainer';
import { AuthContext } from '../../context';

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
  const { signIn } = useContext(AuthContext);
  return (
    <ScreenContainer>
      <Text>Siggity Sign in Bois</Text>
      <Button
        title='Sign In'
        onPress={() => {
          signIn();
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
