import React, { useState, useEffect } from 'react';
import { View, Text, Switch, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { styles } from './styles';

export default function App() {
  const [isLightTheme, setIsLightTheme] = useState(true);
  const [isSmallText, setIsSmallText] = useState(true);

  useEffect(() => {
    const loadSettings = async () => {
      try {
        const storedTheme = await AsyncStorage.getItem('theme');
        const storedTextSize = await AsyncStorage.getItem('textSize');

        if (storedTheme !== null) {
          setIsLightTheme(storedTheme === 'light');
        }
        if (storedTextSize !== null) {
          setIsSmallText(storedTextSize === 'small');
        }
      } catch (error) {
        console.error('Error loading settings:', error);
      }
    };

    loadSettings();
  }, []);

  useEffect(() => {
    const saveSettings = async () => {
      try {
        await AsyncStorage.setItem('theme', isLightTheme ? 'light' : 'dark');
        await AsyncStorage.setItem('textSize', isSmallText ? 'small' : 'large');
      } catch (error) {
        console.error('Error saving settings:', error);
      }
    };

    saveSettings();
  }, [isLightTheme, isSmallText]);

  const toggleTheme = () => {
    setIsLightTheme((prevTheme) => !prevTheme);
  };

  const toggleTextSize = () => {
    setIsSmallText((prevSize) => !prevSize);
  };

  return (
    <View style={[styles.container, { backgroundColor: isLightTheme ? '#ffffff' : '#121212' }]}>
      <Text style={[styles.title, { color: isLightTheme ? '#000000' : '#ffffff' }]}>
        Configurações
      </Text>

      <TouchableOpacity style={styles.option} onPress={toggleTheme}>
        <Text style={[styles.description, { color: isLightTheme ? '#000000' : '#ffffff' }]}>
          Tema Claro/Escuro
        </Text>
        <Switch
          value={isLightTheme}
          onValueChange={toggleTheme}
          trackColor={{ false: '#757575', true: '#f5f5f5' }}
          thumbColor={isLightTheme ? '#007bff' : '#f5f5f5'}
        />
      </TouchableOpacity>

      <TouchableOpacity style={styles.option} onPress={toggleTextSize}>
        <Text style={[styles.description, { color: isLightTheme ? '#000000' : '#ffffff' }]}>
          Tamanho do Texto
        </Text>
        <Switch
          value={isSmallText}
          onValueChange={toggleTextSize}
          trackColor={{ false: '#757575', true: '#f5f5f5' }}
          thumbColor={isSmallText ? '#007bff' : '#f5f5f5'}
        />
      </TouchableOpacity>

      <Text style={[styles.text, { color: isLightTheme ? '#000000' : '#ffffff', fontSize: isSmallText ? 14 : 18 }]}>
        Perigoso muito perigoso meeeeesmo!
      </Text>
    </View>
  );
}