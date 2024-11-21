import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { PersonalInformationScreen } from '../../screens/PersonalInformation';
import { ProfileScreen } from '../../screens/Profile';

interface ProfileStackProps { }

const Stack = createNativeStackNavigator();

const ProfileStack: React.FC<ProfileStackProps> = props => {
  const { } = props;
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
        animationTypeForReplace: 'push',
        animationDuration: 200,
      }}>
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
      <Stack.Screen name="PersonalInformationScreen" component={PersonalInformationScreen} />
    </Stack.Navigator>
  );
};

export default ProfileStack;
