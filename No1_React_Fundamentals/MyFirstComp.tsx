import React from 'react';
import {Text, View} from 'react-native';

const getFullName = (first: string, second: string, third: string) => {
    return first + ' ' + second + ' ' + third
}

const Cat = () => {
    const name = 'Meo'
  return <View><Text>Hello, I am {getFullName('Mèo', 'Méo', 'Meo')}!</Text></View>;
};


export default Cat