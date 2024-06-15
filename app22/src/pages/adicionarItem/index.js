import { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { styles } from './styles';

export default function AddItemScreen({ route }) {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');
  const navigation = useNavigation();
  const { item, index } = route.params || {};

  useEffect(() => {
    if (item) {
      setName(item.name);
      setQuantity(item.quantity.toString()); // Ensure quantity is string for TextInput
    }
  }, [item]);

  const saveItem = async () => {
    try {
      let items = await AsyncStorage.getItem('shoppingItems');
      items = items ? JSON.parse(items) : [];

      const newItem = { name, quantity: parseInt(quantity) }; // Parse quantity to integer

      if (index >= 0) {
        items[index] = newItem;
      } else {
        items.push(newItem);
      }

      await AsyncStorage.setItem('shoppingItems', JSON.stringify(items));
      navigation.goBack();
    } catch (error) {
      console.error('Error saving item:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add Item</Text>
      <TextInput
        style={styles.input}
        placeholder="Item Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Quantity"
        keyboardType="numeric"
        value={quantity}
        onChangeText={setQuantity}
      />
      <View style={styles.buttonContainer}>
        <Button title="Save" onPress={saveItem} />
        <Button title="Cancel" onPress={() => navigation.goBack()} color="gray" />
      </View>
    </View>
  );
}