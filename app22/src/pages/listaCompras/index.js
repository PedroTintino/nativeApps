import { useEffect, useState } from 'react';
import { View, Text, FlatList, Button, TouchableOpacity, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import { styles } from './styles';

export default function ShoppingListScreen() {
  const [items, setItems] = useState([]);
  const navigation = useNavigation();
  const isFocused = useIsFocused();

  useEffect(() => {
    const loadItems = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem('shoppingItems');
        setItems(jsonValue ? JSON.parse(jsonValue) : []);
      } catch (error) {
        console.error('Error loading items:', error);
      }
    };

    if (isFocused) {
      loadItems();
    }
  }, [isFocused]);

  const deleteItem = async (index) => {
    try {
      const newItems = [...items];
      newItems.splice(index, 1);
      setItems(newItems);
      await AsyncStorage.setItem('shoppingItems', JSON.stringify(newItems));
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };

  const renderItem = ({ item, index }) => (
    <View style={styles.itemContainer}>
      <Text>{item.name} ({item.quantity})</Text>
      <TouchableOpacity onPress={() => navigation.navigate('AddItem', { item, index })}>
        <Text style={styles.editText}>Edit</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => deleteItem(index)}>
        <Text style={styles.deleteText}>Delete</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Shopping List</Text>
      <FlatList
        data={items}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        ListEmptyComponent={<Text style={styles.emptyText}>No items found</Text>}
      />
      <Button title="Add Item" onPress={() => navigation.navigate('AddItem')} />
    </View>
  );
}