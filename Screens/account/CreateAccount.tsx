import React, { useContext } from 'react';
import { Text, Button } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { ScreenContainer } from '../ScreenContainer';
import { AuthContext } from '../../context';

type AuthStackParamList = {
  CreateAccount: undefined;
};
type CreateAccountScreenNavigationProp = StackNavigationProp<
  AuthStackParamList,
  'CreateAccount'
>;

type Props = {
  navigation: CreateAccountScreenNavigationProp;
};

export const CreateAccount = ({ navigation }: Props) => {
  const { signUp } = useContext(AuthContext);
  return (
    <ScreenContainer>
      <Text>Criggity create account Bois</Text>
      <Button title='Sign Up' onPress={() => signUp()} />
    </ScreenContainer>
  );
};
