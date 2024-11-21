import { NavigationProp } from '@react-navigation/native'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { StyleSheet, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ms, scale } from 'react-native-size-matters'
import BackgroundWrapper from '../components/BackgroundWrapper'
import CustomButton from '../components/common/CustomButton'
import CustomHeader from '../components/common/CustomHeader'
import Fields from '../components/common/Fields'
import { TextNormal } from '../components/common/Texts'
import UploadPhoto from '../components/DocumentSubmission/UploadPhoto'
import IdentityVerificationSuccess from '../components/Modal/IdentityVerificationSuccess'

interface UserInfoProps {
    navigation: NavigationProp<any>
}

export const UserInfoScreen: React.FC<UserInfoProps> = (props) => {

    const { navigation } = props
    const { control } = useForm()

    const [successModal, setSuccessModal] = useState(false)

    const closeModal = () => setSuccessModal(false)
    const openModal = () => setSuccessModal(true)

    const onPressBack = () => navigation.goBack()

    const FIELDS = [
        {
            id: '1',
            type: 'text',
            label: "Name",
            name: "name",
            key: "name",
            placeholder: "Full name",
            icon: { name: "user", type: "font-awesome-6", color: "#4F2F8B", size: ms(18) }
        },
        {
            id: '2',
            type: 'text',
            label: "Email Address",
            name: "email",
            key: "email",
            placeholder: "Enter email",
            icon: { name: "mail", type: "ionicons", color: "#4F2F8B", size: ms(18) }
        },
        {
            id: '3',
            type: 'text',
            label: "Date of Birth",
            name: "dob",
            key: "dob",
            placeholder: "Enter date of bith",
            icon: { name: "calendar", type: "font-awesome-6", color: "#4F2F8B", size: ms(18) }
        },
        {
            id: '4',
            type: 'text',
            label: "Address",
            name: "address",
            key: "address",
            placeholder: "Enter address",
            icon: { name: "location-sharp", type: "ionicons", color: "#4F2F8B", size: ms(20) }
        },
    ]

    return (
        <BackgroundWrapper>
            <SafeAreaView style={styles.container}>
                <CustomHeader title="Miami Lux" cgb onPressBack={onPressBack} />
                <View style={styles.contentContainer}>
                    <View style={styles.uploadContainer}>
                        <UploadPhoto />
                        <TextNormal center bold>Fill up your information</TextNormal>
                    </View>
                    <Fields fields={FIELDS} control={control} />
                </View>
                <View style={styles.btnContainer}>
                    <CustomButton title='Next' onPress={openModal} />
                </View>
            </SafeAreaView>
            <IdentityVerificationSuccess visible={successModal} closeModal={closeModal} />
        </BackgroundWrapper>
    )
}



const styles = StyleSheet.create({
    container: { flex: 1 },
    uploadContainer: {
        flex: 0.8
    },
    contentContainer: {
        paddingHorizontal: scale(10),
        justifyContent: 'center',
        flex: 1
    },
    btnContainer: {
        padding: ms(12),
        paddingBottom: ms(20),
    }
})