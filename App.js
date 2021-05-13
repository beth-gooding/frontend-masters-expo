import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import ColourBox from './components/ColourBox';

const COLORS = [
  { colorName: 'Base03', hexCode: '#002b36' },
  { colorName: 'Base02', hexCode: '#073642' },
  { colorName: 'Base01', hexCode: '#586e75' },
  { colorName: 'Base00', hexCode: '#657b83' },
  { colorName: 'Base0', hexCode: '#839496' },
  { colorName: 'Base1', hexCode: '#93a1a1' },
  { colorName: 'Base2', hexCode: '#eee8d5' },
  { colorName: 'Base3', hexCode: '#fdf6e3' },
  { colorName: 'Yellow', hexCode: '#b58900' },
  { colorName: 'Orange', hexCode: '#cb4b16' },
  { colorName: 'Red', hexCode: '#dc322f' },
  { colorName: 'Magenta', hexCode: '#d33682' },
  { colorName: 'Violet', hexCode: '#6c71c4' },
  { colorName: 'Blue', hexCode: '#268bd2' },
  { colorName: 'Cyan', hexCode: '#2aa198' },
  { colorName: 'Green', hexCode: '#859900' },
];

const App = () => {
  const renderItem = ({ item }) => (
    <ColourBox colourName={item.colorName} colourHex={item.hexCode} />
  );
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.safeArea}>
        <View style={[styles.container]}>
          <FlatList
            data={COLORS}
            renderItem={renderItem}
            keyExtractor={(item) => item.colorName}
            ListHeaderComponent={<Text style={styles.title}>Solarized</Text>}
          />
        </View>
      </SafeAreaView>
    </NavigationContainer>
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
