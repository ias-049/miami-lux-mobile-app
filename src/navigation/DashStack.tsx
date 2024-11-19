import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { DashStackParamList } from './interface';
import BottomTabStack from './BottomTabStack';

interface DashProps {
}

const Stack = createStackNavigator<DashStackParamList>();

const DashStack: React.FC<DashProps> = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Tabs" component={BottomTabStack} />
    </Stack.Navigator>
  );
};

export default DashStack;
