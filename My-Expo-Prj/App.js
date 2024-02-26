import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { M1, M2 } from './my_libs'
import { y1, z } from './ArrowFunc';
import { Cat } from './MyClasses';
import { age, city, hairColor, myArray, myArray1, myArray2, myArray3, myArray4, myObject, name, name1, others, printMyArray, printMyObject } from './Destructing';
import { myArr, myArr2, myObj1, myObj2 } from './Spread';

export default function App() {
  let cat = new Cat('Meo', 1);
  console.log(cat);
  console.log(name1, hairColor, city, others);
  console.log(myObj1);
  console.log(myObj2);
  return (
    <View style={styles.container}>
      {M2()}
      <Text>{myArr}</Text>
      <Text>{myArr2}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
