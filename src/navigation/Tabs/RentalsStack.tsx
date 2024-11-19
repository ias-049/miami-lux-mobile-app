import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { RentalScreen } from '../../screens/Rentals';

interface RentalStackProps { }

const Stack = createStackNavigator();

export const RentalStack: React.FC<RentalStackProps> = props => {
  const { } = props;
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="RentalScreen" component={RentalScreen} />
    </Stack.Navigator>
  );
};
