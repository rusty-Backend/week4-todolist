import React, { useState } from 'react';
import {
  View,
  TextInput,
  Pressable,
  Text,
  StyleSheet
} from 'react-native';

type Props = {
  onAdd: (text: string) => void;
};

export default function TodoInputField({ onAdd }: Props) {
  const [text, setText] = useState('');

  const handleAdd = () => {
    if (!text) return;
    onAdd(text);
    setText('');
  };

  return (
    <View style={styles.row}>
      <TextInput
        value={text}
        onChangeText={setText}
        placeholder="New task..."
        style={styles.input}
      />

      <Pressable style={styles.addButton} onPress={handleAdd}>
        <Text style={styles.addButtonText}>+</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    marginBottom: 10
  },
  input: {
    flex: 1,
    borderWidth: 1,
    marginRight: 8,
    padding: 8,
    borderRadius: 6
  },
  addButton: {
    backgroundColor: '#ff69b4',
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8
  },
  addButtonText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold'
  }
});
