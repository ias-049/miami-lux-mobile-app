import React from 'react';
import { useAppSelector } from '../redux/store';
import AuthStack from './AuthStack';
import DashStack from './DashStack';

const RootNavigation: React.FC = () => {
  const accessToken = useAppSelector(store => store.userSlice.accessToken);

  return <AuthStack />;
};

export default RootNavigation;
