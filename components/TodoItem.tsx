import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Checkbox from 'expo-checkbox';

export type Todo = {
  id: string;
  text: string;
  done: boolean;
};

type Props = {
  item: Todo;
  onToggle: () => void;
};

export default function TodoItem({ item, onToggle }: Props) {
  return (
    <View style={styles.row}>
      <Text
        style={[
          styles.text,
          item.done && styles.doneText
        ]}
      >
        {item.text}
      </Text>

      <Checkbox
        value={item.done}
        onValueChange={onToggle}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderColor: '#ddd'
  },
  text: {
    fontSize: 18,
    flex: 1
  },
  doneText: {
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid'
  }
});
