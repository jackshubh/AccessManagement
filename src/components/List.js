import React, { useState, memo } from "react";
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, ScrollView } from "react-native";
import { theme } from "../core/theme";

const Item = ({ item, onPress, style }) => (
    <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
        <Text style={styles.title}>{item.title}</Text>
    </TouchableOpacity>
);


const CustomList = ({ children }) => {
    const [selectedId, setSelectedId] = useState(null);

    const onSelection = (id) => {
        setSelectedId(id);
    }

    const renderItem = ({ item }) => {
        const backgroundColor = item.id === selectedId ? "#d3d3d3" : theme.colors.surface;

        return (
            <Item
                item={item}
                onPress={() => onSelection(item.id)}
                style={{ backgroundColor }}
            />
        );
    };

    return (
        <ScrollView style={styles.container}>
            <FlatList
                data={children}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                extraData={selectedId}
            />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        width: "100%",
        //marginTop: StatusBar.currentHeight || 0,
        marginVertical: 12,
        height: 200
        // width: "100%",
        // marginVertical: 12
    },
    item: {
        padding: 10,
        marginVertical: 4,
        marginHorizontal: 4,
        backgroundColor: theme.colors.surface
    },
    title: {
        fontSize: 14,
        color: theme.colors.secondary,
    },
});

export default memo(CustomList);


