import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { AddorSwitchComponent } from '../components/AddorSwitchComponent'
import BackgroundWrapper from '../components/BackgroundWrapper'
import CustomButton from '../components/common/CustomButton'
import CustomHeader from '../components/common/CustomHeader'
import { TextSmall } from '../components/common/Texts'
import { DescriptiveRadio } from '../components/DescriptiveRadio'

interface GuestRequirementProps {

}

export const GuestRequirementScreen: React.FC<GuestRequirementProps> = (props) => {

    const { } = props

    const RENTAL_OPTIONS = [
        {
            id: "2",
            isRedirect: true,
            title: "Additional Instant Rental settings",
            description: "These settings are accessible when Instant Rental is activated. Renters who do not meet the specified requirements can still submit rental requests.",
            onRedirect: () => { }
        },
        {
            id: "3",
            isAdd: false,
            title: "Require a profile picture to book",
            description: "Restrict rental access to only those renters who have a clean rental history on Miamiluxe, free from any incidents or negative reviews.",
        },
        {
            id: "4",
            isAdd: false,
            title: "Require verified profile to book",
            description: "Make it mandatory for renters to read and acknowledge your message before finalizing their rental reservation.",
        },
    ]
    const desriptiveItem = {
        id: "1",
        isSelect: false,
        title: "Miamiluxe requirements",
        description: ["Confirmed email address", "Confirmed phone number", "Provide valid payment information"],
    }

    return (
        <BackgroundWrapper>
            <SafeAreaView edges={["top"]} style={styles.safeContainer}>
                <CustomHeader title='Guest Requirements' hideRightIcon />
                <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 12 }}>
                    <View style={styles.container}>
                        <TextSmall center>Before renting, your renters will consistently meet the following requirements.</TextSmall>
                        <View>
                            <DescriptiveRadio {...desriptiveItem} />
                            {RENTAL_OPTIONS.map((item) => (
                                <AddorSwitchComponent key={item.id} {...item} />
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