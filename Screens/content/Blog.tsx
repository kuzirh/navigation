import React from 'react';
import { Text } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { ScreenContainer } from '../ScreenContainer';

type NavigationStackParamList = {
  Blog: undefined;
};
type BlogScreenNavigationProp = StackNavigationProp<
  NavigationStackParamList,
  'Blog'
>;

type Props = {
  navigation: BlogScreenNavigationProp;
};

export const Blog = () => {
  return (
    <ScreenContainer>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </Text>
    </ScreenContainer>
  );
};
