import { StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { ms, vs } from 'react-native-size-matters'
import CustomIcon from './CustomIcon'
import LinearGradient from "react-native-linear-gradient"
import { THEME } from '../../utils/theme'
import { TextNormal } from './Texts'

interface CustomHeaderProps {

}

const CustomHeader: React.FC<CustomHeaderProps> = (props) => {

    const { } = props

    return (
        <View style={styles.container}>
            <View style={styles.left}>
                <TouchableOpacity>
                    <LinearGradient colors={["#4A3CB080", "#844AB2"]} style={styles.iconContainer}>
                        <CustomIcon name='chevron-left' type='entypo' color='white' size={ms(18)} disabled />
                    </LinearGradient>
                </TouchableOpacity>
            </View>
            <View style={styles.center}>
                <TextNormal bold>Miami Lux</TextNormal>>
            </View>
            <View style={styles.right}>
                <TouchableOpacity>
                    <LinearGradient colors={["#4A3CB080", "#844AB2"]} style={styles.iconContainer}>
                        <CustomIcon name='dots-three-vertical' type='entypo' color='white' size={ms(18)} disabled />
                    </LinearGradient>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default CustomHeader

const styles = StyleSheet.create({
    container: {
        maxHeight: 100,
        height: vs(50),
        flexDirection: 'row',
        alignItems: 'center',
    },
    left: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: vs(50),
    },
    center: {
        flex: 4,
        alignItems: 'center',
        justifyContent: 'center',
        height: vs(50),
    },
    right: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

        height: vs(50),
    },
    iconContainer: {
        height: vs(30),
        alignItems: 'center',
        justifyContent: 'center',
        aspectRatio: 1,
        borderRadius: THEME.radius.sm
    }

})