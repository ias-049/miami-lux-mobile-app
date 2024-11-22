import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { BookingPost } from './BookingPost';

interface HistoryBookingProps {

}

export const HistoryBooking: React.FC<HistoryBookingProps> = (props) => {

    const { } = props;

    return (
        <ScrollView showsVerticalScrollIndicator={false} style={{ marginTop: 10 }} contentContainerStyle={styles.bookingsContainer}>
            <BookingPost />
            <BookingPost />
            <BookingPost />
            <BookingPost />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    bookingsContainer: {
        gap: 10,
        paddingBottom: 20,
    }
});
