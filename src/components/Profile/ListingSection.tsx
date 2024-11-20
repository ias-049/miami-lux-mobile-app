import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Post } from '../Post';

interface ListingSectionProps {

}

export const ListingSection: React.FC<ListingSectionProps> = (props) => {

    const { } = props;

    return (
        <View style={styles.container}>
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        gap: 10
    }
});
