import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { HomeScreen } from '../../screens/Home';
import { PostDetailScreen } from '../../screens/PostDetail';

interface HomeStackProps { }

const Stack = createNativeStackNavigator();

export const HomeStack: React.FC<HomeStackProps> = props => {
  const { } = props;
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
        animationTypeForReplace: 'push',
        animationDuration: 200,
      }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="PostDetailScreen" component={PostDetailScreen} />
    </Stack.Navigator>
  );
};
