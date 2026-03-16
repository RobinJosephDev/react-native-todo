import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import uuid from 'react-native-uuid';

export default function AddTaskScreen({ navigation }: any) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [deadline, setDeadline] = useState('');
  const [priority, setPriority] = useState('');

  const saveTask = async () => {
    if (!title || !description || !deadline || !priority) {
      Alert.alert('Error', 'Please fill all fields');
      return;
    }

    const newTask = {
      id: uuid.v4() as string,
      title,
      description,
      deadline,
      priority,
      completed: false,
    };

    const stored = await AsyncStorage.getItem('tasks');
    const tasks = stored ? JSON.parse(stored) : [];
    tasks.push(newTask);
    await AsyncStorage.setItem('tasks', JSON.stringify(tasks));

    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add Task</Text>

      <TextInput
        placeholder="Title"
        style={styles.input}
        value={title}
        onChangeText={setTitle}
      />

      <TextInput
        placeholder="Description"
        style={styles.input}
        value={description}
        onChangeText={setDescription}
      />

      <TextInput
        placeholder="Deadline"
        style={styles.input}
        value={deadline}
        onChangeText={setDeadline}
      />

      <TextInput
        placeholder="Priority (Low/Medium/High)"
        style={styles.input}
        value={priority}
        onChangeText={setPriority}
      />

      <Button title="Save Task" onPress={saveTask} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 15,
    padding: 10,
    borderRadius: 6,
  },
});
