/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { View } from 'react-native';
import { vs } from 'react-native-size-matters';
import BookmarkSVG from '../assets/images/bookmark.svg';
import HomeSVG from '../assets/images/home.svg';
import MessageSVG from '../assets/images/message-2.svg';
import ProfileSVG from '../assets/images/profile.svg';
import RentalSVG from '../assets/images/rentals.svg';
import { TextSmall } from '../components/common/Texts';
import { COLORS } from '../utils/theme';
import { TabList, TabStackParamList } from './interface';
import { HomeStack } from './Tabs/HomeStack';
import InboxStack from './Tabs/InboxStack';
import { ListingsStack } from './Tabs/ListingsStack';
import ProfileStack from './Tabs/ProfileStack';
import { RentalStack } from './Tabs/RentalsStack';

const Tab = createBottomTabNavigator<TabStackParamList>();

const TABS: TabList[] = [
  {
    id: 1,
    label: 'Home',
    icon: (props: any) => <HomeSVG {...props} />,
    component: HomeStack,
  },
  {
    id: 2,
    label: 'Listings',
    icon: (props: any) => <BookmarkSVG {...props} />,
    component: ListingsStack,
  },
  {
    id: 1,
    label: 'Rentals',
    component: RentalStack,
    icon: (props: any) => <RentalSVG {...props} />,
  },
  {
    id: 1,
    label: 'Inbox',
    component: InboxStack,
    icon: (props: any) => <MessageSVG {...props} />,
  },
  {
    id: 1,
    label: 'Profile',
    component: ProfileStack,
    icon: (props: any) => <ProfileSVG {...props} />,
  },
];

const BottomTabStack: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#170A22",
          borderTopColor: '#DCDBCD',
          height: vs(65),
        },
        tabBarHideOnKeyboard: true
      }}>
      {TABS.map(tab => (
        <Tab.Screen
          key={tab.id}
          name={tab.label}
          component={tab.component}
          options={{
            tabBarIcon: ({ focused, color, size }) =>
            (<View style={
              {
                shadowColor: COLORS.white,
              }
            }>
              {tab.icon({ color: focused ? COLORS.secondary : COLORS.white })}
            </View>),
            tabBarLabel: ({ children, focused, position }) => (
              <TextSmall
                bold={focused}
                color={focused ? "#844AB2" : "#615868"}>
                {children}
              </TextSmall>
            ),
          }}
        />
      ))}
    </Tab.Navigator>
  );
};

export default BottomTabStack;
