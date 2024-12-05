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
import {scale, vs} from 'react-native-size-matters';
import {COLORS} from '../../utils/theme';
import CustomIcon from './CustomIcon';
import {TextNormal, TextSmall, TextSmaller} from './Texts';

interface TextAreaProps extends TextInputProps {
  textInputContainerStyle?: StyleProp<ViewStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  textInputStyle?: StyleProp<TextStyle>;
  labelStyle?: StyleProp<TextStyle>;
  label?: string;
  editable?: string;
  error?: string | undefined;
  icon?: any;
  onChangeT: (txt: string) => void;
}

const CustomTextArea: React.FC<TextAreaProps> = ({
  textInputContainerStyle,
  textInputStyle,
  containerStyle,
  error,
  editable = true,
  secureTextEntry,
  onChangeT,
  value,
  label,
  icon,
  labelStyle,
  ...restProps
}: TextAreaProps): JSX.Element => {
  const textRef = useRef(null);
  const [isVisible, setIsVisible] = useState<boolean | undefined>(
    !!secureTextEntry,
  );

  return (
    <View style={{gap: vs(7)}}>
      {label && (
        <TextSmall bold textStyle={{...styles.label, ...labelStyle}}>
          {label}
        </TextSmall>
      )}
      {editable ? (
        <>
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
                multiline
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
                    color="white"
                  />
                </View>
              )}
            </View>
          </View>
          {error && (
            <TextSmaller bold color={'red'}>
              {`* ${error}`}
            </TextSmaller>
          )}
        </>
      ) : (
        <TextNormal>{value}</TextNormal>
      )}
    </View>
  );
};

export default CustomTextArea;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: 'black',
    borderRadius: 8,
    height: scale(130),
    textAlignVertical: 'top',
    paddingHorizontal: scale(2),
    overflow: 'hidden',
  },
  label: {},
  textInputContainer: {
    width: '100%',
    borderRadius: 8,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  textInput: {
    fontSize: scale(16),
    paddingHorizontal: 10,
    textAlignVertical: 'top',
    flex: 1,
    height: '90%',
    color: COLORS.white,
  },
});
