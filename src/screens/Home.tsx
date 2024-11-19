import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BackgroundWrapper from '../components/BackgroundWrapper'
import { SafeAreaView } from 'react-native-safe-area-context'
import CustomHeader from '../components/common/CustomHeader'
import { HomeSearch } from '../components/Home/HomeSearch'
import { scale, vs } from 'react-native-size-matters'
import { HomeTags } from '../components/Home/HomeTags'
import { Post } from '../components/Post'

interface HomeProps { }

export const HomeScreen: React.FC<HomeProps> = (props) => {

    const { } = props

    return (
        <BackgroundWrapper>
            <SafeAreaView style={styles.container} edges={["top"]}>
                <CustomHeader title="Home" />
                <HomeSearch />
                <ScrollView contentContainerStyle={styles.contentContainer} showsVerticalScrollIndicator={false}>
                    <HomeTags />
                    <Post />
                    <Post />
                    <Post />
                </ScrollView>
            </SafeAreaView>
        </BackgroundWrapper>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: scale(12),
    },
    contentContainer: {
        // flex: 1,
        gap: vs(10),
        paddingTop: vs(10)
    },
})