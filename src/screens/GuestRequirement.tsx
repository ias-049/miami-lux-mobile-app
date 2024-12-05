import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import ReactNativeModal from 'react-native-modal';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {AddorSwitchComponent} from '../components/AddorSwitchComponent';
import BackgroundWrapper from '../components/BackgroundWrapper';
import CustomButton from '../components/common/CustomButton';
import CustomHeader from '../components/common/CustomHeader';
import {TextSmall} from '../components/common/Texts';
import {DescriptiveRadio} from '../components/DescriptiveRadio';

interface GuestRequirementProps {
  isVisible: boolean;
  closeModal: () => void;
}

export const GuestRequirementModal: React.FC<
  GuestRequirementProps
> = props => {
  const {isVisible, closeModal} = props;
  const handleSave = () => {
    closeModal();
  };

  const {top} = useSafeAreaInsets();

  const RENTAL_OPTIONS = [
    {
      id: '2',
      isRedirect: true,
      title: 'Additional Instant Rental settings',
      description:
        'These settings are accessible when Instant Rental is activated. Renters who do not meet the specified requirements can still submit rental requests.',
      onRedirect: () => {},
    },
    {
      id: '3',
      isAdd: false,
      title: 'Require a profile picture to book',
      description:
        'Restrict rental access to only those renters who have a clean rental history on Miamiluxe, free from any incidents or negative reviews.',
    },
    {
      id: '4',
      isAdd: false,
      title: 'Require verified profile to book',
      description:
        'Make it mandatory for renters to read and acknowledge your message before finalizing their rental reservation.',
    },
  ];
  const desriptiveItem = {
    id: '1',
    isSelect: false,
    title: 'Miamiluxe requirements',
    description: [
      'Confirmed email address',
      'Confirmed phone number',
      'Provide valid payment information',
    ],
  };

  return (
    <ReactNativeModal
      isVisible={isVisible}
      style={{margin: 0, height: '100%', width: '100%'}}>
      <BackgroundWrapper>
        <View style={[styles.safeContainer, {paddingTop: top}]}>
          <CustomHeader title="Guest Requirements" hideRightIcon />
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{paddingBottom: 12}}>
            <View style={styles.container}>
              <TextSmall center>
                Before renting, your renters will consistently meet the
                following requirements.
              </TextSmall>
              <View>
                <DescriptiveRadio {...desriptiveItem} />
                {RENTAL_OPTIONS.map(item => (
                  <AddorSwitchComponent key={item.id} {...item} />
                ))}
              </View>
            </View>
            <View style={styles.buttonContainer}>
              <CustomButton title="Save" onPress={handleSave} />
            </View>
          </ScrollView>
        </View>
      </BackgroundWrapper>
    </ReactNativeModal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 12,
    gap: 12,
  },
  safeContainer: {
    flex: 1,
  },
  buttonContainer: {
    padding: 16,
  },
});
