import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import {
  Bubble,
  BubbleProps,
  Composer,
  ComposerProps,
  IMessage,
  InputToolbar,
  InputToolbarProps,
  SendProps,
  Time,
  TimeProps,
} from 'react-native-gifted-chat';
import { RFValue } from 'react-native-responsive-fontsize';
import { widthPercentageToDP } from 'react-native-responsive-screen';
import { vs } from 'react-native-size-matters';
import { COLORS } from '../../../utils/theme';
import CustomIcon from '../../common/CustomIcon';
import LinearGradient from 'react-native-linear-gradient';

const renderTime = (props: TimeProps<IMessage>) => {
  return (
    <Time
      {...props}
      containerStyle={{ left: { alignSelf: 'flex-end', flex: 1 } }}
      timeTextStyle={{
        left: { color: COLORS.grey },
        right: { color: COLORS.grey, },
      }}
    />
  );
};

const renderBubble = (props: Readonly<BubbleProps<IMessage>>) => {
  return (
    <Bubble
      {...props}
      textStyle={{
        right: {
          color: COLORS.white,
        },
        left: {
          color: COLORS.white,
          fontWeight: 400,
        },
      }}
      wrapperStyle={{
        right: {
          backgroundColor: COLORS.secondary,
          padding: widthPercentageToDP(1),
        },
        left: {
          backgroundColor: "#170A22",
          padding: widthPercentageToDP(1),
          borderWidth: 0,
        },
      }}
    />
  );
};

// Only to hide the default send button
const renderSend = (sendProps: SendProps<IMessage>) => {

  const HandlePress = () => {
    if (sendProps.text && sendProps.onSend) {
      // Construct the message object
      const newMessage: IMessage = {
        _id: Math.random().toString(), // Unique ID for the message
        text: sendProps.text.trim(),
        createdAt: new Date(),
        user: {
          _id: 1, // The ID of the current user
          avatar: "https://ui-avatars.com/api/?background=0dbc3f&color=FFF&nameInsaram Alam"
        },
      };

      // Trigger the onSend function with the new message
      sendProps.onSend([newMessage], true);
    }
  };
  return <TouchableOpacity
    style={
      styles.sendContainer
    }
    onPress={HandlePress}>
    <CustomIcon
      name={'paper-plane'}
      type={'ionicons'}
      size={22}
      color={sendProps.text?.length ? "#C82CC1" : COLORS.grey}
    />
  </TouchableOpacity>;
};

const renderComposer = (props: ComposerProps) => {
  return <Composer placeholder="Message" textInputStyle={{}} {...props} />;
};

const renderInputToolbar = (props: InputToolbarProps<IMessage>) => {
  const { text } = props || {};
  const hasInputValue = !!text.trim().length;

  return (
    <View style={styles.renderInputToolbarContainer}>
      <InputToolbar {...props} containerStyle={styles.inputToolbar} textInputProps={{ color: "white" }} />
    </View>
  );
};

const styles = StyleSheet.create({
  renderInputToolbarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: "transparent"
  },
  inputToolbar: {
    width: '100%',
    borderTopWidth: 0,
    minHeight: vs(37),
    justifyContent: 'center',
    borderColor: COLORS.borderGrey,
    borderWidth: 0,
    borderTopColor: COLORS.borderGrey,
    backgroundColor: "#3B235B",
    color: "white",
    borderRadius: 8
  },
  sendContainer: {
    padding: RFValue(12),
    justifyContent: 'center',
    maxHeight: RFValue(45),
    alignSelf: 'flex-end',
  },

  sendContainerActive: {
    borderWidth: 0,
    padding: RFValue(12),
    borderRadius: 10,
    justifyContent: 'center',
    maxHeight: RFValue(45),
    alignSelf: 'flex-end',
    backgroundColor: COLORS.primary,
  },
});

export {
  renderBubble, renderComposer,
  renderInputToolbar, renderSend, renderTime
};

