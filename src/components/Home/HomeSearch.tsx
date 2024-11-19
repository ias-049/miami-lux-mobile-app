import { StyleSheet, TextInput, View } from 'react-native'
import React from 'react'
import { ms, vs } from 'react-native-size-matters'
import { COLORS } from '../../utils/theme'
import LinearGradient from 'react-native-linear-gradient'
import LocationSearchSVG from '../../assets/images/locationSearch.svg'
import CustomIcon from '../common/CustomIcon'

interface HomeSearchProps { }

export const HomeSearch: React.FC<HomeSearchProps> = (props) => {

    const { } = props

    return (
        <LinearGradient colors={["#4A3CB026", "#844AB24D"]} style={styles.linearContainer}>
            <View style={styles.container}>
                <LocationSearchSVG />
                <CustomIcon name='search' color='white' disabled type='material-icons' size={ms(19)} />
                <TextInput placeholder='Seach here' placeholderTextColor={"white"} style={styles.input} />
                <CustomIcon name='sliders' color='white' disabled type='feather' size={ms(19)}/>
            </View>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    linearContainer: {
        borderRadius: 12,
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        height: vs(48),
        gap: 10,
        borderRadius: 12,
        borderWidth: 0.4,
        borderColor: COLORS.secondary,
        paddingHorizontal: 10,
    },
    input: {
        flex: 1,
        height: '100%',
        padding: 0,
        // paddingHorizontal: 10,
        // backgroundColor: 'red'
    }
})