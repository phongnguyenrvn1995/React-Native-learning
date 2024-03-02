import React, { memo, useState } from "react";
import { Button, Text, View } from "react-native";

function MyLabel({title}) {
    console.log('Label', title);
    return <Text>{title}</Text>
}

const MemoLabel = memo(MyLabel);

export function MemoTesting() {
    const [count, setCount] = useState(0);
    return (
        <View>
            <Button 
            title={`Pressed (${count}) times!`}
            onPress={() => {
                setCount(count + 1);
            }}/>
            <MyLabel title='My label' />
            <MemoLabel title='My Memo Label' />
        </View>
    );
}