import React from 'react';
import { Text, Button } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { ScreenContainer } from '../ScreenContainer';

type NavigationStackParamList = {
  Search: undefined;
};
type SearchScreenNavigationProp = StackNavigationProp<
  NavigationStackParamList,
  'Search'
>;

type Props = {
  navigation: SearchScreenNavigationProp;
};

export const Search = () => {
  return (
    <ScreenContainer>
      <Text>Don't come looking</Text>
    </ScreenContainer>
  );
};
