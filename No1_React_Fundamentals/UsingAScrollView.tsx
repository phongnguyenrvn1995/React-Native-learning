import React from "react";
import { Image, ImageSourcePropType, SafeAreaView, ScrollView, Text, View } from "react-native";

const MyScrollView = () => {
    const logo: ImageSourcePropType = { 
        uri: 'https://reactnative.dev/img/tiny_logo.png',
        height: 64,
        width: 64
    };

    return (
        <SafeAreaView>
        <ScrollView pagingEnabled maximumZoomScale={3} minimumZoomScale={0.4}>
            <Text style={{fontSize: 96}}>Scroll me plz</Text>
            <Image source={logo} />
            <Image source={logo} />
            <Image source={logo} />
            <Image source={logo} />
            <Image source={logo} />
            <Image source={logo} />
            <Text style={{fontSize: 100}}>If u like</Text>
            <Image source={logo} />
            <Image source={logo} />
            <Image source={logo} />
            <Image source={logo} />
            <Image source={logo} />
            <Image source={logo} />
            <Image source={logo} />
            <Image source={logo} />
            <Image source={logo} />
            <Text style={{fontSize: 100}}>Scrolling down</Text>
            <Image source={logo} />
            <Image source={logo} />
            <Image source={logo} />
            <Image source={logo} />
            <Image source={logo} />
            <Image source={logo} />
            <Image source={logo} />
            <Image source={logo} />
            <Image source={logo} />
            <Text style={{fontSize: 100}}>What's the best</Text>
            <Image source={logo} />
            <Image source={logo} />
            <Image source={logo} />
            <Image source={logo} />
            <Image source={logo} />
            <Image source={logo} />
            <Image source={logo} />
            <Image source={logo} />
            <Image source={logo} />
            <Text style={{fontSize: 100}}>Framework around?</Text>
            <Image source={logo} />
            <Image source={logo} />
            <Image source={logo} />
            <Image source={logo} />
            <Image source={logo} />
            <Image source={logo} />
            <Image source={logo} />
            <Image source={logo} />
            <Text style={{fontSize: 100}}>React Native?</Text>
        </ScrollView>
        </SafeAreaView>
    );
}

export default MyScrollView;