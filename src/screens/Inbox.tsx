import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import BackgroundWrapper from '../components/BackgroundWrapper';
import CustomHeader from '../components/common/CustomHeader';
import SingleChat from '../components/Chats/SingleChat';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { scale, vs } from 'react-native-size-matters';
import ChatHeader from '../components/Chats/components/ChatHeader';
import { NavigationProp } from '@react-navigation/native'
interface InboxProps {
    navigation: NavigationProp<any>
}

export const InboxScreen: React.FC<InboxProps> = (props) => {

    const { navigation } = props;

    const { bottom, } = useSafeAreaInsets()

    const backhandler = () => { navigation.goBack() }

    return (
        <BackgroundWrapper>
            <SafeAreaView style={{ flex: 1 }} edges={['top']}>
                <ChatHeader showBackBtn text='Brooklyn' profile_pic='https://ui-avatars.com/api/?background=0dbc3f&color=FFF&nameInsaram Alam' backHandler={backhandler} />
                <View style={[styles.container, { paddingBottom: bottom + vs(5) }]}>
                    <SingleChat />
                </View>
            </SafeAreaView>
        </BackgroundWrapper>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: scale(5)
    }
});
