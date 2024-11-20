import React, { useState } from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import BackgroundWrapper from '../components/BackgroundWrapper'
import CustomHeader from '../components/common/CustomHeader'
import { InfoBar } from '../components/Profile/InfoBar'
import { ProfilePhoto } from '../components/Profile/ProfilePhoto'
import { ProfileSection } from '../components/Profile/ProfileSection'
import { ProfileTabs } from '../components/Profile/ProfileTabs'
import { ProfileSelects } from '../utils/interface'
import { ListingSection } from '../components/Profile/ListingSection'
import { ReviewSection } from '../components/Profile/ReviewSection'

interface ProfileProps { }

export const ProfileScreen: React.FC<ProfileProps> = (props) => {

    const { } = props

    const [section, setSection] = useState<ProfileSelects>('profile')

    const onSelect = (key: ProfileSelects) => {
        setSection(key)
    }

    return (
        <BackgroundWrapper>
            <SafeAreaView style={styles.container} edges={["top"]}>
                <CustomHeader title='Profile' />
                <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 20 }}>
                    <ProfilePhoto />
                    <View style={styles.contentContainer}>
                        <InfoBar />
                        <ProfileTabs selected={section} onSelect={onSelect} />
                        {section === "profile" ? <ProfileSection /> : section === "listings" ? <ListingSection /> : <ReviewSection />}
                    </View>
                </ScrollView>
            </SafeAreaView>
        </BackgroundWrapper>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    contentContainer: {
        flex: 1,
        paddingHorizontal: 12,
        paddingTop: 12,
        gap: 15
    }
})