import React from "react";
import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";

const myData = [
    {'key': "Honda"},
    {'key': 'Yamaha'},
    {'key': 'Suzuki'},
    {'key': 'SYM'},
    {'key': "Honda"},
    {'key': 'Yamaha'},
    {'key': 'Suzuki'},
    {'key': 'SYM'},
    {'key': "Honda"},
    {'key': 'Yamaha'},
    {'key': 'Suzuki'},
    {'key': 'SYM'},
    {'key': "Honda"},
    {'key': 'Yamaha'},
    {'key': 'Suzuki'},
    {'key': 'SYM'},
]

const style = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20
    },
    item: {
        padding: 10,
        fontSize: 28,
        height: 60
    }
})

function myList(): React.JSX.Element {
    return (<SafeAreaView style={style.container}>
        <FlatList
            renderItem={(item) => {
                console.log("item", item.item.key)
                return (<Text style={style.item}>{item.item.key}</Text>)
            }}
            data={myData}>

        </FlatList>
    </SafeAreaView>);
}

const MyFlatList = myList
export default MyFlatList