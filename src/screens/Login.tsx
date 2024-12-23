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
import { NavigationProp } from '@react-navigation/native'

interface LoginProps {
    navigation: NavigationProp<any>
}

export const LoginScreen: React.FC<LoginProps> = ({ navigation }) => {

    const { control } = useForm()

    const FIELDS = [
        {
            id: '2',
            type: 'text',
            label: "Email Address",
            name: "email",
            key: "email",
            placeholder: "Enter email",
            icon: { name: "mail", type: "ionicons", color: COLORS.primary, size: ms(20) }
        },
        {
            id: '2',
            type: 'text',
            label: "Password",
            name: "password",
            key: "password",
            secureTextEntry: true,
            placeholder: "Enter password",
            icon: { name: "locked", type: "fontisto", color: COLORS.primary, size: ms(20) }
        },
    ]

    const onContinue = () => navigation.navigate("VerifyOTP")
    
    const refirectToSignup = () => navigation.navigate("Register")

    return (
        <BackgroundWrapper>
            <SafeAreaView style={styles.container}>
                <CustomHeader title="Miami Lux" />
                <View style={styles.contentContainer}>
                    <View style={styles.pageInfoContainer}>
                        <TextNormal center bold>Login</TextNormal>
                        <TextSmall center >Login to you account with email and password.</TextSmall>
                    </View>
                    <View style={styles.formContainer}>
                        <Fields control={control} fields={FIELDS} />
                    </View>
                    <TextSmaller color={COLORS.grey}>We’ll call or text to confirm your number</TextSmaller>
                    <View style={styles.bottomContainer}>
                        <CustomButton title='Login' containerStyle={{ marginVertical: 20 }} onPress={onContinue} />
                        <TextSmall center>Don't have an Account? <TextSmall bold onPress={refirectToSignup}>Signup</TextSmall></TextSmall>
                        <View style={styles.row}>
                            <View style={styles.bar} />
                            <TextSmaller textStyle={{ flex: 1 }} center >or continue with</TextSmaller>
                            <View style={styles.bar} />
                        </View>
                        <View style={styles.socialBar}>
                            <AppleSVG />
                            <GoogleSVG />
                            <FacebookSVG />
                        </View>
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
        paddingTop: vs(20),
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