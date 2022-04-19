import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
} from "react-native";
import Header from "./src/components/Header";

export default function App() {
  const [todoItem, setTodoItem] = useState("");
  const [todoList, setTodoList] = useState([]);

  const addTodoList = () => {
    setTodoList([...todoList, todoItem]);
    console.log(todoList);
  };

  return (
    <View>
      <Header title="To-Do List" />
      <View style={styles.container}>
        <View>
          <TextInput
            placeholder="Enter To-Do item"
            style={styles.textInput}
            onChangeText={(text) => setTodoItem(text)}
            value={todoItem}
          />
          <Button title="Add To-Do" onPress={addTodoList} />
        </View>
        <ScrollView>
          {todoList.map((todo) => (
            <View style={styles.todoItem}>
              <Text key={todo} style={{ textAlign: "center" }}>
                {todo}
              </Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 60,
  },
  textInput: {
    padding: 10,
    borderColor: "#000000",
    marginBottom: 10,
    borderWidth: 1,
  },
  todoItem: {
    marginTop: 10,
    padding: 20,
    backgroundColor: "#f2f2f2",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "gray",
  },
});
