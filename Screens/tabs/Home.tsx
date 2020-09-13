import React from 'react';
import { Text, Button } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { ScreenContainer } from '../ScreenContainer';

type ParamList = {
  Profile: undefined;
  Home: undefined;
  Details: object;
  Drawer: undefined;
};
type HomeScreenNavigationProp = StackNavigationProp<ParamList, 'Home'>;

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
      {/**
       * Here we see an error because the toogleDrawer method does not exist on type
       * StackNavigationProp. Though the method still works, I have not found a good work
       * around for this. Keep in mind this may just be some weird anti-pattern, why would I have
       * a button on the home page open a drawer?
       */}
      <Button title='Door #3' onPress={() => navigation.toggleDrawer()} />
    </ScreenContainer>
  );
};
