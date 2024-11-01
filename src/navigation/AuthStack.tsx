import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { AuthStackParamList } from './interface';
import { LoginScreen } from '../screens/Login';

const Stack = createStackNavigator<AuthStackParamList>();

const AuthStack: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
  );
};

export default AuthStack;
