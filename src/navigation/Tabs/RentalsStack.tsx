import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { RentalScreen } from '../../screens/Rentals';
import { GuestRequirementScreen } from '../../screens/GuestRequirement';
import { CancellationPolicyScreen } from '../../screens/CancellationPolicy';
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
      <Stack.Screen name="GuestRequirementScreen" component={GuestRequirementScreen} />
      <Stack.Screen name="CancellationPolicyScreen" component={CancellationPolicyScreen} />
      <Stack.Screen name="RentalScreen" component={RentalScreen} />
    </Stack.Navigator>
  );
};
