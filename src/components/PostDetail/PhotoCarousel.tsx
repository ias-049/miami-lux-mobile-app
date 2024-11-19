import { Dimensions, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { IMAGES } from '../../utils/images'
import CustomIcon from '../common/CustomIcon'
import Pagination from '../Pagination'
import { ms, vs } from 'react-native-size-matters'

interface PhotoCarouselProps {

}

const DATA = [{ id: "1", image: IMAGES.product }, { id: "2", image: IMAGES.product }, { id: "3", image: IMAGES.product },]

const WIDTH = Dimensions.get("screen").width

export const PhotoCarousel: React.FC<PhotoCarouselProps> = (props) => {

    const { } = props

    return (
        <View style={styles.carousel}>
            <FlatList
                data={DATA}
                keyExtractor={(item) => item.id}
                horizontal
                // style={{ width: '100%', backgroundColor: 'red' }}
                // contentContainerStyle={{ width: WIDTH }}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => (
                    <View style={styles.imgContainer}>
                        <Image source={item.image} style={styles.image} />
                        <TouchableOpacity style={styles.iconContainer}>
                            <CustomIcon name='edit-3' type='feather' color='black' disabled size={ms(18)} />
                        </TouchableOpacity>
                        <Pagination currentPage={2} pages={4} containerStyle={styles.pagination} />
                    </View>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    imgContainer: {
        height: vs(200),
        // width: '100%',
    },
    carousel: {
        height: vs(200),
        // width: '100%',
    },
    image: {
        height: '100%',
        width: WIDTH,
    },
    iconContainer: {
        position: 'absolute',
        right: 10,
        top: 10,
        height: ms(30),
        aspectRatio: 1,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white'
    },
    pagination: {
        position: 'absolute',
        bottom: 20
    }
})