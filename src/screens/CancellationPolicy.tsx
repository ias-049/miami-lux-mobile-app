import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import ReactNativeModal from 'react-native-modal';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import BackgroundWrapper from '../components/BackgroundWrapper';
import CustomButton from '../components/common/CustomButton';
import CustomHeader from '../components/common/CustomHeader';
import {DescriptiveRadio} from '../components/DescriptiveRadio';

interface CancellationPolicyProps {
  isVisible: boolean;
  closeModal: () => void;
}

export const CancellationPolicyModal: React.FC<
  CancellationPolicyProps
> = props => {
  const {isVisible, closeModal} = props;
  const handleSave = () => {
    closeModal();
  };

  const {top} = useSafeAreaInsets();

  const CANCELLATION_OPTIONS = [
    {
      id: '1',
      isSelect: false,
      title: 'Flexible',
      description: [
        'Free cancelation until 24 hours before the booking start date.',
        'Non-Refundable within 24 hours of the booking start date',
      ],
    },
    {
      id: '2',
      title: 'Moderate',
      description: [
        'Free cancelation until 7 days prior to booking start date',
        '50% Refund for cancellation 2-7 days before the booking start date',
        'Non-Refundable 6 days or less of the booking start date',
      ],
    },
    {
      id: '3',
      title: 'Firm',
      description: [
        'Free cancelation until 30 days prior to booking start date',
        '50% refund of booking charges between 14-30 days before booking start date',
        'Non-Refundable within 13 days of the booking start date',
      ],
    },
  ];

  return (
    <ReactNativeModal
      isVisible={isVisible}
      style={{margin: 0, height: '100%', width: '100%'}}>
      <BackgroundWrapper>
        <View style={[styles.safeContainer, {paddingTop: top}]}>
          <CustomHeader title="Cancellation Policy" hideRightIcon />
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{paddingBottom: 12}}>
            <View style={styles.container}>
              <View style={{gap: 10}}>
                {CANCELLATION_OPTIONS.map(item => (
                  <DescriptiveRadio key={item.id} {...item} />
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
