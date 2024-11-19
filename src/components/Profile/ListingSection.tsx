import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

interface ListingSectionProps {

}

export const ListingSection: React.FC<ListingSectionProps> = (props) => {

    const { } = props;

    return (
        <View style={styles.container}>
            <Text>ListingSection</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
    }
});
