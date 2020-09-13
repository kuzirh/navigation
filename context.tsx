import React, { createContext } from 'react';

type AuthContextProps = {
  signIn: Function;
  signUp: Function;
  signOut: Function;
};

export const AuthContext = createContext<AuthContextProps>();
