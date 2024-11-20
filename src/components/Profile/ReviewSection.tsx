import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Reviews } from '../PostDetail/Reviews';

interface ReviewSectionProps {

}

export const ReviewSection: React.FC<ReviewSectionProps> = (props) => {

    const { } = props;

    return (
        <View style={styles.container}>
            <Reviews isVertical />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
    }
});
