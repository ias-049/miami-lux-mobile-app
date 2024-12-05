import React from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import {SvgXml} from 'react-native-svg';
import { IMAGES } from '../utils/images';

const width = Dimensions.get('screen').width + 2;
const height = Dimensions.get('screen').height + 1;

const BackgroundWrapper: React.FC<{children: React.ReactNode}> = ({
  children,
}) => {
  return (
    <View style={styles.container}>
      {/* <BackgroundSVG height={height} width={width} /> */}
      <SvgXml
        xml={IMAGES.backgroundSVG}
        height={height}
        width={width}
      />
      <View style={styles.absContainer}>{children}</View>
    </View>
  );
};

export default BackgroundWrapper;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  absContainer: {
    height: '100%',
    width: '100%',
    position: 'absolute',
  },
});
