import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const ColourPreview = ({ navigation, colourPalettes }) => {
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Colour Palette', {
            paletteName: 'Solarized',
            colours: colourPalettes.COLORS,
          });
        }}
      >
        <Text>Solarized</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ColourPreview;
