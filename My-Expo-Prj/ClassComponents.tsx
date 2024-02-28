import React from "react";
import { Button, View } from "react-native";

export class  MyClassComponent extends React.Component<{myTitle: string, myColor: string}, {}> {
    render(): React.ReactNode {
        return (
            <View>
                <Button title={this.props.myTitle} color={this.props.myColor}/>
            </View>
        );
    }
}