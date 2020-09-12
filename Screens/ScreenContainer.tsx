import React, { FunctionComponent } from 'react';
import { View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginVertical: 10,
    borderRadius: 5,
  },
});
type ChildProps = { children: object };
export const ScreenContainer: FunctionComponent<ChildProps> = ({
  children,
}) => {
  return <View style={styles.container}>{children}</View>;
};
