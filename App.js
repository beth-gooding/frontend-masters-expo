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
        <View style={[styles.cyan, styles.colourContainer]}>
          <Text style={styles.white}>Cyan #2aa198</Text>
        </View>
        <View style={[styles.blue, styles.colourContainer]}>
          <Text style={styles.white}>Blue #268bd2</Text>
        </View>
        <View style={[styles.magenta, styles.colourContainer]}>
          <Text style={styles.white}>Magenta #d33682</Text>
        </View>
        <View style={[styles.orange, styles.colourContainer]}>
          <Text style={styles.white}>Orange #cb4b16</Text>
        </View>
        <ColourBox />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  white: {
    color: 'white',
    fontWeight: 'bold',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  titleContainer: {
    alignItems: 'flex-start',
  },
  cyan: {
    backgroundColor: '#2aa198',
  },
  blue: {
    backgroundColor: '#268bd2',
  },
  magenta: {
    backgroundColor: '#d33682',
  },
  orange: {
    backgroundColor: '#cb4b16',
  },
  colourContainer: {
    alignItems: 'center',
    paddingVertical: 5,
    marginVertical: 3,
    justifyContent: 'center',
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
