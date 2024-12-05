import React from 'react';
import {StyleSheet, View} from 'react-native';
import ReactNativeModal from 'react-native-modal';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {AddorSwitchComponent} from '../components/AddorSwitchComponent';
import BackgroundWrapper from '../components/BackgroundWrapper';
import CustomButton from '../components/common/CustomButton';
import CustomHeader from '../components/common/CustomHeader';

interface RentalProps {
  isVisible: boolean;
  closeModal: () => void;
}

export const RentalModal: React.FC<RentalProps> = props => {
  const {isVisible, closeModal} = props;
  const handleSave = () => {
    closeModal();
  };

  const {top} = useSafeAreaInsets();

  const RENTAL_OPTIONS = [
    {
      id: '1',
      isAdd: false,
      title: 'Instant Rental',
      description:
        'When this option is enabled, rentals are automatically accepted. However, when it is turned off, you will have to manually accept or decline rental requests.',
    },
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
      title: 'Good past rental history',
      description:
        'Restrict rental access to only those renters who have a clean rental history on Miamiluxe, free from any incidents or negative reviews.',
    },
    {
      id: '4',
      isAdd: true,
      title: 'Pre-rental message',
      description:
        'Make it mandatory for renters to read and acknowledge your message before finalizing their rental reservation.',
    },
  ];

  return (
    <ReactNativeModal
      isVisible={isVisible}
      style={{margin: 0, height: '100%', width: '100%'}}>
      <BackgroundWrapper>
        <View style={[styles.safeContainer, {paddingTop: top}]}>
          <CustomHeader title="Rental Options" hideRightIcon />
          <View style={styles.container}>
            {RENTAL_OPTIONS.map(item => (
              <AddorSwitchComponent key={item.id} {...item} />
            ))}
          </View>
          <View style={styles.buttonContainer}>
            <CustomButton title="Save" onPress={handleSave} />
          </View>
        </View>
      </BackgroundWrapper>
    </ReactNativeModal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 12,
  },
  safeContainer: {
    flex: 1,
  },
  buttonContainer: {
    padding: 16,
  },
});
