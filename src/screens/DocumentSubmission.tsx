import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BackgroundWrapper from '../components/BackgroundWrapper'
import { SafeAreaView } from 'react-native-safe-area-context'
import CustomHeader from '../components/common/CustomHeader'
import { TextNormal, TextSmall } from '../components/common/Texts'
import { scale, vs } from 'react-native-size-matters'
import { COLORS } from '../utils/theme'
import { NavigationProp } from '@react-navigation/native'
import CustomButton from '../components/common/CustomButton'
import IDFrontSVG from '../assets/images/idfront.svg'
import IDBackSVG from '../assets/images/idback.svg'

interface Props {
    navigation: NavigationProp<any>
}

export const DocumentSubmissionScreen: React.FC<Props> = (props) => {

    const { navigation } = props

    const onPressBack = () => navigation.goBack()
    const onPressNext = () => navigation.navigate("UserInfo")

    return (
        <BackgroundWrapper>
            <SafeAreaView style={styles.container}>
                <CustomHeader title="Miami Lux" cgb onPressBack={onPressBack} />
                <View style={styles.contentContainer}>
                    <View style={styles.pageInfoContainer}>
                        <TextNormal center bold>Document Submission</TextNormal>
                        <TextSmall center >Take a picture of your government ID Card</TextSmall>
                    </View>
                    <View style={styles.formContainer}>
                        <IDFrontSVG />
                        <IDBackSVG />
                    </View>
                    <View style={styles.bottomContainer}>
                        <CustomButton title='Next' containerStyle={{ marginVertical: 20 }} onPress={onPressNext} />
                    </View>
                </View>
            </SafeAreaView>
        </BackgroundWrapper>
    )
}

const styles = StyleSheet.create({
    container: { flex: 1 },
    pageInfoContainer: {
        gap: vs(10),
        paddingTop: vs(20)
    },
    formContainer: {
        paddingTop: vs(20),
        gap: 26,
        alignItems: 'center',
        justifyContent: 'center',
    },
    contentContainer: {
        paddingHorizontal: scale(12),
        flex: 1
    },
    bottomContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        gap: 20
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    bar: {
        borderTopWidth: 1,
        borderColor: COLORS.grey,
        flex: 1
    },
    socialBar: {
        alignItems: 'center',
        justifyContent: 'center',
        gap: 15,
        flexDirection: 'row',
        paddingBottom: 20,
        marginVertical: vs(10)
    }
})