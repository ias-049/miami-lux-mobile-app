import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { DashStackParamList } from './interface';

interface DashProps { }

const Stack = createStackNavigator<DashStackParamList>();

const DashStack: React.FC<DashProps> = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={() => <></>} />
    </Stack.Navigator>
  );
};

export default DashStack;
