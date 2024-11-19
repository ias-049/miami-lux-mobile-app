import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { ms, scale, vs } from 'react-native-size-matters'
import { IMAGES } from '../utils/images'
import CustomIcon from './common/CustomIcon'
import { COLORS } from '../utils/theme'
import { TextBig, TextSmall } from './common/Texts'
import { NavigationProp, useNavigation } from '@react-navigation/native'

interface PostProps { }

export const Post: React.FC<PostProps> = (props) => {

    const { } = props
    const navigation: NavigationProp<any> = useNavigation()

    const onPressPost = () => navigation.navigate("PostDetailScreen")

    return (
        <TouchableOpacity style={styles.container} onPress={onPressPost}>
            <View style={styles.imgContainer}>
                <Image source={IMAGES.product} style={styles.productImage} />
                <View style={styles.absContainer}>
                    <TouchableOpacity style={styles.iconContainer}>
                        <CustomIcon name='bookmarks' color='black' type='ionicons' disabled size={ms(16)} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.iconContainer}>
                        <CustomIcon name='heart' color='red' type='antdesign' disabled size={ms(17)} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{ gap: 10, marginVertical: 10 }}>
                <View style={styles.row}>
                    <TextBig numberOfLines={1} color={COLORS.white}>Azimut 70' Fly</TextBig>
                    <TextSmall numberOfLines={1} color={"#615868"}>(43 Rentals)</TextSmall>
                </View>
                <View style={styles.row}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                        <TextSmall numberOfLines={1} color={"#615868"}>4.9</TextSmall>
                        <CustomIcon name='star' type='antdesign' color='yellow' disabled size={ms(15)} />
                        <TextSmall numberOfLines={1} color={"#615868"}>(43 Rentals)</TextSmall>
                    </View>
                    <TextSmall numberOfLines={1} color={"#615868"}>$ 3500/day</TextSmall>
                </View>
                <View style={styles.row}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 2 }}>
                        <CustomIcon name='location-pin' type='entypo' color='#615868' disabled size={ms(15)} />
                        <TextSmall numberOfLines={1} color={"#615868"}>Miami Beach, Florida</TextSmall>
                    </View>
                    <TextSmall numberOfLines={1} color={"#615868"}>$21,000 est. total</TextSmall>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#2F183D",
        borderRadius: 12,
        padding: scale(12)
    },
    imgContainer: {
        height: vs(130),
        width: '100%',
        borderRadius: 12,
        overflow: 'hidden'
    },
    productImage: {
        height: '100%',
        width: '100%',
    },
    absContainer: {
        position: "absolute",
        width: '100%',
        top: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10
    },
    iconContainer: {
        borderRadius: 100,
        height: ms(30),
        aspectRatio: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.white,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        // marginVertical: 10,
    }
})