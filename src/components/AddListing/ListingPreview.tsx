import React from 'react';
import {StyleSheet, View} from 'react-native';
import {vs} from 'react-native-size-matters';
import CustomButton from '../common/CustomButton';
import {TextBig, TextSmaller} from '../common/Texts';

interface ListingPreviewProps {}

export const ListingPreview: React.FC<ListingPreviewProps> = props => {
  const {} = props;

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <TextBig>Listing Information</TextBig>
        <TextSmaller>
          This information will be visible to renters befor rental
        </TextSmaller>
      </View>
      <View>
        <CustomButton title="Preview" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 10,
    marginVertical: vs(10),
  },
  textContainer: {
    flex: 1,
    gap: vs(6),
  },
});
