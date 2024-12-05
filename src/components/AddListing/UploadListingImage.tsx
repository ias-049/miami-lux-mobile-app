import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {vs} from 'react-native-size-matters';
import UploadListingIcon from '../../assets/images/uploadlisting.svg';
import {TextNormal} from '../common/Texts';

interface UploadListingImageProps {}

export const UploadListingImage: React.FC<UploadListingImageProps> = props => {
  const {} = props;

  return (
    <View style={styles.container}>
      <View style={styles.noImageContainer}>
        <UploadListingIcon />
        <TextNormal center>Upload an Image</TextNormal>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    marginBottom: vs(10),
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    height: vs(150),
  },
  noImageContainer: {
    alignItems: 'center',
    gap: 15,
  },
});
