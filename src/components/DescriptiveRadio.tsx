import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { ms, verticalScale, vs } from 'react-native-size-matters';
import { Switch } from 'react-native-switch';
import { COLORS } from '../utils/theme';
import CustomIcon from './common/CustomIcon';
import { TextNormal, TextSmall, TextSmaller } from './common/Texts';

interface DescriptiveRadioProps {
    isSelect?: boolean | undefined;
    id: string | number;
    title: string;
    description: string[];
}

export const DescriptiveRadio: React.FC<DescriptiveRadioProps> = (props) => {

    const { isSelect = true, title, description } = props;
    const [check, setCheck] = useState(false);

    const toggleSelect = () => setCheck(p => !p)

    return (
        <TouchableOpacity onPress={toggleSelect} disabled={!isSelect}>
            <LinearGradient style={styles.container} colors={["#4A3CB026", "#844AB24D"]}>
                <View style={styles.subContainer}>
                    <View style={styles.textContainer}>
                        <TextNormal>{title}</TextNormal>
                        {isSelect && <CustomIcon name={check ? 'radio-btn-active' : 'radio-btn-passive'} type='fontisto' color={COLORS.secondary} disabled size={ms(16)} />}
                    </View>
                    {description.map(text => (
                        <TextSmall textStyle={{ lineHeight: verticalScale(18), }}><TextSmaller>{'\u2B22'} </TextSmaller> {`${text}`}</TextSmall>
                    ))}
                </View>
            </LinearGradient>
        </TouchableOpacity>
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
        borderWidth: 0.2,
        borderColor: COLORS.secondary,
        gap: 7,
    },
    textContainer: {
        marginBottom: 4,
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    iconContainer: {
        height: vs(30),
        aspectRatio: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 100
    }

});
