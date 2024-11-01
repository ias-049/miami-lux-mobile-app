import React, {useRef, useState} from 'react';
import {
  StyleProp,
  StyleSheet,
  TextInput,
  TextInputProps,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import {scale} from 'react-native-size-matters';
import {COLORS} from '../../utils/theme';
import CustomIcon from './CustomIcon';
import {TextSmall, TextSmaller} from './Texts';

interface InputProps extends TextInputProps {
  textInputContainerStyle?: StyleProp<ViewStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  textInputStyle?: StyleProp<TextStyle>;
  label?: string;
  error?: string | undefined;
  icon?: any;
}

const Input: React.FC<InputProps> = ({
  textInputContainerStyle,
  textInputStyle,
  containerStyle,
  error,
  secureTextEntry,
  onChange,
  value,
  label,
  icon,
  ...restProps
}: InputProps): JSX.Element => {
  const textRef = useRef(null);
  const [isVisible, setIsVisible] = useState<boolean | undefined>(
    !!secureTextEntry,
  );

  const labelVisible = label && value && value.length;

  return (
    // <View style={[containerStyle]}>
    <>
      <View style={[styles.container, containerStyle]}>
        {labelVisible && (
          <TextSmall textStyle={styles.label}>{label}</TextSmall>
        )}
        <View style={[styles.textInputContainer, textInputContainerStyle]}>
          <CustomIcon {...icon} />
          <TextInput
            ref={textRef}
            value={value}
            style={[styles.textInput, textInputStyle]}
            onChangeText={onChange}
            placeholderTextColor={COLORS.lightgrey}
            secureTextEntry={isVisible}
            placeholder={restProps?.placeholder}
          />
          {!!secureTextEntry && (
            <View
              style={{
                position: 'absolute',
                right: 0,
                top: !labelVisible ? 15 : -3.1,
              }}>
              <CustomIcon
                name={!isVisible ? 'eye-slash' : 'eye'}
                type="font-awesome-6"
                onPress={() => setIsVisible(p => !p)}
                size={scale(18)}
              />
            </View>
          )}
        </View>
      </View>
      <TextSmaller bold color={'red'}>
        {error && `* ${error}`}
      </TextSmaller>
    </>
    // </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: 'transparent',
    borderRadius: 8,
    height: scale(47),
    maxHeight: 80,
    borderWidth: 1,
    paddingHorizontal: scale(10),
    borderColor: COLORS.borderGrey,
  },
  label: {},
  textInputContainer: {
    width: '100%',
    // alignSelf: 'center',
    borderRadius: 8,
    // height: '100%',
    flex: 1,
    flexDirection: 'row',
    // alignItems: 'center',
    // backgroundColor: 'pink',
  },
  textInput: {
    fontSize: scale(16),
    paddingHorizontal: 10,
    flex: 1,
    color: COLORS.black,
    // backgroundColor: 'red',
  },
});
