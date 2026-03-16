import React, { useState, useEffect } from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function HomeScreen({ navigation }: any) {
  const [tasks, setTasks] = useState<any[]>([]);

  const loadTasks = async () => {
    const stored = await AsyncStorage.getItem('tasks');
    if (stored) setTasks(JSON.parse(stored));
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', loadTasks);
    return unsubscribe;
  }, [navigation]);

  const deleteTask = async (id: string) => {
    const updated = tasks.filter(task => task.id !== id);
    setTasks(updated);
    await AsyncStorage.setItem('tasks', JSON.stringify(updated));
  };

  const toggleComplete = async (id: string) => {
    const updated = tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task,
    );
    setTasks(updated);
    await AsyncStorage.setItem('tasks', JSON.stringify(updated));
  };

  const logout = async () => {
    await AsyncStorage.removeItem('userEmail');
    await AsyncStorage.removeItem('userPassword');
    navigation.replace('Login');
  };

  return (
    <View style={styles.container}>
      <Button title="Add Task" onPress={() => navigation.navigate('AddTask')} />
      <Button title="Logout" onPress={logout} color="red" />

      {tasks.length === 0 && (
        <Text style={{ marginTop: 20 }}>No tasks yet.</Text>
      )}

      <FlatList
        data={tasks}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.taskCard}>
            <Text style={styles.title}>{item.title}</Text>
            <Text>{item.description}</Text>
            <Text>Deadline: {item.deadline}</Text>
            <Text>Priority: {item.priority}</Text>

            <Button
              title={item.completed ? 'Completed' : 'Mark Complete'}
              onPress={() => toggleComplete(item.id)}
            />

            <Button
              title="Delete"
              onPress={() => deleteTask(item.id)}
              color="red"
            />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  taskCard: {
    padding: 15,
    borderWidth: 1,
    borderColor: '#ddd',
    marginTop: 10,
    borderRadius: 8,
  },
  title: { fontSize: 18, fontWeight: 'bold' },
});
