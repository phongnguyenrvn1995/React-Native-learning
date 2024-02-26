import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { M1, M2 } from './my_libs'
import { y1, z } from './ArrowFunc';
import { Cat } from './MyClasses';

export default function App() {
  let cat = new Cat('Meo', 1);
  console.log(cat);
  return (
    <View style={styles.container}>
      {M2()}
      <Text>{cat.profile}</Text>
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
