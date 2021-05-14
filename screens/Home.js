import React from 'react';
import { useState, useCallback, useEffect } from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  RefreshControl,
  TouchableOpacity,
  Text,
} from 'react-native';
import PalettePreview from '../components/PalettePreview';

const Home = ({ navigation }) => {
  const [colourPalettes, setColourPalettes] = useState([]);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleFetchColourPalettes = useCallback(async () => {
    const result = await fetch(
      'https://color-palette-api.kadikraman.vercel.app/palettes',
    );
    const newColourPalettes = await result.json();
    if (result.ok) {
      setColourPalettes(newColourPalettes);
    }
  }, []);

  useEffect(() => {
    handleFetchColourPalettes();
  }, [handleFetchColourPalettes]);

  const handleRefresh = useCallback(async () => {
    setIsRefreshing(true);
    await fetch('https://color-palette-api.kadikraman.vercel.app/palettes');
    setTimeout(() => {
      setIsRefreshing(false);
    }, 4000);
  }, []);

  return (
    <FlatList
      style={styles.list}
      data={colourPalettes}
      keyExtractor={(item) => item.paletteName}
      renderItem={({ item }) => (
        <View>
          <PalettePreview
            handlePress={() => {
              navigation.navigate('Colour Palette', item);
            }}
            colourPalette={item}
          />
        </View>
      )}
      refreshControl={
        <RefreshControl
          refreshing={isRefreshing}
          onRefresh={() => handleRefresh()}
        />
      }
      ListHeaderComponent={
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('ColourPaletteModal');
          }}
        >
          <Text>Launch Modal</Text>
        </TouchableOpacity>
      }
    />
  );
};

const styles = StyleSheet.create({
  list: {
    padding: 10,
    backgroundColor: 'white',
  },
});

export default Home;
