import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ReactNativeModal from 'react-native-modal';
import BackgroundWrapper from '../BackgroundWrapper';
import { TextNormal } from '../common/Texts';
import VerifiedCheckSVG from '../../assets/images/verifiedCheck.svg'
import CustomButton from '../common/CustomButton';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { scale } from 'react-native-size-matters';

interface IdentityVerificationSuccessProps {
    visible: boolean;
    closeModal: () => void
}

const IdentityVerificationSuccess: React.FC<IdentityVerificationSuccessProps> = (props) => {

    const { visible, closeModal } = props
    const navigation: NavigationProp<any> = useNavigation()

    const handleNext = () => {
        closeModal()
        navigation.navigate("Dash")
    }

    return (
        <ReactNativeModal style={styles.modal} isVisible={visible}>
            <BackgroundWrapper >
                <View style={styles.container}>
                    <View style={{ gap: 10 }}>
                        <TextNormal center>Congrat's your identity </TextNormal>
                        <TextNormal center>verified successfully </TextNormal>
                    </View>
                    <VerifiedCheckSVG />
                    <CustomButton title='Next' onPress={handleNext} width={'100%'} />
                </View>
            </BackgroundWrapper>
        </ReactNativeModal>
    )
}

export default IdentityVerificationSuccess

const styles = StyleSheet.create({
    modal: {
        margin: 0,
        height: '100%',
        width: '100%'
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 30,
        paddingHorizontal: scale(20)
    }
})