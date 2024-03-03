import React, { useEffect, useRef, useState } from "react";
import { Button, Text, View } from "react-native";

export function MyUseRef(): React.JSX.Element {
    const [state, setState] = useState(0);
    const ref = useRef(0);
    useEffect(() => {
        const id = setInterval(() => { 
            ref.current += 1
            console.log(ref.current);
        }, 1000);
        return () => {
            clearInterval(id);
        }
    }, []);
    return (
        <View>
            <Text style={{fontSize: 60}}>REF {ref.current}</Text>
            <Text style={{fontSize: 60}}>STATE {state}</Text>
            <Button onPress={() => {
                setState(state + 1);
            }} title="Change STATE/RELOAD" />
        </View>
    );
}