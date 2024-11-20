import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { ProfileScreen } from '../../screens/Profile';
import { PersonalInformationScreen } from '../../screens/PersonalInformation';

interface ProfileStackProps { }

const Stack = createStackNavigator();

const ProfileStack: React.FC<ProfileStackProps> = props => {
  const { } = props;
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
      <Stack.Screen name="PersonalInformationScreen" component={PersonalInformationScreen} />
    </Stack.Navigator>
  );
};

export default ProfileStack;
