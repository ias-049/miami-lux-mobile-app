import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { ms } from 'react-native-size-matters'
import { IMAGES } from '../../utils/images'
import { TextNormal, TextSmall } from '../common/Texts'
import CustomIcon from '../common/CustomIcon'
import { NavigationProp, useNavigation } from '@react-navigation/native'

interface OwnerDetailProps {

}

export const OwnerDetails: React.FC<OwnerDetailProps> = (props) => {

    const { } = props
    const navigation: NavigationProp<any> = useNavigation()

    const redirectUserProfile = () => navigation.navigate("UserProfileScreen")

    return (
        <View style={styles.container}>
            <View style={styles.infoBox}>
                <TouchableOpacity style={styles.ownerContainer} onPress={redirectUserProfile}>
                    <View style={styles.imgContainer}>
                        <Image source={IMAGES.photo} style={{ height: '100%', width: '100%' }} />
                    </View>
                    <View style={styles.nameContainer}>
                        <View style={{ flexDirection: 'row', gap: 6, alignItems: 'center' }}>
                            <TextNormal bold>Annie Bres</TextNormal>
                            <CustomIcon name='verified' color='#168FFF' type='material-icons' size={ms(18)} />
                        </View>
                        <View style={{ flexDirection: 'row', gap: 6, alignItems: 'center' }}>
                            <CustomIcon name='calendar' color='white' type='ionicons' size={ms(18)} />
                            <TextSmall>Joined in 2019</TextSmall>
                        </View>
                    </View>
                </TouchableOpacity>
                <View style={styles.actionContainer}>
                    <View style={styles.iconContainer}>
                        <CustomIcon name='message-processing-outline' color='#4F2F8B' type='material-community' size={ms(18)} />
                    </View>
                </View>
            </View>
            <TextNormal color={"#615868"}>I'm Annie Bens, your dedicated concierge. I specialize in curating unforgettable experiences just for you. Whether it's travel, dining, or entertainment, I'm your gateway to luxury and leisure. Let's elevate your lifestyle together, where exceptional service meets your desires. Show more</TextNormal>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#1B0D27",
        padding: ms(12),
        borderRadius: 12,
        gap: 10
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
        width: ms(70),
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
    }
})