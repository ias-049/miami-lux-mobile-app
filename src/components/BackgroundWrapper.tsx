import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BackgroundSVG from '../assets/images/background.svg'

const BackgroundWrapper = () => {
    return (
        <View style={styles.container}>
            <BackgroundSVG />
        </View>
    )
}

export default BackgroundWrapper

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})