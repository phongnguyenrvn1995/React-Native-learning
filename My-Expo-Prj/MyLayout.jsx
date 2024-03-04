import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { RadioGroup } from "react-native-radio-buttons-group";

const styles = StyleSheet.create({
    layout: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.05)'
    },
    box: {
        padding: 10,
        backgroundColor: '#3b6cd4',
        margin: 10
    }
});

export function MyLayout() {
    const [flexDirection, setFlexDirection] = useState('column')
    const [justifyContent, setJustifyContent] = useState('flex-start')
    const [alignItems, setAlignItems] = useState('stretch')
    return (
        <View style={{padding: 20, flex: 1}}>
            <Text style={{fontWeight: 'bold'}}>Primary axis (flexDirection = {flexDirection})</Text>
            <RadioGroup layout="row" radioButtons={[{
                label: 'column',
                id: 'column'
            },{
                label: 'row',
                id: 'row'
            },]}
            onPress={(value) => {
                console.log(value);
                 setFlexDirection(value); }}
            selectedId={flexDirection} />

            <Text style={{fontWeight: 'bold'}}>justifyContent {justifyContent}</Text>
            <View style={{flexDirection: 'row'}}>
            <RadioGroup layout="column" containerStyle={{alignItems:'flex-start',}} radioButtons={[{
                label: 'flex-start',
                id: 'flex-start'
            },{
                label: 'center',
                id: 'center'
            },{
                label: 'flex-end',
                id: 'flex-end'
            },{
                label: 'space-around',
                id: 'space-around'
            },{
                label: 'space-between',
                id: 'space-between'
            },]}
            onPress={(value) => setJustifyContent(value)}
            selectedId={justifyContent} />
            </View>    
            
            <Text style={{fontWeight: 'bold'}}>alignItems</Text>
            <RadioGroup layout="column" containerStyle={{alignItems:"flex-start"}} radioButtons={[{
                label: 'flex-start',
                id: 'flex-start'
            },{
                label: 'center',
                id: 'center'
            },{
                label: 'flex-end',
                id: 'flex-end'
            },{
                label: 'stretch',
                id: 'stretch'
            },]}
            onPress={(value) => setAlignItems(value)}
            selectedId={alignItems} />
            <View style={[styles.layout, {flexDirection, justifyContent, alignItems}]}>
                <View style={styles.box}></View>
                <View style={styles.box}></View>
                <View style={styles.box}></View>
            </View>
            <StatusBar style="auto" hidden/>
        </View>
    );
}