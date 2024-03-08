import React from "react";
import { SectionList, StyleSheet, Text, View } from "react-native";

const myData1 = [
    {
        id: 0,
        title: 'Basic Components',
        data: [
            {id: 0, text: 'View'},
            {id: 1, text: 'Text'},
            {id: 2, text: 'Image'}
        ]
    },
    {
        id: 1,
        title: 'List Components',
        data: [
            {id: 0, text: 'ScrollView'},
            {id: 1, text: 'ListView'}
        ]
    }
];

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 30
    },
    header: {
        backgroundColor: 'steelblue',
        padding: 20,
        color: 'white',
        fontWeight: 'bold',
        marginBottom: 5
    },
    row: {
        backgroundColor: 'skyblue',
        padding: 20,
        color: 'black',
        marginBottom: 5
    },
    row2: {
        backgroundColor: 'green',
        padding: 20,
        color: 'white',
        marginBottom: 5
    }
});

export function MySectionHomogenousList() {
    return (
        <SectionList
            style={styles.container}
            sections={myData1}
            renderSectionHeader={({section}) => {
                return <Text style={styles.header}>{section.title}</Text>
            }}
            renderItem={({item}) => {
                return <Text style={styles.row}>{item.text}</Text>
            }}
            keyExtractor={(item) => item.id}
         />
    );
}

const myData2 = [
    {
        id: 0,
        title: 'Basic Components',
        data: [
            {id: 0, text: 'View'},
            {id: 1, text: 'Text'},
            {id: 2, text: 'Image'},
        ],
        renderItem: ({item}) => {
            return (<Text style={styles.row}>{item.text}</Text>);
        }
    },
    {
        id: 1,
        title: 'List Components',
        data: [
            {id: 0, text: 'ScrollView'},
            {id: 1, text: 'ListView'}
        ],
        renderItem: ({item}) => {
            return (<Text style={styles.row2}>{item.text}</Text>);
        },
    }
]

export function MySectionHeterogenousList() {
    return (
        <SectionList 
            style={styles.container}
            sections={myData2}
            renderSectionHeader={({section}) => {
                return <Text style={styles.header}>{section.title}</Text>
            }}/>
    );
}