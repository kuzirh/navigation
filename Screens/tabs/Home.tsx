import React from 'react';
import { Text, Button } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { ScreenContainer } from '../ScreenContainer';

type TabStackParamList = {
  Profile: undefined;
  Home: undefined;
  Details: object;
};
type HomeScreenNavigationProp = StackNavigationProp<TabStackParamList, 'Home'>;

type Props = {
  navigation: HomeScreenNavigationProp;
};

export const Home = ({ navigation }: Props) => {
  return (
    <ScreenContainer>
      <Text>Take me home mamma</Text>
      <Button
        title='Door #1'
        onPress={() => navigation.push('Details', { name: 'Island Getaway' })}
      />
      <Button
        title='Door #2'
        onPress={() => navigation.push('Details', { name: 'New Car' })}
      />
      <Button title='Door #3' onPress={() => alert('todo')} />
    </ScreenContainer>
  );
};
