import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { M1, M2 } from './my_libs'
import { y1, z } from './ArrowFunc';
import { Cat } from './MyClasses';
import { age, city, hairColor, myArray, myArray1, myArray2, myArray3, myArray4, myObject, name, name1, others, printMyArray, printMyObject } from './Destructing';
import { myArr, myArr2, myObj1, myObj2 } from './Spread';
import { useState } from 'react';
import { element, element01 } from './JSX';

export default function App() {
  let cat = new Cat('Meo', 1);
  console.log(cat);
  console.log(name1, hairColor, city, others);
  console.log(myObj1);
  console.log(myObj2);

  const [data, setData] = useState('');
  return (
    <View style={styles.container}>
      {M2()}
      <Text>{myArr}</Text>
      <Text>{myArr2}</Text>
      <Text>{data}</Text>
      {element01}
      <Button
        title='Fetch'
        onPress={async () => {
          console.log("press!");
          requestAPI((data) => {
            setData(data);
          })
        }}
       />
      <StatusBar style="auto" />
    </View>
  );
}

async function fetchData() {
  const resp = await fetch('https://randomuser.me/api/')
  const data = await resp.json();
  console.log(data);
  return data;
}

async function requestAPI(callback) {
  try {
    const data = await fetchData();
    callback(JSON.stringify(data));
  } catch (error) {
    callback('');
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
