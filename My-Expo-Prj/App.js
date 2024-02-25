import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { M1, M2 } from './my_libs'
import { y1, z } from './ArrowFunc';

export default function App() {
  return (
    <View style={styles.container}>
      {M2()}
      <Text>{z(1,2)}</Text>
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
