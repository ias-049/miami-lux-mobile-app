import { StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { ms, vs } from 'react-native-size-matters'
import CustomIcon from './CustomIcon'
import LinearGradient from "react-native-linear-gradient"
import { THEME } from '../../utils/theme'
import { TextNormal } from './Texts'
import { NavigationProp, useNavigation } from '@react-navigation/native'

interface CustomHeaderProps {
    title: string;
    onPressBack?: () => void;
    onPressRight?: () => void;
    rightIcon?: { name: string; type: any; color?: string; size?: number; disabled?: boolean }
    cgb?: boolean;
    hideRightIcon?: boolean;
}

const CustomHeader: React.FC<CustomHeaderProps> = (props) => {

    const { title, onPressBack, onPressRight, hideRightIcon = false, cgb, rightIcon } = props

    const navigation: NavigationProp<any> = useNavigation()

    const onPressLeft = () => {
        if (typeof onPressBack === "function") {
            onPressBack()
        } else {
            navigation.goBack()
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.left}>
                {cgb && <TouchableOpacity onPress={onPressLeft}>
                    <LinearGradient colors={["#4A3CB080", "#844AB2"]} style={styles.iconContainer}>
                        <CustomIcon name='chevron-left' type='entypo' color='white' size={ms(18)} disabled />
                    </LinearGradient>
                </TouchableOpacity>}
            </View>
            <View style={styles.center}>
                <TextNormal bold>{title}</TextNormal>
            </View>
            <View style={styles.right}>
                {!hideRightIcon && <TouchableOpacity onPress={onPressRight}>
                    <LinearGradient colors={["#4A3CB080", "#844AB2"]} style={styles.iconContainer}>
                        <CustomIcon name={rightIcon?.name ?? 'dots-three-vertical'} type={rightIcon?.type ?? 'entypo'} color={rightIcon?.color ?? 'white'} size={rightIcon?.size ?? ms(18)} disabled />
                    </LinearGradient>
                </TouchableOpacity>}
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