import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
import {ScrollView, StyleSheet, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ms} from 'react-native-size-matters';
import {ListingPreview} from '../components/AddListing/ListingPreview';
import {UploadListingImage} from '../components/AddListing/UploadListingImage';
import BackgroundWrapper from '../components/BackgroundWrapper';
import CustomHeader from '../components/common/CustomHeader';
import Fields from '../components/common/Fields';
import {GroupList, ListItemType} from '../components/Profile/GroupList';
import {RentalModal} from './Rentals';
import {CancellationPolicyModal} from './CancellationPolicy';
import {GuestRequirementModal} from './GuestRequirement';
import CustomButton from '../components/common/CustomButton';

interface AddProductProps {}

const AddProduct: React.FC<AddProductProps> = props => {
  const {} = props;

  const {control} = useForm();

  const [rentalModal, setRentalModal] = useState(false);
  const [cancellationModal, setCancellationModal] = useState(false);
  const [guestReqModal, setGuestReqModal] = useState(false);

  const closeRentalModal = () => setRentalModal(false);
  const closeGuestModal = () => setGuestReqModal(false);
  const closeCancellationModal = () => setCancellationModal(false);

  const openRentalModal = () => setRentalModal(true);
  const openGuestModal = () => setGuestReqModal(true);
  const openCancellationModal = () => setCancellationModal(true);

  const FIELDS = [
    {
      id: '1',
      name: 'title',
      type: 'text',
      placeholder: 'Title',
      containerStyle: {borderColor: 'transparent'},
      placeholderTextColor: 'white',
    },
    {
      id: '2',
      name: 'description',
      type: 'textarea',
      placeholder: 'Description',
      containerStyle: {borderColor: 'transparent'},
      placeholderTextColor: 'white',
    },
    {
      id: '3',
      name: 'category',
      type: 'dropdown',
      placeholder: 'Category',
      containerStyle: {borderColor: 'transparent'},
      placeholderTextColor: 'white',
      lists: [{label: 'Category 1', value: 'cat-1'}],
      dropDownType: 'FLATLIST',
    },
    {
      id: '4',
      name: 'location',
      type: 'text',
      placeholder: 'Location',
      containerStyle: {borderColor: 'transparent'},
      placeholderTextColor: 'white',
      icon: {
        name: 'location-pin',
        type: 'entypo',
        color: 'white',
        size: ms(18),
      },
    },
    {
      id: '5',
      name: 'personalized_link',
      type: 'text',
      placeholder: 'Generate Personalized link',
      containerStyle: {borderColor: 'transparent'},
      placeholderTextColor: 'white',
    },
  ];

  const MANAGEMENT_LIST = [
    {
      id: '1',
      text: 'List Online',
      onPress: function (): void {
        throw new Error('Function not implemented.');
      },
    },
  ];
  const BOOKING_LIST = [
    {
      id: '1',
      text: 'Rental Options',
      onPress: openRentalModal,
    },
    {
      id: '2',
      text: 'Guest Requirements',
      onPress: openGuestModal,
    },
    {
      id: '3',
      text: 'Cancellation Policy',
      onPress: openCancellationModal,
    },
  ];

  const handleSave = () => {};

  return (
    <BackgroundWrapper>
      <SafeAreaView style={styles.safeContainer} edges={['top']}>
        <CustomHeader title="Add Listing" cgb />
        <ScrollView
          contentContainerStyle={styles.container}
          showsVerticalScrollIndicator={false}>
          <ListingPreview />
          <UploadListingImage />
          <Fields control={control} fields={FIELDS} />
          <View style={{gap: 10}}>
            <GroupList title="Booking" list={BOOKING_LIST} secondary />
            <GroupList title="Management" list={MANAGEMENT_LIST} secondary />
          </View>
          <CustomButton
            title="Save"
            onPress={handleSave}
            containerStyle={{marginTop: 10}}
          />
        </ScrollView>
      </SafeAreaView>

      <RentalModal isVisible={rentalModal} closeModal={closeRentalModal} />
      <CancellationPolicyModal
        isVisible={cancellationModal}
        closeModal={closeCancellationModal}
      />
      <GuestRequirementModal
        isVisible={guestReqModal}
        closeModal={closeGuestModal}
      />
    </BackgroundWrapper>
  );
};

export default AddProduct;

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
  },
  container: {
    paddingHorizontal: 12,
    paddingBottom: 50,
  },
});
