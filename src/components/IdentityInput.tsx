import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { TextBig, TextNormal, TextSmaller } from './common/Texts';
import { vs } from 'react-native-size-matters';
import { COLORS } from '../utils/theme';
import CustomIcon from './common/CustomIcon';
import LinearGradient from 'react-native-linear-gradient';

interface IdentityInputProps {

}

export const IdentityInput: React.FC<IdentityInputProps> = (props) => {

    const { } = props;

    return (
        <View style={styles.container}>
            <View style={styles.subContainer}>
                <View style={styles.textContainer}>
                    <TextNormal>Government ID</TextNormal>
                    <TextSmaller>Not provided</TextSmaller>
                </View>
                <TouchableOpacity >
                    <LinearGradient style={styles.iconContainer} colors={["#FF2CDF", "#482C7B"]}>
                        <CustomIcon name='plus' type='material-community' color='white' disabled />
                    </LinearGradient>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        gap: 10
    },
    subContainer: {
        borderRadius: 12,
        padding: 12,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: "#291538",
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
        borderRadius: 100
    }

});
