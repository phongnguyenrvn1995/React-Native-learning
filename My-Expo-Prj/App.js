import { StatusBar } from 'expo-status-bar';
import { Button, Dimensions, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { M1, M2 } from './my_libs'
import { y1, z } from './ArrowFunc';
import { Cat } from './MyClasses';
import { age, city, hairColor, myArray, myArray1, myArray2, myArray3, myArray4, myObject, name, name1, others, printMyArray, printMyObject } from './Destructing';
import { myArr, myArr2, myObj1, myObj2 } from './Spread';
import { useState } from 'react';
import { element, element01 } from './JSX';
import { myElement } from './ReactElements';
import MyMinimalComponent, { MyBehaviorComponent, MyComposingComponent, MyTypeScriptComponent } from './FunctionComponents';
import { MyClassComponent } from './ClassComponents';
import { MyCustomEvent } from './Event';

export default function App() {
  let cat = new Cat('Meo', 1);
  console.log(cat);
  console.log(name1, hairColor, city, others);
  console.log(myObj1);
  console.log(myObj2);

  const [data, setData] = useState('');
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{flex: 1}}>
        {M2()}
        <Text>{myArr}</Text>
        <Text>{myArr2}</Text>
        <Text>{data}</Text>
        {element01}
        <Button
          title='Fetch'
          onPress={async () => {
            console.log("press!");
            console.log(JSON.stringify(myElement));
            requestAPI((data) => {
              setData(data);
            })
          }}
        />
        <Text style={{width: Dimensions.get('window').width, textAlign: 'center', backgroundColor: 'yellow'}}>Func Components</Text>
        <MyMinimalComponent/>
        <MyComposingComponent title='My Composing Component' />
        <MyTypeScriptComponent title='My TypeScript Component' color='#666666' />
        <MyBehaviorComponent />
        <Text style={{width: Dimensions.get('window').width, textAlign: 'center', backgroundColor: 'yellow'}}>Class Components</Text>
        <MyClassComponent myTitle='MyClassComponent' myColor='#888888'/>
        <Text style={{width: Dimensions.get('window').width, textAlign: 'center', backgroundColor: 'yellow'}}>Events</Text>
        <MyCustomEvent />
        <StatusBar style="auto" />
      </ScrollView>
    </SafeAreaView>
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
