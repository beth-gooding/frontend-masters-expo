import React from 'react';
import { useState, useCallback, useEffect } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import PalettePreview from '../components/PalettePreview';

const Home = ({ navigation }) => {
  const [colourPalettes, setColourPalettes] = useState([]);

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
