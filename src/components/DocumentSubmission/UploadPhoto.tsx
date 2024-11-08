import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import DemoUserSVG from '../../assets/images/demoUserImg.svg'
import { vs } from 'react-native-size-matters'

interface UploadPhotoProps { }

const UploadPhoto: React.FC<UploadPhotoProps> = (props) => {

    const { } = props

    return (
        <View style={styles.container}>
            <DemoUserSVG />
        </View>
    )
}

export default UploadPhoto

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginVertical: vs(10)
    }
})