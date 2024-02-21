import React from "react";
import { SafeAreaView, SectionList, StyleSheet, Text, View } from "react-native";

const style = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
        backgroundColor: 'white'
    },
    sectionHeader: {
        paddingTop: 2,
        paddingBottom: 2,
        paddingLeft: 10,
        paddingRight: 10,
        fontSize: 14,
        fontWeight: "bold",
        backgroundColor: 'rgba(247, 247, 247, 1)',
        color: 'black'
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
        color: 'gray'
    }
})

const myData = [
    {title: 'A', data: ['A1', 'A2', 'A3']},
    {title: 'B', data: ['B1', 'B2', 'B3']},
    {title: 'C', data: ['C1', 'C2', 'C3']},
    {title: 'D', data: ['D1', 'D2', 'D3']},
]

const MySectionListView = () => {
    return (<SafeAreaView style={style.container}>
            <SectionList
                sections={myData}
                renderItem={(item) => {
                    return (<Text style={style.item}>{item.item}</Text>)
                }}
                renderSectionHeader={(item) => {
                    return (<Text style={style.sectionHeader}>{item.section.title}</Text>)
                }}
                keyExtractor={(item) => {
                    return `id-is-${item}`;
                }} >

            </SectionList>
    </SafeAreaView>)
}

export default MySectionListView