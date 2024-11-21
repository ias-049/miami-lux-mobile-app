import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { verticalScale, vs } from 'react-native-size-matters';
import { Switch } from 'react-native-switch';
import { COLORS } from '../utils/theme';
import CustomIcon from './common/CustomIcon';
import { TextNormal, TextSmaller } from './common/Texts';

interface AddorSwitchComponentProps {
    isAdd?: boolean | undefined;
    isRedirect?: boolean | undefined;
    id: string | number;
    title: string;
    description: string;
    onRedirect?: () => void
}

export const AddorSwitchComponent: React.FC<AddorSwitchComponentProps> = (props) => {

    const { isAdd, title, description, isRedirect, onRedirect } = props;
    const [check, setCheck] = useState(false);

    return (
        <TouchableOpacity onPress={onRedirect} disabled={typeof onRedirect !== 'function'}>
            <LinearGradient style={styles.container} colors={["#4A3CB026", "#844AB24D"]}>
                <View style={styles.subContainer}>
                    <View style={styles.textContainer}>
                        <TextNormal>{title}</TextNormal>
                        <TouchableOpacity >
                            {isRedirect ? <></> : isAdd ? (
                                <LinearGradient style={styles.iconContainer} colors={["#FF2CDF", "#482C7B"]}>
                                    <CustomIcon name='plus' type='material-community' color='white' disabled />
                                </LinearGradient>
                            ) :
                                <LinearGradient
                                    start={{ x: 0, y: 0 }}
                                    end={{ x: 1, y: 0 }}
                                    colors={['#4A3CB026', '#FC2CDD', '#4A3CB026']}
                                    style={{ borderRadius: 20 }}>
                                    <Switch
                                        circleBorderWidth={0}
                                        circleSize={13}
                                        value={check}
                                        onValueChange={() => setCheck(!check)}
                                        activeText={''}
                                        inActiveText={''}
                                        backgroundActive={'transparent'}
                                        backgroundInactive={'#EEEEEE'}
                                        circleInActiveColor='#A7A3AB'
                                        switchBorderRadius={14}
                                        switchLeftPx={2}
                                        switchRightPx={2}
                                        barHeight={20}
                                        switchWidthMultiplier={3}
                                    />
                                </LinearGradient>
                            }
                        </TouchableOpacity>
                    </View>
                    <TextSmaller textStyle={{ lineHeight: verticalScale(18) }}>{`${description}`}</TextSmaller>
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
