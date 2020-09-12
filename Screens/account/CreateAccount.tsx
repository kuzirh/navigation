import React from 'react';
import { Text } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { ScreenContainer } from '../ScreenContainer';

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
  return (
    <ScreenContainer>
      <Text>Criggity create account Bois</Text>
    </ScreenContainer>
  );
};
