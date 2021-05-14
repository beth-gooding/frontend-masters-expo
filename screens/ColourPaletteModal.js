import React from 'react';
import { useState, useCallback } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Switch,
  TouchableOpacity,
  FlatList,
  Alert,
} from 'react-native';

import COLORS from '../colours';

const COLORS2 = [
  { colorName: 'AliceBlue', hexCode: '#F0F8FF' },
  { colorName: 'AntiqueWhite', hexCode: '#FAEBD7' },
  { colorName: 'Aqua', hexCode: '#00FFFF' },
];

const ColourPaletteModal = ({ navigation }) => {
  const [colourPaletteName, setColourPaletteName] = useState('');
  const [isSelected, setIsSelected] = useState(false);
  const toggleSwitch = () => setIsSelected((previousState) => !previousState);
  const handleSubmit = useCallback(() => {
    if (!colourPaletteName) {
      Alert.alert('Please enter a palette name');
    } else {
      navigation.navigate('Home', {
        newColourPalette: {
          paletteName: colourPaletteName,
          colors: [],
        },
      });
    }
  }, [navigation, colourPaletteName]);
  return (
    <View style={styles.container}>
      <Text>Name your colour palette</Text>
      <TextInput
        style={styles.input}
        value={colourPaletteName}
        onChangeText={setColourPaletteName}
      />
      <FlatList
        style={styles.list}
        data={COLORS2}
        keyExtractor={(item) => item.colorName}
        renderItem={({ item }) => (
          <View style={styles.switchContainer}>
            <Text>{item.colorName}</Text>
            <Switch
              trackColor={{ false: 'grey', true: 'green' }}
              thumbColor={isSelected ? 'white' : 'white'}
              ios_backgroundColor="white"
              onValueChange={toggleSwitch}
              value={isSelected}
            />
          </View>
        )}
      />
      <TouchableOpacity
        style={styles.submit}
        onPress={() => {
          handleSubmit();
        }}
      >
        <Text style={styles.submitText}>Submit!</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: 'white',
    flex: 1,
  },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
  },
  input: {
    borderWidth: 1,
    borderColor: 'grey',
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
  },
  submit: {
    backgroundColor: 'teal',
    padding: 10,
    borderRadius: 5,
    marginBottom: 30,
  },
  submitText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  list: {
    backgroundColor: 'white',
    paddingBottom: 20,
  },
});

export default ColourPaletteModal;
