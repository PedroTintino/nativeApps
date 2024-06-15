import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Button, TouchableOpacity, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import { styles } from './styles';

export default function TaskListScreen() {
  const [tasks, setTasks] = useState([]);
  const navigation = useNavigation();
  const isFocused = useIsFocused();

  useEffect(() => {
    const loadTasks = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem('tasks');
        setTasks(jsonValue != null ? JSON.parse(jsonValue) : []);
      } catch (error) {
        console.error('Error loading tasks:', error);
      }
    };

    if (isFocused) {
      loadTasks();
    }
  }, [isFocused]);

  const deleteTask = async (index) => {
    try {
      const newTasks = [...tasks];
      newTasks.splice(index, 1);
      setTasks(newTasks);
      await AsyncStorage.setItem('tasks', JSON.stringify(newTasks));
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  const renderItem = ({ item, index }) => (
    <View style={styles.taskContainer}>
      <Text>{item}</Text>
      <TouchableOpacity onPress={() => navigation.navigate('AddTask', { task: item, index })}>
        <Text style={styles.editText}>Edit</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => deleteTask(index)}>
        <Text style={styles.deleteText}>Delete</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Task List</Text>
      <FlatList
        data={tasks}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        ListEmptyComponent={<Text style={styles.emptyText}>No tasks found</Text>}
      />
      <Button title="Add Task" onPress={() => navigation.navigate('AddTask')} />
    </View>
  );
}