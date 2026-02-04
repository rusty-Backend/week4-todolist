# week4-todolist
Week 4 task: todo list

In this we created an application which adds defined tasks to the list. List items are saved in phone local storage using AsyncStorage.

## Structure

The code is split into three different files:

/App.tsx
/components/TodoInputField.tsx
/components/TodoItem.tsx

TodoItem.tsx:
-This is the displayed item in the list.
-Variables: id, text and done
-It shows the task name and if it is done or undone.
-User can toggle the item checkbox to mark it done or undone

TodoInputField.tsx:
-Handles the input of addTodo
-Includes the input textfield and the add button (+)

App.tsx:
-Contains Load, Save, Add, Toggle and List logic 
-TodoItem and TodoInputField just feed the input for App.tsx

## Additional features

At first I did the "marked as done/undone by pressing a row/line on list" part but it didn't feel like something that I would personally do in application. So instead I used "expo-checkbox" and added toggle done/undone into that. The task is still has the "line-through" when it is marked as done.

Added some simple styling like Pink (+)-button and small spacer line in between of tasks.

How it would be done without out the checkbox.
Currently we have 

```tsx
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
```

    Where the Checkbox only has the toggle handler.

    To make it to match assigment we would change it to:
```tsx
<Pressable style={styles.row} onPress={onToggle}>
  <Text
    style={[
      styles.text,
      item.done && styles.doneText
    ]}
  >
    {item.text}
  </Text>
</Pressable>
```

So now the whole row is pressable and handles the toggle.
      
