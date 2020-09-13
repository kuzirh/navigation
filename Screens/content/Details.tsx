import React from 'react';
import { Text } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { ScreenContainer } from '../ScreenContainer';

type NavigationStackParamList = {
  Details: { name: string };
  Search: undefined;
};
type ProfileScreenRouteProp = RouteProp<NavigationStackParamList, 'Details'>;
type DetailsScreenNavigationProp = StackNavigationProp<
  NavigationStackParamList,
  'Details'
>;

type Props = {
  navigation: DetailsScreenNavigationProp;
  route: ProfileScreenRouteProp;
};

export const Details = ({ route }: Props) => {
  return (
    <ScreenContainer>
      <Text>Gimme the deets boyo</Text>
      {route.params.name && <Text>{route.params.name}</Text>}
    </ScreenContainer>
  );
};
