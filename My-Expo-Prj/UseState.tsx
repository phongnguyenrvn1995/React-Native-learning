import React, { useState } from "react";
import { Button, Text, View } from "react-native";

const randomNum = () => Math.floor(Math.random() * 6) + 1

export function MyUseStateFunc(): React.JSX.Element {
    const [arr, setArr] = useState([]);
    return (
        <View>
            <Button
            title="Increase!" 
            onPress={() => {
                const ran = randomNum();
                setArr([...arr, ran])
            }}/>
            { arr.map((value: any, index: number, array: any[]) => { 
                return <Text>{`${value}`}</Text>; 
            }) }
        </View>
    );
}