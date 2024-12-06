import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { ChatItem } from './ChatItem';

interface ChatListProps {

}

export const ChatList: React.FC<ChatListProps> = (props) => {

    const { } = props;

    return (
        <View style={styles.container}>
            <FlatList
                data={[{ id: '1' }, { id: '2' }, { id: '3' },]}
                keyExtractor={(item) => item?.id}
                // bounces={false}
                renderItem={({ item, index }) => (
                    <ChatItem {...item} key={item.id} />
                )}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});
