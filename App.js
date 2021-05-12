import React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import ColourBox from './components/ColourBox';

const App = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={[styles.container]}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>
            Here are some boxes of different colours
          </Text>
        </View>
        <ColourBox colourName="Cyan" colourHex="#2aa198" />
        <ColourBox colourName="Blue" colourHex="#268bd2" />
        <ColourBox colourName="Magenta" colourHex="#d33682" />
        <ColourBox colourName="Orange" colourHex="#cb4b16" />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    fontSize: 17,
    paddingBottom: 10,
  },
  container: {
    paddingHorizontal: 20,
    flex: 1,
  },
  safeArea: {
    flex: 1,
    paddingTop: 50,
  },
});

export default App;
