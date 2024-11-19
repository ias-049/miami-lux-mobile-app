import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TextBig, TextSmall } from '../common/Texts'
import CustomIcon from '../common/CustomIcon'
import { COLORS } from '../../utils/theme'
import { ms, vs } from 'react-native-size-matters'
import { RatingStars } from '../RatingStars'
import CustomButton from '../common/CustomButton'

interface PostInfoInterface {

}

export const PostInfo: React.FC<PostInfoInterface> = (props) => {
    const { } = props
    return (
        <View style={styles.container}>
            <View style={[styles.row, styles.spaceRow]}>
                <View style={{ flex: 1 }}>
                    <TextBig bold>Azimut 70’ Fly</TextBig>
                </View>
                <View style={[styles.row, styles.iconContainer]}>
                    <CustomIcon name='heart' type='ionicons' color={"#883DDF"} size={ms(20)} />
                    <CustomIcon name='share' type='material-icons' color={"white"} size={ms(20)} />
                </View>
            </View>
            <View style={[styles.row, { justifyContent: 'space-between', alignItems: 'flex-end' }]}>
                <View style={styles.textContainer}>
                    <RatingStars />
                    <View style={[styles.row, { gap: 5 }]}>
                        <CustomIcon name='location' type='ionicons' color='white' size={ms(17)} />
                        <TextSmall>Miami Beach, Florida</TextSmall>
                    </View>
                </View>
                <CustomButton title='Reviews' containerStyle={{ height: vs(30) }} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        gap: 7
    },
    row: {
        flexDirection: 'row'
    },
    spaceRow: {
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    iconContainer: {
        gap: 10
    },
    textContainer: {
        gap: 10
    },

})