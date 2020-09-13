import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SignIn } from './Screens/account/SignIn';
import { CreateAccount } from './Screens/account/CreateAccount';
import { Home } from './Screens/tabs/Home';
import { Profile } from './Screens/tabs/Profile';
import { Search } from './Screens/content/Search';
import { Details } from './Screens/content/Details';
import { Blog } from './Screens/content/Blog';

type AuthStackParamList = {
  SignIn: undefined;
  CreateAccount: undefined;
};

type TabStackParamList = {
  Profile: undefined;
  Home: undefined;
};

type NavigationStackParamList = {
  Details: { name: string };
  Search: undefined;
  Home: undefined;
};

const AuthStack = createStackNavigator<AuthStackParamList>();
const Tabs = createBottomTabNavigator<TabStackParamList>();
const HomeStack = createStackNavigator<NavigationStackParamList>();
const ProfileStack = createStackNavigator();

const HomeStackScreen = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen name='Home' component={Home} />
    <HomeStack.Screen
      name='Details'
      component={Details}
      options={({ route }) => ({ title: route.params.name })}
    />
  </HomeStack.Navigator>
);

const ProfileStackScreen = () => (
  <ProfileStack.Navigator>
    <ProfileStack.Screen name='Profile' component={Profile} />
    <ProfileStack.Screen name='Blog' component={Blog} />
  </ProfileStack.Navigator>
);
export default () => (
  <NavigationContainer>
    <Tabs.Navigator>
      <Tabs.Screen name='Home' component={HomeStackScreen} />
      <Tabs.Screen name='Profile' component={ProfileStackScreen} />
    </Tabs.Navigator>

    {/* <AuthStack.Navigator>
      <AuthStack.Screen
        name='SignIn'
        component={SignIn}
        options={{ title: 'Sign In' }}
      />
      <AuthStack.Screen
        name='CreateAccount'
        component={CreateAccount}
        options={{ title: 'Create Account' }}
      />
    </AuthStack.Navigator> */}
  </NavigationContainer>
);
