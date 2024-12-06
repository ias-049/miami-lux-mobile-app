import { RouteProp, useRoute } from '@react-navigation/native';
import React, { useCallback, useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import {
  renderBubble,
  renderComposer,
  renderInputToolbar,
  renderSend,
  renderTime,
} from './components/ChatComponents';

type SingleChatRoute = {
  params: { id: string; name: string; profile_pic?: string };
};

const SingleChat = () => {
  const { params } = useRoute<RouteProp<SingleChatRoute>>();
  const { id, name, profile_pic } = params || {};
  const [messages, setMessages] = useState<any[]>([]);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
    ]);
  }, []);

  const onSend = useCallback((messages: any[] = []) => {
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, messages),
    );
  }, []);

  return (
    <View style={styles.container}>
      <GiftedChat
        messages={messages}
        onSend={(messages: any[]) => onSend(messages)}
        user={{
          _id: 1,
        }}
        renderAvatar={null}
        renderTime={renderTime}
        renderBubble={renderBubble}
        renderSend={renderSend}
        renderComposer={renderComposer}
        renderInputToolbar={renderInputToolbar}
      />
    </View>
  );
};

export default SingleChat;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingHorizontal: widthPercentageToDP(5),
    // justifyContent: 'center',
  },
});
