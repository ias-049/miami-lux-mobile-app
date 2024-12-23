import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { MessagingScreen } from '../../screens/Messaging';

interface InboxStackProps { }

const Stack = createNativeStackNavigator();

const InboxStack: React.FC<InboxStackProps> = props => {
  const { } = props;
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
        animationTypeForReplace: 'push',
        animationDuration: 200,
      }}>
      <Stack.Screen name="Messaging" component={MessagingScreen} />
    </Stack.Navigator>
  );
};

export default InboxStack;
