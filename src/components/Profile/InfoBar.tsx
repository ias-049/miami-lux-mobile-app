import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { TextNormal, TextSmall } from '../common/Texts';
import CustomIcon from '../common/CustomIcon';
import { ms } from 'react-native-size-matters';
import MessageSVG from '../../assets/images/message.svg'

interface InfoBarProps {

}

export const InfoBar: React.FC<InfoBarProps> = (props) => {

    const { } = props;

    return (
        <View style={styles.container}>
            <View style={[styles.row, styles.spaceBetween,]}>
                <View style={styles.row}>
                    <TextNormal>Annie Ben</TextNormal>
                    <CustomIcon name='verified' type='material-icons' color='#168FFF' disabled size={ms(18)} />
                </View>
                <MessageSVG />
            </View>
            <View style={[styles.row, styles.spaceBetween,]}>
                <View style={styles.row}>
                    <CustomIcon name='calendar' type='font-awesome' color='#615868' disabled size={ms(16)} />
                    <TextSmall color={"#615868"}>Joined in 2018</TextSmall>
                </View>
                <View style={[styles.row, { gap: 5 }]}>
                    <TextSmall>4.9</TextSmall>
                    <CustomIcon name='star' type='material-community' color='#FEB621' disabled size={ms(20)} />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 12,
        borderRadius: 12,
        backgroundColor: "#241135",
        gap: 10
    },
    row: {
        flexDirection: 'row',
        alignItems: "center",
        gap: 10
    },
    spaceBetween: {
        justifyContent: 'space-between',
    }
});
