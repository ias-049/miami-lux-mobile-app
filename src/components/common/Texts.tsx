import React from 'react';
import { StyleSheet, Text, TextProps, TextStyle } from 'react-native';
import { scale } from 'react-native-size-matters';
import { COLORS } from '../../utils/theme';

interface ITextProps extends TextProps {
  underline?: boolean;
  bold?: boolean;
  color?: any;
  textStyle?: TextStyle;
  italic?: boolean;
  center?: boolean;
  left?: boolean;
  right?: boolean;
}

export const TextNormal: React.FC<ITextProps> = props => {
  const {
    children,
    color,
    underline,
    textStyle,
    italic,
    bold,
    center,
    right,
    left,
  } = props;
  return (
    <Text
      style={[
        styles.text,
        styles.normal,
        color && { color },
        underline && styles.underline,
        textStyle && textStyle,
        italic && styles.italic,
        bold && styles.bold,
        center && styles.center,
        right && styles.right,
        left && styles.left,
      ]}
      {...props}>
      {children}
    </Text>
  );
};

export const TextSmall: React.FC<ITextProps> = props => {
  const {
    children,
    color,
    underline,
    textStyle,
    italic,
    bold,
    center,
    right,
    left,
  } = props;
  return (
    <Text
      style={[
        styles.text,
        styles.small,
        color && { color },
        underline && styles.underline,
        textStyle && textStyle,
        italic && styles.italic,
        bold && styles.bold,
        center && styles.center,
        right && styles.right,
        left && styles.left,
      ]}
      {...props}>
      {children}
    </Text>
  );
};

export const TextSmaller: React.FC<ITextProps> = props => {
  const {
    children,
    color,
    underline,
    textStyle,
    italic,
    bold,
    center,
    right,
    left,
  } = props;
  return (
    <Text
      style={[
        styles.text,
        styles.smaller,
        color && { color },
        underline && styles.underline,
        textStyle && textStyle,
        italic && styles.italic,
        bold && styles.bold,
        center && styles.center,
        right && styles.right,
        left && styles.left,
      ]}
      {...props}>
      {children}
    </Text>
  );
};

export const TextBig: React.FC<ITextProps> = props => {
  const {
    children,
    color,
    underline,
    textStyle,
    italic,
    bold,
    center,
    right,
    left,
  } = props;
  return (
    <Text
      style={[
        styles.text,
        styles.big,
        color && { color },
        underline && styles.underline,
        textStyle && textStyle,
        italic && styles.italic,
        bold && styles.bold,
        center && styles.center,
        right && styles.right,
        left && styles.left,
      ]}
      {...props}>
      {children}
    </Text>
  );
};

export const TextBigger: React.FC<ITextProps> = props => {
  const {
    children,
    color,
    underline,
    textStyle,
    italic,
    bold,
    center,
    right,
    left,
  } = props;
  return (
    <Text
      style={[
        styles.text,
        styles.bigger,
        color && { color },
        underline && styles.underline,
        textStyle && textStyle,
        italic && styles.italic,
        bold && styles.bold,
        center && styles.center,
        right && styles.right,
        left && styles.left,
      ]}
      {...props}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    color: COLORS.white,
    fontFamily: 'Lato-Regular',
    // fontWeight:'700'
  },
  smaller: {
    fontSize: scale(11),
  },
  small: {
    fontSize: scale(14),
  },
  normal: {
    fontSize: scale(16),
  },
  big: {
    fontSize: scale(20),
  },
  bigger: {
    fontSize: scale(24),
  },
  underline: {
    textDecorationLine: 'underline',
  },
  bold: { fontFamily: 'Lato-Bold' },
  italic: {},
  center: {
    textAlign: 'center',
  },
  left: {
    textAlign: 'left',
  },
  right: {
    textAlign: 'right',
  },
});
