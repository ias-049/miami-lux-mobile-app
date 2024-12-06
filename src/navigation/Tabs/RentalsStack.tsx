import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { MyBookingsScreen } from '../../screens/MyBookings';

interface RentalStackProps { }

const Stack = createNativeStackNavigator();

export const RentalStack: React.FC<RentalStackProps> = props => {
  const { } = props;
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
        animationTypeForReplace: 'push',
        animationDuration: 200,
      }}>
      <Stack.Screen name="MyBookingScreen" component={MyBookingsScreen} />
    </Stack.Navigator>
  );
};
