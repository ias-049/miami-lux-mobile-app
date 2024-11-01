import React from 'react'
import { StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import BackgroundWrapper from '../components/BackgroundWrapper'
import CustomHeader from '../components/common/CustomHeader'

interface LoginProps {

}

export const LoginScreen: React.FC<LoginProps> = () => {
    return (
        <BackgroundWrapper>
            <SafeAreaView style={styles.container}>
                <CustomHeader />
            </SafeAreaView>
        </BackgroundWrapper>
    )
}

const styles = StyleSheet.create({
    container: { flex: 1 }
})