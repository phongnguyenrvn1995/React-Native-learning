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
import { MyCard, MyCard01, MyCard02, MyCard03 } from './ConditionalRendering';
import { MyInputText } from './UserInput';
import { IdAssignment, MyList, MyList01 } from './ListsAndKeys';
import { MemoTesting } from './PerformanceMemo';
import { MyUseStateFunc } from './UseState';
import { MyUseReducer } from './UseReducer';
import { MyUseEffects } from './UseEffects';
import { MyUseRef } from './UseRef';
import { MyCustomHook } from './CustomHook';
import { MyView } from './MyView';
import { MyLayout } from './MyLayout';
import { MyText } from './MyText';
import { MyImage } from './MyImage';
import { MyButton } from './MyButton';
import { MyTouchableOpacity } from './MyTouchableOpacity';
import { MyTouchableHighlight } from './MyTouchableHighlight';
import { MyScrollView } from './MyScrollView';
import { MyFlatList } from './MyFlatList';
import { MySectionHeterogenousList, MySectionHomogenousList } from './MySectionList';

export default function App() {
  return (
    <MySectionHeterogenousList />
    // <MySectionHomogenousList />
    // <MyFlatList />
    // <MyScrollView />
    // <MyTouchableHighlight />
    // <MyTouchableOpacity />
    // <MyButton />
    // <MyImage />
    // <MyText/>
    // <MyLayout />
    // <MyView />
  )
}

export function App01() {
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
        <Text style={{width: Dimensions.get('window').width, textAlign: 'center', backgroundColor: 'yellow'}}>Conditional Rendering</Text>
        <MyCard title="Rendering with &&" showButton="I'm not empty" />
        <MyCard01 title="Rendering with ||" element={<Button title="I'm here" />} />
        <MyCard02 title="Rendering with ternary ?" buttonTitle="I'm here" />
        <MyCard03 title="Rendering with if/else" />
        <Text style={{width: Dimensions.get('window').width, textAlign: 'center', backgroundColor: 'yellow'}}>User Input</Text>
        <MyInputText />
        <IdAssignment />
        <Text style={{width: Dimensions.get('window').width, textAlign: 'center', backgroundColor: 'yellow'}}>Lists and Keys</Text>
        <MyList />
        <MyList01 />
        <Text style={{width: Dimensions.get('window').width, textAlign: 'center', backgroundColor: 'yellow'}}>Perfomance</Text>
        <MemoTesting />
        <Text style={{width: Dimensions.get('window').width, textAlign: 'center', backgroundColor: 'yellow'}}>UseState</Text>
        <MyUseStateFunc />
        <Text style={{width: Dimensions.get('window').width, textAlign: 'center', backgroundColor: 'yellow'}}>UseReducer</Text>
        <MyUseReducer />
        <Text style={{width: Dimensions.get('window').width, textAlign: 'center', backgroundColor: 'yellow'}}>UseEffect</Text>
        <MyUseEffects />
        <Text style={{width: Dimensions.get('window').width, textAlign: 'center', backgroundColor: 'yellow'}}>UseRef</Text>
        <MyUseRef />
        <Text style={{width: Dimensions.get('window').width, textAlign: 'center', backgroundColor: 'yellow'}}>Custom Hook</Text>
        <MyCustomHook />
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
