import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import BackgroundWrapper from '../components/BackgroundWrapper'
import CustomButton from '../components/common/CustomButton'
import CustomHeader from '../components/common/CustomHeader'
import { DescriptiveRadio } from '../components/DescriptiveRadio'


interface CancellationPolicyProps {

}

export const CancellationPolicyScreen: React.FC<CancellationPolicyProps> = (props) => {

    const { } = props

    const CANCELLATION_OPTIONS = [
        {
            id: "1",
            isSelect: false,
            title: "Flexible",
            description: ["Free cancelation until 24 hours before the booking start date.", "Non-Refundable within 24 hours of the booking start date"],
        },
        {
            id: "2",
            title: "Moderate",
            description: ["Free cancelation until 7 days prior to booking start date", "50% Refund for cancellation 2-7 days before the booking start date", "Non-Refundable 6 days or less of the booking start date"],

        },
        {
            id: "3",
            title: "Firm",
            description: ["Free cancelation until 30 days prior to booking start date", "50% refund of booking charges between 14-30 days before booking start date", "Non-Refundable within 13 days of the booking start date"],
        },
    ]

    return (
        <BackgroundWrapper>
            <SafeAreaView edges={["top"]} style={styles.safeContainer}>
                <CustomHeader title='Cancellation Policy' hideRightIcon />
                <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 12 }}>
                    <View style={styles.container}>
                        <View style={{ gap: 10 }}>
                            {CANCELLATION_OPTIONS.map((item) => (
                                <DescriptiveRadio key={item.id} {...item} />
                            ))}
                        </View>
                    </View>
                    <View style={styles.buttonContainer}>
                        <CustomButton title='Save' />
                    </View>
                </ScrollView>
            </SafeAreaView>
        </BackgroundWrapper>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 12,
        gap: 12
    },
    safeContainer: {
        flex: 1,
    },
    buttonContainer: {
        padding: 16
    }
})