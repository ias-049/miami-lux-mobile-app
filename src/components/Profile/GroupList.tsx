import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import CustomIcon, { CustomIconProps } from '../common/CustomIcon';
import { TextNormal, TextSmall, TextSmaller } from '../common/Texts';
import { ms, vs } from 'react-native-size-matters';
import { COLORS } from '../../utils/theme';

export type ListItemType = {
    icon: CustomIconProps;
    text: string;
    description?: string;
    id: string;
    onPress: () => void
}

interface GroupListProps {
    list: ListItemType[];
    title: string
}

export const GroupList: React.FC<GroupListProps> = (props) => {

    const { list, title } = props;

    return (
        <View style={styles.container}>
            <TextNormal>{title}</TextNormal>
            <View style={styles.listContainer}>
                {list.map((item) => (
                    <TouchableOpacity key={item.id} style={styles.item} onPress={item?.onPress}>
                        <View style={styles.row}>
                            <CustomIcon {...item.icon} />
                            <View style={{ gap: 5, flex: 1 }}>
                                <TextSmall>{item.text}</TextSmall>
                                {item.description && <TextSmaller>{item.description}</TextSmaller>}
                            </View>
                        </View>
                        <View style={{ flex: 0.3 }}>
                            <CustomIcon name='right' type='antdesign' color='#883DDF' disabled size={ms(18)} />
                        </View>
                    </TouchableOpacity>
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
        backgroundColor: "#2B1738",
        padding: 12,
        borderRadius: 12,
        borderWidth: 0.4,
        borderColor: COLORS.secondary,
        gap: 10,
    },
    item: {
        flexDirection: "row",
        // justifyContent: 'space-between',
        alignItems: "center",
        height: vs(30),
    },
    row: {
        flexDirection: "row",
        alignItems: "center",
        gap: 8,
        flex: 5
    }
});
