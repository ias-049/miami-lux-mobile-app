import React, { useRef, useState } from 'react';
import {
  StyleProp,
  StyleSheet,
  TextInput,
  TextInputProps,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import { scale, vs } from 'react-native-size-matters';
import { COLORS } from '../../utils/theme';
import CustomIcon from './CustomIcon';
import { TextSmall, TextSmaller } from './Texts';

interface InputProps extends TextInputProps {
  textInputContainerStyle?: StyleProp<ViewStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  textInputStyle?: StyleProp<TextStyle>;
  label?: string;
  error?: string | undefined;
  icon?: any;
  onChangeT: (txt: String) => void
}

const Input: React.FC<InputProps> = ({
  textInputContainerStyle,
  textInputStyle,
  containerStyle,
  error,
  secureTextEntry,
  onChangeT,
  value,
  label,
  icon,
  ...restProps
}: InputProps): JSX.Element => {
  const textRef = useRef(null);
  const [isVisible, setIsVisible] = useState<boolean | undefined>(
    !!secureTextEntry,
  );

  return (
    <>
      <View style={{ gap: vs(5) }}>
        {label && (
          <TextSmall textStyle={styles.label}>{label}</TextSmall>
        )}
        <View style={[styles.container, containerStyle]}>
          <View style={[styles.textInputContainer, textInputContainerStyle]}>
            <CustomIcon {...icon} />
            <TextInput
              ref={textRef}
              value={value}
              style={[styles.textInput, textInputStyle]}
              onChangeText={onChangeT}
              placeholderTextColor={COLORS.lightgrey}
              secureTextEntry={isVisible}
              placeholder={restProps?.placeholder}
              {...restProps}
            />
            {!!secureTextEntry && (
              <View
                style={{
                  position: 'absolute',
                  right: 0,
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
      </View>
      <TextSmaller bold color={'red'}>
        {error && `* ${error}`}
      </TextSmaller>
    </>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: 'black',
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
    borderRadius: 8,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  textInput: {
    fontSize: scale(16),
    paddingHorizontal: 10,
    flex: 1,
    color: COLORS.white,
  },
});
