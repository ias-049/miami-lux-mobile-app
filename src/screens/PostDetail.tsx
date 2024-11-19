import { FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import BackgroundWrapper from '../components/BackgroundWrapper'
import { SafeAreaView } from 'react-native-safe-area-context'
import CustomHeader from '../components/common/CustomHeader'
import { NavigationProp } from '@react-navigation/native'
import { IMAGES } from '../utils/images'
import { ms, vs } from 'react-native-size-matters'
import CustomIcon from '../components/common/CustomIcon'
import Pagination from '../components/Pagination'
import { PhotoCarousel } from '../components/PostDetail/PhotoCarousel'
import { PostInfo } from '../components/PostDetail/PostInfo'
import { DescriptionBox } from '../components/PostDetail/DescriptionBox'
import { OwnerDetails } from '../components/PostDetail/OwnerDetails'
import { RatingStars } from '../components/RatingStars'
import { TextNormal } from '../components/common/Texts'
import { Reviews } from '../components/PostDetail/Reviews'
import { BookOrder } from '../components/PostDetail/BookOrder'

interface PostDetailProps {
    navigation: NavigationProp<any>
}

export const PostDetailScreen: React.FC<PostDetailProps> = (props) => {

    const { navigation } = props

    const goBack = () => navigation.goBack()

    return (
        <BackgroundWrapper>
            <SafeAreaView style={styles.container} edges={["top"]}>
                <CustomHeader title='Product Detail' cgb onPressBack={goBack} />
                <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: vs(20) }}>
                    <PhotoCarousel />
                    <View style={styles.contentContainer}>
                        <PostInfo />
                        <DescriptionBox />
                        <OwnerDetails />
                        <Reviews />
                        <BookOrder />
                    </View>
                </ScrollView>
            </SafeAreaView>
        </BackgroundWrapper>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    contentContainer: {
        flex: 1,
        paddingHorizontal: ms(12),
        paddingTop: ms(12),
        gap: 10
    },

})