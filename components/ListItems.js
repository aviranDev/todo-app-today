import React, { useState } from 'react';
//styled components
import {
  ListView,
  ListViewHidden,
  TodoText,
  TodoDate,
  HiddenButton,
  SwipedTodoText,
  colors,
  TodoTextContainerFront
} from '../styles/styles';

import { SwipeListView } from 'react-native-swipe-list-view';
import { Entypo } from '@expo/vector-icons';

//async storage
import AsyncStorage from '@react-native-async-storage/async-storage';

const ListItems = ({ todos, setTodos, handleTriggerEdit }) => {
  //for styling currently swiped todo row
  const [swipedRow, setSeipedRow] = useState(null);

  const handleDeleteTodo = async (rowMap, rowKey) => {
    const newTodos = [...todos];
    const todoIndex = todos.findIndex((todo) => todo.key === rowKey);
    newTodos.splice(todoIndex, 1);

    try {
      await AsyncStorage.setItem('stroedTodos', JSON.stringify(newTodos));
      setTodos(newTodos);
      setSeipedRow(null);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      {todos.length == 0 &&
        <TodoTextContainerFront>
          <TodoText>
            Let's simplify your day by writing down your tasks here...
          </TodoText>
        </TodoTextContainerFront>
      }
      {todos.length != 0 && <SwipeListView
        data={todos}
        renderItem={(data) => {
          const RowText = data.item.key == swipedRow ? SwipedTodoText : TodoText;
          return (
            <ListView
              underlayColor={colors.primary}
              onPress={() => {
                handleTriggerEdit(data.item);
              }}
            >
              <>
                <RowText>{data.item.title}</RowText>
                <TodoDate>{data.item.date}</TodoDate>
              </>
            </ListView>
          )
        }}
        renderHiddenItem={(data, rowMap) => {
          return (
            < ListViewHidden >
              <HiddenButton
                onPress={() => handleDeleteTodo(rowMap, data.item.key)}
              >
                <Entypo name="trash" size={25} color={colors.secondary} />
              </HiddenButton>
            </ListViewHidden >)
        }}
        leftOpenValue={80}
        previewRowKey={"1"}
        preventOpenValue={80}
        preventOpenDelay={3000}
        disableLeftSwipe={true}
        showsVerticalScrollIndicator={false}
        style={{
          flex: 1, paddingBottom: 30, marginBottom: 40
        }}
        onRowOpen={(rowKey) => {
          setSeipedRow(rowKey);
        }}
        onRowClose={() => {
          setSeipedRow(null);
        }}
      />}
    </>
  );
}

export default ListItems;