import React, { useEffect, useRef, useState } from "react";
import { Text, View } from "react-native";

function useMyCustomHook(callback: () => void , delay: number) {
    const currentCallback = useRef(callback);
    useEffect(() => {
        currentCallback.current = callback;
        console.log("Save the last callback");
    }, [callback]);
    
    useEffect(() => {
        if(delay === null) return;
        const id = setInterval(() => {
            currentCallback.current();
        }, delay);
        return () => {
            clearInterval(id);
        };
    }, [delay]);
}


export function MyCustomHook(): React.JSX.Element {
    const [count, setCount] = useState(0);

    useMyCustomHook(() => {
        setCount(count + 1);
    }, 1000);
    return (
        <View><Text>{count}</Text></View>
    );
}