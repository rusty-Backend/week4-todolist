# week4-todolist
Week 4 task: todo list

This project is a mobile application that allows the user to add tasks to a list. Tasks are saved locally on the device using AsyncStorage.

<img src="https://github.com/rusty-Backend/week4-todolist/blob/10bcee0405805123dd0500e6a35164a8e16a9f76/Screenshot-todo)" alt="Todo List Screenshot" width="500">

## Structure

The code is split into three different files:

/App.tsx
/components/TodoInputField.tsx
/components/TodoItem.tsx

TodoItem.tsx:
-Represents a single item in the list
-Variables: id, text and done
-Displays the task name and its completion state
-The user can toggle the checkbox to mark the task as done or undone

TodoInputField.tsx:
-Handles adding new tasks
-Includes the input textfield and the add button (+)

App.tsx:
-Contains Load, Save, Add, Toggle and List logic 
-TodoItem and TodoInputField send user input to App.tsx
-Stores and manages the todo state

## Additional features

At first I did the "marked as done/undone by pressing a row/line on list" part. However, it didn't feel like natural UI solution for mobile app. Instead I used "expo-checkbox" and implemented toggle done/undone into that. Completed tasks still display a "line-through" when it is marked as done.

Added some simple styling like Pink (+)-button and small separato line between tasks.

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

Here only the checkbox handles the toggle action.

To match the original assignment requirement, the row could instead be made pressable:

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


In this version, the entire row is pressable and handles the toggle action.

## Further improvement

Currently, all logic is located in App.tsx, which is fine for an application of this size. In larger projects, the logic should be moved into its own subfolder or separate files.
      
