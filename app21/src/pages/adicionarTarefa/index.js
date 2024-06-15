import { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { styles } from './styles';

export default function AddTaskScreen({ route }) {
  const [task, setTask] = useState('');
  const navigation = useNavigation();
  const { task: currentTask, index } = route.params || {};

  useEffect(() => {
    if (currentTask) {
      setTask(currentTask);
    }
  }, [currentTask]);

  const saveTask = async () => {
    try {
      let tasks = await AsyncStorage.getItem('tasks');
      tasks = tasks != null ? JSON.parse(tasks) : [];

      if (index >= 0) {
        tasks[index] = task;
      } else {
        tasks.push(task);
      }

      await AsyncStorage.setItem('tasks', JSON.stringify(tasks));
      navigation.goBack();
    } catch (error) {
      console.error('Error saving task:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Task Name</Text>
      <TextInput
        style={styles.input}
        value={task}
        onChangeText={setTask}
        placeholder="Enter task name"
      />
      <View style={styles.buttonContainer}>
        <Button title="Save" onPress={saveTask} />
        <Button title="Cancel" onPress={() => navigation.goBack()} color="gray" />
      </View>
    </View>
  );
}