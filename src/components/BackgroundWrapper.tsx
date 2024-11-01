import React from 'react'
import { StyleSheet, View } from 'react-native'
import BackgroundSVG from '../assets/images/background.svg'

const BackgroundWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <View style={styles.container}>
            <BackgroundSVG />
            <View style={styles.absContainer}>
                {children}
            </View>
        </View>
    )
}

export default BackgroundWrapper

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    absContainer: {
        height: '100%',
        width: '100%',
        position: 'absolute',
    }
})