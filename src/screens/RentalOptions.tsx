import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

interface RentalOptionsProps {

}

export const RentalOptions: React.FC<RentalOptionsProps> = (props) => {

    const { } = props;

    return (
        <View style={styles.container}>
            <Text>RentalOptions</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
    }
});
