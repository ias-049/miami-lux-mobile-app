import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { TextNormal, TextSmall } from '../common/Texts';
import { ms, vs } from 'react-native-size-matters';
import CustomIcon from '../common/CustomIcon';

type Item = { id: string; icon?: string; text: string, isChecked?: boolean; iconType?: any }

interface CheckListProps {
    list: Item[];
    title: string;
}

export const CheckList: React.FC<CheckListProps> = (props) => {

    const { list, title } = props;

    return (
        <View style={styles.container}>
            <TextNormal>{title}</TextNormal>
            <View style={styles.listContainer}>
                {list.map((item, index) => (
                    <View style={styles.item}>
                        <CustomIcon name={item?.icon ?? 'check'} type={item?.iconType ?? 'feather'} color='white' size={ms(17)} />
                        <TextSmall>{item.text}</TextSmall>
                    </View>
                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        gap: 10
    },
    listContainer: {
        backgroundColor: "#170A22",
        padding: 12,
        borderRadius: 12,
        gap: 5
    },
    item: {
        height: vs(30),
        flexDirection: "row",
        alignItems: "center",
        gap: 10
    }
});
