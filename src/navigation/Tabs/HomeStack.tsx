import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { HomeScreen } from '../../screens/Home';
import { PostDetailScreen } from '../../screens/PostDetail';

interface HomeStackProps { }

const Stack = createStackNavigator();

export const HomeStack: React.FC<HomeStackProps> = props => {
  const { } = props;
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="PostDetailScreen" component={PostDetailScreen} />
    </Stack.Navigator>
  );
};
