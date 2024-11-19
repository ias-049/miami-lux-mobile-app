import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import BackgroundWrapper from '../components/BackgroundWrapper'
import { SafeAreaView } from 'react-native-safe-area-context'
import CustomHeader from '../components/common/CustomHeader'
import { ProfilePhoto } from '../components/Profile/ProfilePhoto'
import { InfoBar } from '../components/Profile/InfoBar'
import { ProfileTabs } from '../components/Profile/ProfileTabs'
import { ProfileSection } from '../components/Profile/ProfileSection'
import { ProfileSelects } from '../utils/interface'
import { CheckList } from '../components/Profile/CheckList'
import { CONFIRMED_INFO_LIST, LANGUAGE } from '../utils/constants'

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
                        <ProfileSection />
                        <CheckList list={CONFIRMED_INFO_LIST} title="Confirmed Information" />
                        <CheckList list={LANGUAGE} title="Language" />
                        <CheckList list={[{ id: "1", text: "Miami, FL", icon: "location-pin", iconType: "entypo" }]} title="Location" />
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