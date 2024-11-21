import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { IMAGES } from '../utils/images';
import { vs } from 'react-native-size-matters';
import CameraSVG from '../assets/images/camera.svg'

interface ProfilePhotoProps {

}

export const ProfilePhoto: React.FC<ProfilePhotoProps> = (props) => {

    const { } = props;

    const onPressCamera = () => { }

    return (
        <View style={styles.container}>
            <Image source={IMAGES.photo} style={styles.image} />
            <TouchableOpacity style={styles.iconContainer} onPress={onPressCamera}>
                <CameraSVG />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
    },
    image: {
        height: vs(200)
    },
    iconContainer: {
        position: 'absolute',
        bottom: 0,
        right: 5
    }
});
