import { NavigationContainer, RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { NativeStackNavigationProp, NativeStackScreenProps, createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { Button, Text, View } from "react-native";

type RootParamList = {
    Screen1: undefined,
    Screen2: {paramA: string},
    Screen2Hook: {paramA: string},
    Screen3: {paramB: string, paramC: string}
};

const Root = createNativeStackNavigator<RootParamList>();

type Screen1Props = NativeStackScreenProps<RootParamList,'Screen1'>

const Screen1 = ({navigation, route}: Screen1Props) => {
    return (<View>
        <Text>Screen 1</Text>
        <Button title="Go to Screen 2"
            onPress={() => {
                navigation.push('Screen2', {paramA: 'PHONG'});
            }} />
        <Button title="Go to Screen 2 Hook"
            onPress={() => {
                navigation.push('Screen2Hook', {paramA: 'PHONG'});
            }} />
    </View>);
}

type Screen2Props = NativeStackScreenProps<RootParamList, 'Screen2'>

const Screen2 = ({navigation, route}: Screen2Props) => {
    return (<View>
        <Text>Screen 2</Text>
        <Text>paramA: {route.params.paramA}</Text>
        <Button title="Go to Screen 3"
            onPress={() => {
                navigation.push('Screen3', {paramB: route.params.paramA, paramC: 'Piu piu'});
            }} />
    </View>); 
}

type Screen3Props = NativeStackScreenProps<RootParamList, 'Screen3'>

const Screen3 = ({navigation, route}: Screen3Props) => {
    return (<View>
        <Text>Screen 3</Text>
        <Text>paramB: {route.params.paramB}</Text>
        <Text>paramC: {route.params.paramC}</Text>
        <Button title="Back to Screen 1"
            onPress={() => {
                navigation.popToTop();
            }} />
    </View>); 
}

const MyHookScreen = () => {
    const nav = useNavigation<NativeStackNavigationProp<RootParamList, 'Screen2Hook'>>()
    const rte = useRoute<RouteProp<RootParamList, 'Screen2Hook'>>();
    console.log(rte);
    return (<View>
        <Text>Screen 2</Text>
        <Text>paramA: {rte.params.paramA}</Text>
        <Button title="Go to Screen 3"
            onPress={() => {
                nav.push('Screen3', {paramB: rte.params.paramA, paramC: 'Piu piu'});
            }} />
    </View>); 
}

export default function MyReactNavigation(): React.JSX.Element {
    return (
        <NavigationContainer>
            <Root.Navigator>
                <Root.Screen name="Screen1" component={Screen1}/>
                <Root.Screen name="Screen2Hook" component={MyHookScreen}/>
                <Root.Screen name="Screen2" component={Screen2}/>
                <Root.Screen name="Screen3" component={Screen3}/>
            </Root.Navigator>
        </NavigationContainer>
    );
}