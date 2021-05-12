import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ColourBox = ({ colourName, colourHex }) => {
  const boxColour = {
    backgroundColor: colourHex,
  };
  return (
    <View style={[boxColour, styles.colourContainer]}>
      <Text style={styles.white}>
        {colourName}: {colourHex}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  white: {
    color: 'white',
    fontWeight: 'bold',
  },
  colourContainer: {
    alignItems: 'center',
    paddingVertical: 5,
    marginVertical: 3,
    justifyContent: 'center',
  },
});

export default ColourBox;
