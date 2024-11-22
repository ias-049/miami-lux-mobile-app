import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { DashStackParamList } from './interface';
import BottomTabStack from './BottomTabStack';
import { UserProfileScreen } from '../screens/UserProfile';
import { MyBookingsScreen } from '../screens/MyBookings';

interface DashProps {
}

const Stack = createNativeStackNavigator<DashStackParamList>();

const DashStack: React.FC<DashProps> = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false, animation: 'slide_from_right',
      animationTypeForReplace: 'push',
      animationDuration: 200,
    }}>
      <Stack.Screen name="MyBookingScreen" component={MyBookingsScreen} />
      <Stack.Screen name="Tabs" component={BottomTabStack} />
      <Stack.Screen name="UserProfileScreen" component={UserProfileScreen} />
    </Stack.Navigator>
  );
};

export default DashStack;
