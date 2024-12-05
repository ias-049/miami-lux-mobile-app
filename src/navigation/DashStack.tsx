import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import AddProduct from '../screens/AddProduct';
import {UserProfileScreen} from '../screens/UserProfile';
import BottomTabStack from './BottomTabStack';
import {DashStackParamList} from './interface';
import {MyBookingsScreen} from '../screens/MyBookings';

interface DashProps {}

const Stack = createNativeStackNavigator<DashStackParamList>();

const DashStack: React.FC<DashProps> = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
        animationTypeForReplace: 'push',
        animationDuration: 200,
      }}>
      <Stack.Screen name="Tabs" component={BottomTabStack} />
      <Stack.Screen name="MyBookingScreen" component={MyBookingsScreen} />
      <Stack.Screen name="UserProfileScreen" component={UserProfileScreen} />
      <Stack.Screen name="AddProduct" component={AddProduct} />
    </Stack.Navigator>
  );
};

export default DashStack;
