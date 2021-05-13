import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const Home = ({ navigation }) => {
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Colour Palette');
        }}
      >
        <Text>Solarized</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
