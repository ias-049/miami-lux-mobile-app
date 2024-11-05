import { StackScreenProps } from '@react-navigation/stack';

export type AuthStackParamList = {
  Login: undefined;
  UserInfo: undefined;
  Register: undefined;
  SubmitDocument: undefined;
  VerifyOTP: undefined;
};

export type TabStackParamList = {};

export type DashStackParamList = {};

export type DashStackProps<Screen extends keyof DashStackParamList> =
  StackScreenProps<DashStackParamList, Screen>;

export type AuthStackProps<Screen extends keyof AuthStackParamList> =
  StackScreenProps<AuthStackParamList, Screen>;

export type TabStackProps<Screen extends keyof TabStackParamList> =
  StackScreenProps<TabStackParamList, Screen>;

export interface TabList {
  id: number;
  label: '';
  icon: any;
  component: React.FC<any>;
}
