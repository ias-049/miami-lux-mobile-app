import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { ProfileScreen } from '../../screens/Profile';

interface InboxStackProps { }

const Stack = createStackNavigator();

const InboxStack: React.FC<InboxStackProps> = props => {
  const { } = props;
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
    </Stack.Navigator>
  );
};

export default InboxStack;
