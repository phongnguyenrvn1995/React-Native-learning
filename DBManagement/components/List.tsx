import React from "react";
import { FlatList, ListRenderItem, ListRenderItemInfo, Text, Touchable, TouchableOpacity, View } from "react-native";
import { ComponentThemes } from "../themes/ComponentThemes";

// const mockData: Array<ListItem> = [
//     {id: 0, text: 'Click me!'},
//     {id: 1, text: 'Click me!'},
//     {id: 2, text: 'Click me!'},
//     {id: 3, text: 'Click me!'},
// ];

export type ListItem = {
    id: number,
    text: string
};

export type ListProps = {
    items: Array<ListItem>,
    onItemPress: (item: ListItem) => void
}

export default function List(props: ListProps): React.JSX.Element {
    return (
        <FlatList
            data={props.items}
            renderItem={(i: ListRenderItemInfo<ListItem>) => {
                console.log(i.item.text);
                return (
                <TouchableOpacity 
                    onPress={() => {
                        props.onItemPress(i.item);
                    }}
                    style={[ComponentThemes.listItem, {backgroundColor: getItemColor(i.index)}]}>
                    <Text style={ComponentThemes.listItemText}>{i.item.text}</Text>
                </TouchableOpacity>);
            }}
         />
    );
}

function getItemColor(index: number): string {
    return `rgba(59, 108, 212, ${Math.max(1 - index / 10, 0.4)})`;
}