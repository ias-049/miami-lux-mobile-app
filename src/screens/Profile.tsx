import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import BackgroundWrapper from '../components/BackgroundWrapper';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomHeader from '../components/common/CustomHeader';
import { ProfilePhoto } from '../components/ProfilePhoto';
import { ListYourProducts } from '../components/Profile/ListYourProducts';
import { ms } from 'react-native-size-matters';
import { GroupList, ListItemType } from '../components/Profile/GroupList';
import CustomIcon from '../components/common/CustomIcon';
import { TextSmall } from '../components/common/Texts';
import { NavigationProp } from '@react-navigation/native';

interface ProfileScreenProps {
  navigation: NavigationProp<any>;
}

export const ProfileScreen: React.FC<ProfileScreenProps> = props => {
  const { navigation } = props;

  const redirectToPersonalInfo = () =>
    navigation.navigate('PersonalInformationScreen');

  const ACCOUNT_LIST: ListItemType[] = [
    {
      id: '1',
      icon: { name: 'person', type: 'ionicons', color: '#883DDF', size: ms(16) },
      text: 'Personal Information',
      onPress: redirectToPersonalInfo,
    },
    {
      id: '2',
      icon: {
        name: 'bell',
        type: 'font-awesome-6',
        color: '#883DDF',
        size: ms(16),
      },
      text: 'Notifications',
      onPress: function (): void {

      },
    },
    {
      id: '3',
      icon: {
        name: 'language',
        type: 'ionicons',
        color: '#883DDF',
        size: ms(16),
      },
      text: 'Language',
      onPress: function (): void {

      },
    },
    {
      id: '4',
      icon: {
        name: 'shield-lock',
        solid: true,
        type: 'octicon',
        color: '#883DDF',
        size: ms(16),
      },
      text: 'Login & Security',
      onPress: function (): void {

      },
    },
  ];
  const LISTING_LIST: ListItemType[] = [
    {
      id: '1',
      icon: { name: 'person', type: 'ionicons', color: '#883DDF', size: ms(16) },
      text: 'Switch to Listings',
      onPress: function (): void {

      },
    },
    {
      id: '2',
      icon: {
        name: 'bell',
        type: 'font-awesome-6',
        color: '#883DDF',
        size: ms(16),
      },
      text: 'Add a Listing',
      onPress: function (): void {

      },
    },
  ];
  const REFERRAL_LIST: ListItemType[] = [
    {
      id: '1',
      icon: { name: 'person', type: 'ionicons', color: '#883DDF', size: ms(16) },
      text: 'Referrals & Commissions',
      description: '5% commission on every transaction made for life',
      onPress: function (): void {

      },
    },
  ];
  const SUPPORT_LIST: ListItemType[] = [
    {
      id: '1',
      icon: { name: 'person', type: 'ionicons', color: '#883DDF', size: ms(16) },
      text: 'How Miamiluxe works',
      onPress: function (): void {

      },
    },
    {
      id: '2',
      icon: { name: 'person', type: 'ionicons', color: '#883DDF', size: ms(16) },
      text: 'Contact Us',
      onPress: function (): void {

      },
    },
    {
      id: '3',
      icon: { name: 'person', type: 'ionicons', color: '#883DDF', size: ms(16) },
      text: 'Give us Feedback',
      onPress: function (): void {

      },
    },
  ];
  const LEGAL_LIST: ListItemType[] = [
    {
      id: '1',
      icon: { name: 'person', type: 'ionicons', color: '#883DDF', size: ms(16) },
      text: 'Terms of Service',
      onPress: function (): void {

      },
    },
    {
      id: '2',
      icon: { name: 'person', type: 'ionicons', color: '#883DDF', size: ms(16) },
      text: 'Terms and Conditions',
      onPress: function (): void {

      },
    },
    {
      id: '3',
      icon: { name: 'person', type: 'ionicons', color: '#883DDF', size: ms(16) },
      text: 'Privacy Policy',
      onPress: function (): void {

      },
    },
  ];

  return (
    <BackgroundWrapper>
      <SafeAreaView style={styles.container} edges={['top']}>
        <CustomHeader title="Profile" />
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 20 }}>
          <ProfilePhoto />
          <View style={styles.contentContainer}>
            <ListYourProducts />
            <GroupList title="Account" list={ACCOUNT_LIST} />
            <GroupList title="Listing" list={LISTING_LIST} />
            <GroupList title="Referrals" list={REFERRAL_LIST} />
            <GroupList title="Support" list={SUPPORT_LIST} />
            <GroupList title="Legal" list={LEGAL_LIST} />
            <TouchableOpacity style={styles.logout}>
              <CustomIcon
                name="logout"
                type="antdesign"
                disabled
                color="#878787"
                size={ms(16)}
              />
              <TextSmall color="#878787">Logout</TextSmall>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    </BackgroundWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    padding: ms(12),
    gap: 20,
  },
  logout: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
});
