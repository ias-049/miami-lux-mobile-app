import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { AuthStackParamList } from './interface';
import { RegisterScreen } from '../screens/Register';
import { VerifyOTPScreen } from '../screens/VerifyOTP';
import { DocumentSubmissionScreen } from '../screens/DocumentSubmission';
import { UserInfoScreen } from '../screens/UserInfo';
import { LoginScreen } from '../screens/Login';

const Stack = createStackNavigator<AuthStackParamList>();

const AuthStack: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="VerifyOTP" component={VerifyOTPScreen} />
      <Stack.Screen name="SubmitDocument" component={DocumentSubmissionScreen} />
      <Stack.Screen name="UserInfo" component={UserInfoScreen} />
    </Stack.Navigator>
  );
};

export default AuthStack;
