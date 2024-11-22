import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { LinearGradient } from 'react-native-linear-gradient';
import { TextNormal, TextSmall } from '../common/Texts';

interface MyBookingTabsProps {
    activePage: number;
    onSelectTab: (num: number) => void
}

type TabProps = {
    text: string;
    onPress: () => void
    isSelected: boolean
}

const Tab: React.FC<TabProps> = (props) => {
    const { text, isSelected, onPress } = props
    if (isSelected) {
        return (

            <LinearGradient colors={["#4A3CB080", "#844AB2"]} style={{ borderRadius: 6, }}>
                <TouchableOpacity onPress={onPress} style={[styles.tab, styles.selectedTab]}>
                    <TextSmall>{text}</TextSmall>
                </TouchableOpacity>
            </LinearGradient>
        )
    }
    return (
        <TouchableOpacity style={styles.tab} onPress={onPress}>
            <TextSmall>{text}</TextSmall>
        </TouchableOpacity>
    )
}

export const MyBookingTabs: React.FC<MyBookingTabsProps> = (props) => {

    const { activePage, onSelectTab } = props;


    return (
        <LinearGradient colors={["#4A3CB026", "#844AB24D"]} style={{ borderRadius: 12 }}>
            <View style={styles.container}>
                <Tab text='Requests' isSelected={activePage === 0} onPress={() => onSelectTab(0)} />
                <Tab text='In Progress' isSelected={activePage === 1} onPress={() => onSelectTab(1)} />
                <Tab text='Calendar' isSelected={activePage === 2} onPress={() => onSelectTab(2)} />
                <Tab text='History' isSelected={activePage === 3} onPress={() => onSelectTab(3)} />
            </View>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    container: {
        borderRadius: 12,
        padding: 10,
        flexDirection: "row",
        alignItems: "center",
        gap: 2,
        justifyContent: 'space-evenly'
    },
    tab: {
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 6,
        // height: 60,
        padding: 8,
        borderWidth: 1,
        borderColor: "#A093B1"
    },
    selectedTab: {
        borderWidth: 0,
    }
});
