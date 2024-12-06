import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import BackgroundWrapper from '../components/BackgroundWrapper';
import CustomHeader from '../components/common/CustomHeader';
import SingleChat from '../components/Chats/SingleChat';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { scale, vs } from 'react-native-size-matters';

interface InboxProps {

}

export const InboxScreen: React.FC<InboxProps> = (props) => {

    const { } = props;

    const { bottom, } = useSafeAreaInsets()

    return (
        <BackgroundWrapper>
            <CustomHeader title='Brooklyn Simmons' cgb />
            <View style={[styles.container, { paddingBottom: bottom + vs(5) }]}>
                <SingleChat />
            </View>
        </BackgroundWrapper>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: scale(5)
    }
});
