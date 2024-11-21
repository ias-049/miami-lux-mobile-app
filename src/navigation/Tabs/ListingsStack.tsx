import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { ListingsScreen } from '../../screens/Listings';

interface ListingsStackProps { }

const Stack = createNativeStackNavigator();

export const ListingsStack: React.FC<ListingsStackProps> = props => {
  const { } = props;
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false, animation: 'slide_from_right',
        animationTypeForReplace: 'push',
        animationDuration: 200,
      }}>
      <Stack.Screen name="ListingsScreen" component={ListingsScreen} />
    </Stack.Navigator>
  );
};