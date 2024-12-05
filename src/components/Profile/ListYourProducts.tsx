import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {vs} from 'react-native-size-matters';
import {COLORS} from '../../utils/theme';
import CustomIcon from '../common/CustomIcon';
import {TextNormal, TextSmaller} from '../common/Texts';
import {NavigationProp, useNavigation} from '@react-navigation/native';

interface ListYourProductsProps {}

export const ListYourProducts: React.FC<ListYourProductsProps> = props => {
  const {} = props;

  const navigation: NavigationProp<any> = useNavigation();

  const redirectToAddListing = () => navigation.navigate('AddProduct');

  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <View style={styles.textContainer}>
          <TextNormal>List your products</TextNormal>
          <TextSmaller>{`Get started and begin earning \nby listing your products.`}</TextSmaller>
        </View>
        <TouchableOpacity onPress={redirectToAddListing}>
          <LinearGradient
            style={styles.iconContainer}
            colors={['#FF2CDF', '#482C7B']}>
            <CustomIcon
              name="plus"
              type="material-community"
              color="white"
              disabled
            />
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    gap: 10,
  },
  subContainer: {
    borderRadius: 12,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#291538',
    borderWidth: 0.2,
    borderColor: COLORS.secondary,
  },
  textContainer: {
    gap: 5,
  },
  iconContainer: {
    height: vs(30),
    aspectRatio: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
  },
});
