import React from 'react';
import { useAppSelector } from '../redux/store';
import AuthStack from './AuthStack';

const RootNavigation: React.FC = () => {
  const accessToken = useAppSelector(store => store.userSlice.accessToken);

  return <AuthStack />;
};

export default RootNavigation;
