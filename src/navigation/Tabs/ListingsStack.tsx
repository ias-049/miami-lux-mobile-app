import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { ListingsScreen } from '../../screens/Listings';

interface ListingsStackProps { }

const Stack = createStackNavigator();

export const ListingsStack: React.FC<ListingsStackProps> = props => {
  const { } = props;
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="ListingsScreen" component={ListingsScreen} />
    </Stack.Navigator>
  );
};