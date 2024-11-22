import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React, { useRef, useState } from 'react';
import BackgroundWrapper from '../components/BackgroundWrapper';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomHeader from '../components/common/CustomHeader';
import { MyBookingTabs } from '../components/MyBookings/MyBookingTabs';
import { scale, vs } from 'react-native-size-matters';
import { BookingPost } from '../components/MyBookings/BookingPost';
import PagerView from 'react-native-pager-view'
import { RequestBooking } from '../components/MyBookings/RequestBooking';
import { InProgressBooking } from '../components/MyBookings/inProgressBooking';
import { CalendarBooking } from '../components/MyBookings/CalendarBooking';
import { HistoryBooking } from '../components/MyBookings/HistoryBooking';

interface MyBookingsProps {

}

export const MyBookingsScreen: React.FC<MyBookingsProps> = (props) => {

    const { } = props;
    const [page, setPage] = useState(0)
    const pageRef = useRef<PagerView>(null)
    const onSelectTab = (ind: number) => {
        console.log("IND", ind)
        pageRef.current?.setPage(ind)
    }

    return (
        <BackgroundWrapper>
            <SafeAreaView style={styles.safeContainer} edges={["bottom"]}>
                <CustomHeader title="My Bookings" cgb />
                <View style={styles.container}>
                    <MyBookingTabs activePage={page} onSelectTab={onSelectTab} />
                    <PagerView ref={pageRef} style={styles.pagerView} pageMargin={20} onPageScroll={(e) => setPage(e.nativeEvent.position)}>
                        <RequestBooking key="request" />
                        <InProgressBooking key="in-progress" />
                        <CalendarBooking key="calendar" />
                        <HistoryBooking key="history" />
                    </PagerView>

                </View>
            </SafeAreaView>
        </BackgroundWrapper>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: scale(12),
        paddingTop: vs(15),
    },
    safeContainer: {
        flex: 1,
    },
    pagerView: {
        flex: 1,
    },
});
