import React from 'react'
import { StyleSheet, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import BackgroundWrapper from '../components/BackgroundWrapper'
import CustomHeader from '../components/common/CustomHeader'
import { ms, scale, vs } from 'react-native-size-matters'
import { TextNormal, TextSmall, TextSmaller } from '../components/common/Texts'
import { useForm } from 'react-hook-form'
import Fields from '../components/common/Fields'
import { COUNTRIES } from '../utils/constants'
import { COLORS } from '../utils/theme'
import CustomButton from '../components/common/CustomButton'
import AppleSVG from '../assets/images/apple.svg'
import GoogleSVG from '../assets/images/google.svg'
import FacebookSVG from '../assets/images/facebook.svg'

interface VerifyOTPProps {

}

export const VerifyOTPScreen: React.FC<VerifyOTPProps> = ({ navigation }) => {

    const { control } = useForm()

    const FIELDS = [
        {
            id: '2',
            type: 'otp',
            label: "",
            numberOfInputs: 4,
            name: "otp",
            key: "otp",
        },
    ]

    return (
        <BackgroundWrapper>
            <SafeAreaView style={styles.container}>
                <CustomHeader title="Miami Lux" cgb onPressBack={() => navigation.goBack()} />
                <View style={styles.contentContainer}>
                    <View style={styles.pageInfoContainer}>
                        <TextNormal center bold>Enter Code</TextNormal>
                        <TextSmall center >Code has sent to +193******</TextSmall>
                    </View>
                    <View style={styles.formContainer}>
                        <Fields control={control} fields={FIELDS} />
                    </View><View style={styles.bottomContainer}>
                        <CustomButton title='Next' containerStyle={{ marginVertical: 20 }} />
                    </View>
                </View>
            </SafeAreaView>
        </BackgroundWrapper >
    )
}

const styles = StyleSheet.create({
    container: { flex: 1 },
    pageInfoContainer: {
        gap: vs(10),
        paddingTop: vs(20)
    },
    formContainer: {
        paddingTop: vs(30),
        flex: 1
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