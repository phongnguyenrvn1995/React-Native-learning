import React, { useEffect, useState } from "react";
import { Button, Text, View } from "react-native";

export default function MyMinimalComponent() {
    return (
        <View>
            <Button title='Press me!' color='#1ACDA5'/>
        </View>
    );
}

export function MyComposingComponent({ title }) {
    return (
        <View>
            <Button title={title} color='#1ACDA5' />
        </View>
    );
}

interface Props {
    title: string,
    color?: string
}

export function MyTypeScriptComponent(props: Props): React.JSX.Element {
    return (
        <View>
            <Button title={props.title} color={props.color} />
        </View>
    );
}

export function MyBehaviorComponent() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        const id = setInterval(() => setCount((count) => count + 1), 1000);
        return () => clearInterval(id);
    }, [])
    return (<Text style={{fontSize: 120}}>{count}</Text>);
}