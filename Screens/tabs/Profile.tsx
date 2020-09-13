import React from 'react';
import { Text, Button } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { ScreenContainer } from '../ScreenContainer';

type NavigationStackParamList = {
  Details: undefined;
  Search: undefined;
  Blog: undefined;
  Home: { screen: string; params: object };
  Profile: undefined;
};
type ProfileScreenNavigationProp = StackNavigationProp<
  NavigationStackParamList,
  'Profile'
>;

type Props = {
  navigation: ProfileScreenNavigationProp;
};

export const Profile = ({ navigation }: Props) => {
  return (
    <ScreenContainer>
      <Text>Look at that pretty face</Text>
      <Button title='Blog' onPress={() => navigation.push('Blog')} />
      <Button
        title='Door #2'
        onPress={() => {
          navigation.navigate('Home', {
            screen: 'Details',
            params: { name: 'New Car' },
          });
        }}
      />
    </ScreenContainer>
  );
};
