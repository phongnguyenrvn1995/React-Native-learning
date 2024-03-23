/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { Alert, Box, Button, Center, CloseIcon, HStack, IconButton, NativeBaseProvider, Stack, Text, VStack } from 'native-base';
import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  return (
    <NativeBaseProvider>
      <SafeAreaView>

      <Box alignItems="center">
        <Button onPress={() => console.log("hello world")}>Click Me</Button>
      </Box>
      <Example />
      </SafeAreaView>
    </NativeBaseProvider>
  );
}

const Example = () => {
  return <Stack direction={{
    base: "column",
    md: "row"
  }} space={2} alignItems={{
    base: "center",
    md: "flex-start"
  }}>
      <Button isLoading>Button</Button>
      <Button isLoading isLoadingText="Submitting">
        Button
      </Button>
      <Button isLoading spinnerPlacement="end" isLoadingText="Submitting">
        Button
      </Button>
      <Button isLoading _loading={{
      bg: "amber.400:alpha.70",
      _text: {
        color: "coolGray.700"
      }
    }} _spinner={{
      color: "white"
    }} isLoadingText="Submitting">
        Button
      </Button>
      <Button isLoading isLoadingText="Submitting" variant="outline">
        Button
      </Button>
    </Stack>;
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
