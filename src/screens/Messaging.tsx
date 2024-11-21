import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

interface MessagingProps {

}

export const MessagingScreen: React.FC<MessagingProps> = (props) => {

    const { } = props;

    return (
        <View style={styles.container}>
            <Text>Messaging</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
    }
});
