import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

interface ReviewSectionProps {

}

export const ReviewSection: React.FC<ReviewSectionProps> = (props) => {

    const { } = props;

    return (
        <View style={styles.container}>
            <Text>ReviewSection</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
    }
});
