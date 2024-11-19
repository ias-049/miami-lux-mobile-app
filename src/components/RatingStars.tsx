import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TextSmall } from './common/Texts'
import CustomIcon from './common/CustomIcon'
import { ms } from 'react-native-size-matters'

interface RatingStarsProps {

}

export const RatingStars: React.FC<RatingStarsProps> = (props) => {

    const { } = props

    return (
        <View style={[styles.row, {gap:5}]}>
            <TextSmall>4.9</TextSmall>
            <View style={styles.row}>
                <CustomIcon name='star' type='ionicons' color={"#FEAB14"} disabled size={ms(16)} />
                <CustomIcon name='star' type='ionicons' color={"#FEAB14"} disabled size={ms(16)} />
                <CustomIcon name='star' type='ionicons' color={"#FEAB14"} disabled size={ms(16)} />
                <CustomIcon name='star' type='ionicons' color={"#FEAB14"} disabled size={ms(16)} />
                <CustomIcon name='star' type='ionicons' color={"#FEAB14"} disabled size={ms(16)} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        gap: 3,
        alignItems: 'center'
    }
})