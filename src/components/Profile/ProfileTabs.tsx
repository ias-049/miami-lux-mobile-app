import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import CustomButton from '../common/CustomButton';
import { scale, vs } from 'react-native-size-matters';
import { ProfileSelects } from '../../utils/interface';

interface ProfileTabsProps {
    selected: ProfileSelects;
    onSelect: (key: ProfileSelects) => void
}

export const ProfileTabs: React.FC<ProfileTabsProps> = (props) => {

    const { selected, onSelect } = props;

    return (
        <View style={styles.container}>
            <CustomButton title='Profile' secondary={selected !== "profile"} containerStyle={styles.selector} onPress={() => onSelect("profile")} />
            <CustomButton title='Listings' secondary={selected !== "listings"} containerStyle={styles.selector} onPress={() => onSelect("listings")} />
            <CustomButton title='Reviews' secondary={selected !== "reviews"} containerStyle={styles.selector} onPress={() => onSelect("reviews")} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        borderRadius: 12,
        padding: 8,
        backgroundColor: "#291538",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly",
        gap: 10
    },
    selector: {
        height: vs(30),
        width: scale(95)
    }
});
