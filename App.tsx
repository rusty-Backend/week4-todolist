import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import TodoInput from './components/TodoInputField';
import TodoItem, { Todo } from './components/TodoItem';

export default function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    loadTodos();
  }, []);

  useEffect(() => {
    saveTodos();
  }, [todos]);

  const loadTodos = async () => {
    const stored = await AsyncStorage.getItem('todos');
    if (stored) setTodos(JSON.parse(stored));
  };

  const saveTodos = async () => {
    await AsyncStorage.setItem('todos', JSON.stringify(todos));
  };

  const addTodo = (text: string) => {
    setTodos([...todos, { id: Date.now().toString(), text, done: false }]);
  };

  const toggleTodo = (id: string) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, done: !todo.done } : todo
    ));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todo List</Text>

      <TodoInput onAdd={addTodo} />

      <FlatList
        data={todos}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TodoItem item={item} onToggle={() => toggleTodo(item.id)} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 50
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10
  }
});
