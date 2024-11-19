import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomButton from '../common/CustomButton'
import { TextBig, TextSmaller } from '../common/Texts'

interface BookOrderProps {

}

export const BookOrder: React.FC<BookOrderProps> = (props) => {

    const { } = props

    return (
        <View style={styles.container}>
            <View style={styles.priceContainer}>
                <TextBig bold>$ 3500/day</TextBig>
                <TextSmaller>02 May</TextSmaller>
            </View>
            <CustomButton title='Book' />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 10
    },
    priceContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10
    }
})