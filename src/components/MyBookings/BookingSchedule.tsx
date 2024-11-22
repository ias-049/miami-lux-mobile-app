import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { TextNormal, TextSmall, TextSmaller } from '../common/Texts';
import CustomIcon from '../common/CustomIcon';
import { ms } from 'react-native-size-matters';

interface BookingScheduleProps {
    title: string;
    time: string;
    date: string;
}

export const BookingSchedule: React.FC<BookingScheduleProps> = (props) => {

    const { title, time, date } = props;

    return (
        <View style={styles.container}>
            <TextNormal>{title}</TextNormal>
            <View style={styles.datetimeRow}>
                <View style={styles.dateRow}>
                    <CustomIcon name='clock' type='feather' color='#883DDF' size={ms(17)} />
                    <TextSmaller>{time}</TextSmaller>
                </View>
                <View style={styles.dateRow}>
                    <CustomIcon name='calendar' type='font-awesome' color='#883DDF' size={ms(17)} />
                    <TextSmaller>{date}</TextSmaller>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#3C2156",
        borderRadius: 12,
        padding: 15,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    datetimeRow: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
    },
    dateRow: {
        flexDirection: "row",
        gap: 5, alignItems: "center"
    }
});
