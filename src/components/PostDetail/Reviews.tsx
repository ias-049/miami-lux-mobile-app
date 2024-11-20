import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TextNormal, TextSmall, TextSmaller } from '../common/Texts'
import CustomIcon from '../common/CustomIcon'
import { ms, scale, vs } from 'react-native-size-matters'
import { IMAGES } from '../../utils/images'
import { RatingStars } from '../RatingStars'

interface ReviewsProps {
    isVertical: boolean
}

interface ReviewProps {
}

export const Reviews: React.FC<ReviewsProps> = (props) => {
    const { isVertical } = props

    return (
        <View style={styles.container}>
            {isVertical ?
                <TextNormal textStyle={{ marginBottom: 15 }}>(149 Reviews)</TextNormal>
                : (
                    <View style={styles.headRow}>
                        <RatingStars />
                        <TextNormal>(149 Reviews)</TextNormal>
                    </View>
                )
            }
            <FlatList
                data={[{ id: "1", review: "sdfsdf" }, { id: "2", review: "sdfsdf" },]}
                keyExtractor={(item) => item.id}
                showsHorizontalScrollIndicator={false}
                horizontal={!isVertical}
                contentContainerStyle={{ gap: 10, alignItems: "center" }}
                // ItemSeparatorComponent={() => <View style={{ width: 10 }} />}
                renderItem={({ item }) => (
                    <Review />
                )}
            />
        </View>
    )
}
const Review: React.FC<ReviewProps> = (props) => {
    const { } = props

    return (
        <View style={styles.reviewContainer}>
            <View style={styles.infoBox}>
                <View style={styles.ownerContainer}>
                    <View style={styles.imgContainer}>
                        <Image source={IMAGES.photo} style={{ height: '100%', width: '100%' }} />
                    </View>
                    <View style={styles.nameContainer}>
                        <TextSmall bold>Annie Bres</TextSmall>
                        <View style={{ flexDirection: 'row', gap: 6, alignItems: 'center' }}>
                            <TextSmaller>4.9</TextSmaller>
                            <CustomIcon name='star' color='white' type='ionicons' size={ms(13)} />
                        </View>
                    </View>
                </View>
                <View style={styles.actionContainer}>
                    <TextSmaller color={"#615868"}>21 June 2022</TextSmaller>
                </View>
            </View>
            <TextSmall color={"#615868"}>I'm Annie Bens, your dedicated concierge. I specialize in curating unforgettable,  Show more</TextSmall>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
    },
    reviewContainer: {
        backgroundColor: "#1B0D27",
        padding: ms(12),
        borderRadius: 12,
        gap: 10,
        width: scale(300),
        height: vs(120)
    },
    infoBox: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    ownerContainer: {
        flexDirection: "row",
        alignItems: 'center',
        gap: 10
    },
    actionContainer: {},
    imgContainer: {
        width: ms(50),
        aspectRatio: 1,
        borderRadius: 100,
        overflow: 'hidden'
    },
    nameContainer: {
        gap: 10
    },
    iconContainer: {
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
        height: ms(40),
        aspectRatio: 1,
        backgroundColor: "#4A3CB026"
    },
    headRow: {
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: vs(20)
    }
})