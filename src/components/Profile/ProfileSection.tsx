import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { TextBig, TextNormal, TextSmall } from '../common/Texts';

interface ProfileSectionProps {

}

export const ProfileSection: React.FC<ProfileSectionProps> = (props) => {

    const { } = props;

    return (
        <View style={styles.container}>
            <View style={styles.aboutContainer}>
                <TextNormal bold>About</TextNormal>
                <TextSmall color={"#979797"} textStyle={{ lineHeight: 24 }}>
                    Lorem ipsum dolor sit amet consectetur. Risus tempor in mattis aenean lacus  risus risus risus dui risus phasellus. Morbi ullamcorper tortor tristique porttitor. Magna varius ac sed quis feugiat elementum adipiscing faucibus. Aliquam etiam justo malesuada massa morbi urna tincidunt. Nec accumsan diam nullam pharetra.”
                </TextSmall>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    aboutContainer: {
        gap: 10,
        paddingTop: 10
    }
});
