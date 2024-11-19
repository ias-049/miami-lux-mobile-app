import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import HouseSVG from '../../assets/images/house.svg'
import YachtSVG from '../../assets/images/yacht.svg'
import CarSVG from '../../assets/images/car.svg'
import JetSkiSVG from '../../assets/images/jetski.svg'
import TruckSVG from '../../assets/images/truck.svg'
import { scale, vs } from 'react-native-size-matters'
import { TextSmall } from '../common/Texts'

interface HomeTagProps {

}

interface TagProps {
    name: string;
    Icon: any
}

const Tag: React.FC<TagProps> = (props) => {
    const { name, Icon } = props
    return (
        <TouchableOpacity style={styles.tag}>
            <Icon />
            <TextSmall>{name}</TextSmall>
        </TouchableOpacity>
    )
}

export const HomeTags: React.FC<HomeTagProps> = (props) => {
    const { } = props
    return (
        <View>
            <FlatList
                numColumns={3}
                data={[{ name: "Yachts", Icon: YachtSVG }, { name: "Cars", Icon: CarSVG }, { name: "Villas", Icon: HouseSVG }, { name: "Jet Ski", Icon: JetSkiSVG }, { name: "Services", Icon: TruckSVG },]}
                keyExtractor={(item) => item.name}
                renderItem={({ item }) => (
                    <Tag {...item} />
                )}
                scrollEnabled={false}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    tag: {
        backgroundColor: "#231634",
        paddingHorizontal: scale(10),
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
        borderRadius: 10,
        height: vs(40),
        flexDirection: 'row',
        maxWidth: scale(110),
        margin: 5,
        width: scale(100)
    }
})