import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { BookingPost } from './BookingPost';

interface InProgressBookingProps {

}

export const InProgressBooking: React.FC<InProgressBookingProps> = (props) => {

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
