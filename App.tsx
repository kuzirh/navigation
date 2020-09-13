import React, { useState, useEffect, useMemo } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { SignIn } from './Screens/account/SignIn';
import { CreateAccount } from './Screens/account/CreateAccount';
import { Home } from './Screens/tabs/Home';
import { Profile } from './Screens/tabs/Profile';
import { Search } from './Screens/content/Search';
import { Details } from './Screens/content/Details';
import { Blog } from './Screens/content/Blog';
import { Splash } from './Screens/account/Splash';
import { AuthContext } from './context';

type AuthStackParamList = {
  SignIn: undefined;
  CreateAccount: undefined;
};

type NavigationStackParamList = {
  Details: { name: string };
  Search: undefined;
  Home: undefined;
  Profile: undefined;
  Drawer: undefined;
};

const AuthStack = createStackNavigator<AuthStackParamList>();
const Tabs = createBottomTabNavigator<NavigationStackParamList>();
const HomeStack = createStackNavigator<NavigationStackParamList>();
const ProfileStack = createStackNavigator();
const SearchStack = createStackNavigator();
const RootStack = createStackNavigator();
const Drawer = createDrawerNavigator<NavigationStackParamList>();

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

const SearchStackScreen = () => (
  <SearchStack.Navigator>
    <SearchStack.Screen name='Search' component={Search} />
  </SearchStack.Navigator>
);

const TabsScreen = () => (
  <Tabs.Navigator>
    <Tabs.Screen name='Home' component={HomeStackScreen} />
    <Tabs.Screen name='Profile' component={ProfileStackScreen} />
  </Tabs.Navigator>
);

const RootStackScreen = ({ userToken }: any) => (
  <RootStack.Navigator headerMode='none'>
    {userToken ? (
      <RootStack.Screen
        name='app'
        component={DrawerScreen}
        options={{
          animationEnabled: false,
        }}
      />
    ) : (
      <RootStack.Screen
        name='auth'
        component={AuthStackScreen}
        options={{
          animationEnabled: false,
        }}
      />
    )}
  </RootStack.Navigator>
);

const DrawerScreen = () => (
  <Drawer.Navigator>
    <Drawer.Screen name='Home' component={TabsScreen} />
    <Drawer.Screen name='Search' component={Search} />
  </Drawer.Navigator>
);

const AuthStackScreen = () => (
  <AuthStack.Navigator>
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
  </AuthStack.Navigator>
);

export default () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [userToken, setUserToken] = useState<string | null>(null);
  const authContext = useMemo(() => {
    return {
      signIn: () => {
        setIsLoading(false);
        setUserToken('asdf');
      },
      signOut: () => {
        setIsLoading(false);
        setUserToken(null);
      },
      signUp: () => {
        setIsLoading(false);
        setUserToken('asdf');
      },
    };
  }, []);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);
  if (isLoading) {
    return <Splash />;
  }
  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        <RootStackScreen userToken={userToken} />
      </NavigationContainer>
    </AuthContext.Provider>
  );
};
