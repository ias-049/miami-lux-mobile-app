import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { scale, vs } from 'react-native-size-matters';
import { IMAGES } from '../../utils/images';
import { COLORS } from '../../utils/theme';
import { TextNormal, TextSmall, TextSmaller } from '../common/Texts';
import { useNavigation, NavigationProp } from '@react-navigation/native'

interface ChatItemProps {

}

export const ChatItem: React.FC<ChatItemProps> = (props) => {

    const { } = props;
    const navigation: NavigationProp<any> = useNavigation()

    const redirectToInbox = () => navigation.navigate("InboxScreen")

    return (
        <TouchableOpacity style={styles.container} onPress={redirectToInbox}>
            <View style={styles.avatarContainer}>
                <Image source={IMAGES.photo} style={styles.image} />
            </View>
            <View style={styles.textContainer}>
                <TextNormal>Brooklyn Simmons</TextNormal>
                <TextSmall color={"#615868"}>{`"${"I am ready to help"}"`}</TextSmall>
            </View>
            <View style={styles.numberContainer}>
                <TextSmaller>21 min ago</TextSmaller>
                <View style={styles.messageCountContainer}>
                    <TextSmaller color={COLORS.white}>1</TextSmaller>
                </View>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        padding: 5,
        alignItems: "center",
        height: vs(70),
        gap: 15
    },
    image: { height: "100%", width: '100%' },
    avatarContainer: {
        height: vs(50),
        aspectRatio: 1,
        borderRadius: 100,
        overflow: "hidden"
    },
    textContainer: {
        // height: vs(60),
        gap: 15,
        flex: 1
    },
    numberContainer: {
        // width: scale(20),
        height: "100%",
        alignItems: "flex-end",
        justifyContent: "space-evenly"
    },
    messageCountContainer: {
        backgroundColor: "#4F2F8B",
        borderRadius: 100,
        width: scale(18),
        aspectRatio: 1,
        alignItems: "center",
        justifyContent: "center"
    }
});
