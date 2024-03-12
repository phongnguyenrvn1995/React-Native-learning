import React, { useEffect, useReducer } from "react";
import { ActivityIndicator, FlatList, StyleSheet, Text, View } from "react-native";
import { actionCreator, initialState, reducer } from "./Posts";

export function MyNetworking() {
    const [state, dispatch] = useReducer(reducer, initialState);
    async function fetchData() {
        dispatch(actionCreator.loading());
        try {
            const resp = await fetch("https://jsonplaceholder.typicode.com/posts");
            const json = await resp.json();
            dispatch(actionCreator.success(json));
        } catch (ex) {
            dispatch(actionCreator.failure());
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    const {loading, posts, error} = state;

    if(error) {
        return (
            <View style={[styles.container, {justifyContent: 'center', alignItems: 'center'}]}>
                <Text style={{color: 'red'}}>Failed to load posts</Text>
            </View>
        );
    }

    if(loading) {
        return (<View style={[styles.container, {justifyContent: 'center'}]}>
            <ActivityIndicator animating={true} size='large'/> 
        </View>);
    }
    // console.log(posts);
    return (
        <FlatList style={styles.container}
            data={posts}
            keyExtractor={(item) => {
                return item.id;
            }}
            renderItem={({index, item}) => {
                return (<View style={styles.itemContainer}>
                    <Text style={styles.title}>{index + 1}. {item.title}</Text>
                    <Text style={styles.body}>{item.body}</Text>
                </View>)
            }} />
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingLeft: 20,
        paddingTop: 20,
        backgroundColor: 'green'
    },
    itemContainer: {
        paddingTop: 20,
        paddingBottom: 10,
        borderBottomColor: 'white',
        borderBottomWidth: 1
    },
    title: {
        color: 'white',
        fontWeight: 'bold',
        paddingBottom: 10
    },
    body: {
        color: 'white',
        paddingBottom: 10
    }
});