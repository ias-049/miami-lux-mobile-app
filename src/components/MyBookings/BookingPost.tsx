import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { IMAGES } from '../../utils/images';
import { ms, scale, verticalScale, vs } from 'react-native-size-matters';
import CustomButton from '../common/CustomButton';
import { TextNormal, TextSmall, TextSmaller } from '../common/Texts';
import CustomIcon from '../common/CustomIcon';
import { BookingSchedule } from './BookingSchedule';
import { COLORS } from '../../utils/theme';

interface BookingPostProps {

}

interface BookingPostStatusProp {

}

const BookPostStatus: React.FC<BookingPostStatusProp> = (props) => {
    return (
        <LinearGradient
            colors={[COLORS.primary, COLORS.secondary, COLORS.primary]}
            start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}
            useAngle
            style={styles.linearButton}
            angle={320}>
            <View style={styles.statusButton}>
                <TextSmaller>Completed</TextSmaller>
            </View>
        </LinearGradient>
    )
}

export const BookingPost: React.FC<BookingPostProps> = (props) => {

    const { } = props;

    return (
        <LinearGradient style={styles.linearContainer} colors={["#4A3CB026", "#844AB24D"]}>
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <Image source={IMAGES.product} style={styles.image} />
                    <View style={styles.btnContainer}>
                        {/* <CustomButton title='Completed' textSmall containerStyle={styles.button} />  */}
                        <BookPostStatus />
                    </View>
                </View>
                <View style={styles.subContainer}>
                    <View style={{ flexDirection: 'row', alignItems: "center", justifyContent: "space-between" }}>
                        <View style={styles.row}>
                            <TextNormal>Azimut 70' Fly</TextNormal>
                            <View style={{ flexDirection: 'row', gap: 6, alignItems: 'center' }}>
                                <TextSmall>4.9</TextSmall>
                                <CustomIcon name='star' color='#FEB31D' type='ionicons' size={ms(13)} />
                            </View>
                        </View>
                        <TextNormal>Price: $3500</TextNormal>
                    </View>
                    <View style={{ marginVertical: vs(9) }}>
                        <TextSmaller textStyle={{ lineHeight: verticalScale(15) }}>mattis aenean lacus  risus risus risus dui risus phasellus. Morbi ullamcorper tortor tristique porttitor. Read more...</TextSmaller>
                    </View>
                    <View style={styles.scheduleContainer}>
                        <BookingSchedule title='Starting Date' time='10:00 am' date='10-03-2023' />
                        <BookingSchedule title='Ending Date' time='10:00 am' date='10-03-2023' />
                    </View>
                </View>
            </View>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    linearContainer: {
        borderRadius: 12
    },
    container: {
        borderRadius: 12,
        padding: 12,
    },
    imageContainer: {
        height: vs(130),
        borderRadius: 12,
        overflow: "hidden"
    },
    image: {
        height: "100%",
        width: "100%",
    },
    btnContainer: {
        position: "absolute",
        right: 10,
        top: 10,
    },
    button: {
    },
    subContainer: {
        paddingTop: 12
    },
    row: {
        flexDirection: "row",
        gap: 10,
        alignItems: "flex-end"
    },
    scheduleContainer: {
        gap: 10,
        marginVertical: 10
    },
    linearButton: {
        borderRadius: 12,
    },
    statusButton: {
        borderRadius: 12,
        height: vs(30),
        paddingHorizontal: scale(10),
        alignItems: "center",
        justifyContent: "center",
    }
});
