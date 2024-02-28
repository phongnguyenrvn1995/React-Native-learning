import React, { useState } from "react";
import { Button } from "react-native";

function CounterButton({title, onIncrease}) {
    return <Button title={title} onPress={onIncrease} />
}

export function MyCustomEvent() {
    const [count, setCount] = useState(0);
    return (<CounterButton title={`My Custom Event (${count})`} onIncrease={() => {
        setCount(count + 1);
    }}/>);
}