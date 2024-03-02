<script src="http://192.168.5.31:8097"></script>
import React from "react";
import { Text, View } from "react-native";

export function IdAssignment() {
    return (
        <View key='99'>
            <Text key='PHONG'>Title</Text>
            <Text>Subtitle</Text>
        </View>
    );
}

export function MyList() {
    const data = [
        {id: 'a', name: 'Phong'},
        {id: 'b', name: 'Tram'},
        {id: 'c', name: '...'},
    ];

    return (
        <View>
            {data.map((val, index, array) => {
                    console.log(val, index, array);
                    return <Text key={val.id}>{val.name}</Text>
                })
            }
        </View>
    );
}

export function MyList01() {
    const data = [
        {id: 'a', name: 'Phong'},
        {id: 'b', name: 'Tram'},
        {id: 'c', name: '...'},
    ];

    return (
        <View>
            {data.map((val, index, array) => {
                    // console.log(val, index, array);
                    return <Text key={index}>{val.name}</Text>
                })
            }
        </View>
    );
}