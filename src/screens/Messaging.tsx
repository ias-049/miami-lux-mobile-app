import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ms } from 'react-native-size-matters';
import BackgroundWrapper from '../components/BackgroundWrapper';
import { ChatList } from '../components/Chats/ChatList';
import CustomHeader from '../components/common/CustomHeader';
import { COLORS } from '../utils/theme';
import { SafeAreaView } from 'react-native-safe-area-context';

interface MessagingProps {

}

export const MessagingScreen: React.FC<MessagingProps> = (props) => {

    const { } = props;


    return (
        <BackgroundWrapper>
            <SafeAreaView edges={["top"]} style={styles.safeContainer}>
                <CustomHeader title='Chat' />
                <View style={styles.container}>
                    <ChatList />
                </View>
            </SafeAreaView>
        </BackgroundWrapper>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: 10
    },
    icon: {
        padding: 2,
        backgroundColor: COLORS.primary,
        height: ms(30),
        alignItems: "center",
        justifyContent: "center",
        aspectRatio: 1,
        borderRadius: 100,
    },
    safeContainer: {
        flex: 1
    }
});
