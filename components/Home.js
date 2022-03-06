import React, { useState } from 'react';

//components
import Header from './Header';
import ListItems from './ListItems';
import InputModal from './InputModal';

//async storage
import AsyncStorage from '@react-native-async-storage/async-storage';


const Home = ({ todos, setTodos }) => {


  //clear all todos
  const handleClearTodos = async () => {
    try {
      await AsyncStorage.setItem('stroedTodos', JSON.stringify([]));
      setTodos([]);
    } catch (error) {
      console.log(error);
    }
  }

  //Modal visibility & input value
  const [modalVisible, setModalVisible] = useState(false);
  const [todoInputValue, setTodoInputValue] = useState("");


  //function to add a new todo task
  const handleAddTodo = async (todo) => {
    const newTodos = [...todos, todo];

    try {
      await AsyncStorage.setItem('stroedTodos', JSON.stringify(newTodos));
      setTodos(newTodos);
      setModalVisible(false);
    } catch (error) {
      console.log(error);
    }
  }


  //Editing
  const [todoEditedTask, setTodoEditedTask] = useState(null);

  const handleTriggerEdit = (item) => {
    setTodoEditedTask(item);
    setTodoInputValue(item.title);
    setModalVisible(true);
  }

  const handleEditTodo = async (editedTodo) => {
    const newTodos = [...todos];
    const todoIndex = todos.findIndex((todo) => todo.key === editedTodo.key);
    newTodos.splice(todoIndex, 1, editedTodo);

    try {
      await AsyncStorage.setItem('stroedTodos', JSON.stringify(newTodos));
      setTodos(newTodos);
      setModalVisible(false);
      setTodoEditedTask(null);
    } catch (error) {
      console.log(error);
    }
  }


  return (
    <>
      <Header handleClearTodos={handleClearTodos} />
      <ListItems
        todos={todos}
        setTodos={setTodos}
        handleTriggerEdit={handleTriggerEdit}
      />
      <InputModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        todoInputValue={todoInputValue}
        setTodoInputValue={setTodoInputValue}
        handleAddTodo={handleAddTodo}
        todoEditedTask={todoEditedTask}
        setTodoEditedTask={setTodoEditedTask}
        handleEditTodo={handleEditTodo}
        todos={todos}
        setTodos={setTodos}
      />
    </>
  );
}

export default Home;