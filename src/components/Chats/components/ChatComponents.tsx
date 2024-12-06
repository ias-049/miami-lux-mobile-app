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
          backgroundColor: "#0F1B43",
          padding: widthPercentageToDP(1),
          borderWidth: 0,
        },
      }}
    />
  );
};

// Only to hide the default send button
const renderSend = (sendProps: SendProps<IMessage>) => {
  return <></>;
};

const renderComposer = (props: ComposerProps) => {
  return <Composer placeholder="Message" textInputStyle={{}} {...props} />;
};

const renderInputToolbar = (props: InputToolbarProps<IMessage>) => {
  const { text, onSend } = props || {};
  const hasInputValue = !!text.trim().length;

  const HandlePress = () => {
    if (hasInputValue && onSend) {
      // Construct the message object
      const newMessage: IMessage = {
        _id: Math.random().toString(), // Unique ID for the message
        text: text.trim(),
        createdAt: new Date(),
        user: {
          _id: 1, // The ID of the current user
        },
      };

      // Trigger the onSend function with the new message
      onSend([newMessage], true);
    }
  };

  return (
    <View style={styles.renderInputToolbarContainer}>
      <InputToolbar {...props} containerStyle={styles.inputToolbar} textInputProps={{ color: "white" }} />
      <TouchableOpacity
        style={
          styles.sendContainer
        }
        onPress={HandlePress}>
        <CustomIcon
          name={'paper-airplane'}
          type={'octicon'}
          size={22}
          color={hasInputValue ? COLORS.white : COLORS.grey}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  renderInputToolbarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  inputToolbar: {
    width: '83%',
    borderRadius: 30,
    borderTopWidth: 0,
    minHeight: vs(37),
    justifyContent: 'center',
    borderColor: COLORS.borderGrey,
    borderWidth: 0,
    borderTopColor: COLORS.borderGrey,
    backgroundColor: "#232243",
    color: "white"
  },
  sendContainer: {
    borderWidth: 1,
    borderColor: "#2C95D3",
    padding: RFValue(12),
    borderRadius: 100,
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

