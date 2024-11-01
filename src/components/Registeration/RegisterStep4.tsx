/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Control, Controller} from 'react-hook-form';
import {StyleSheet, View} from 'react-native';
import CountryDropdown from '../CountryDropdown';
import {RegisterStepWrapper} from './RegisterStepWrapper';
import LocationSearchInput from '../LocationSearchInput';

interface Step4Props {
  incrementPage: () => void;
  control: Control;
}

export const RegisterStep4: React.FC<Step4Props> = props => {
  const {incrementPage, control} = props;

  const handleNext = () => {
    incrementPage();
  };

  return (
    <RegisterStepWrapper
      heading="PLEASE_YOUR_ADDRESS"
      onPressNext={handleNext}
      disableNextButton={false}>
      <View style={{paddingTop: 10, gap: 12}}>
        <Controller
          control={control}
          name="country"
          key="country"
          render={({field: {value, onChange}}) => (
            <CountryDropdown value={value} onChange={onChange} />
          )}
        />
        <Controller
          control={control}
          name="address"
          key={'address'}
          render={({field: {value, onChange}}) => (
            <LocationSearchInput value={value} onChange={onChange} />
          )}
        />
      </View>
    </RegisterStepWrapper>
  );
};

const styles = StyleSheet.create({});
