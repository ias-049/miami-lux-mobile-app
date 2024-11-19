import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TextBig, TextNormal } from '../common/Texts'

interface DescriptionBoxProps { }

export const DescriptionBox: React.FC<DescriptionBoxProps> = (props) => {
    const { } = props
    return (
        <View style={{ gap: 5}}>
            <TextBig bold>Description</TextBig>
            <TextNormal color={"#615868"}>Embark on an opulent odyssey aboard the Azimut 70-foot Flybridge yacht. Experience Miami's allure as you glide through the azure expanse of Biscayne Bay and drop anchor near the iconic Miami Beach. With certified captain & crew, marina fees, taxes, fuel, water & ice all accounted for, your luxurious escape awaits. Witness the captivating skyline of Miami from your exclusive sanctuary. Secure your place for an Azimut adventure, where city sophistication meets the serenity of the sea.
                Does NOT include tips for captain & crew.</TextNormal>
        </View>
    )
}

const styles = StyleSheet.create({})