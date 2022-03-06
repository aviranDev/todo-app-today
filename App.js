import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';


//styled components
import { Container } from './styles/styles';
import Home from './components/Home';

//async storage
import AsyncStorage from '@react-native-async-storage/async-storage';
import AppLoading from 'expo-app-loading';

export default function App() {
  const [ready, setReady] = useState(false);

  //initial todos
  const initialTodos = [];
  const [todos, setTodos] = useState(initialTodos);

  const LoadTodos = () => {
    AsyncStorage.getItem('stroedTodos').then(data => {
      if (data !== null) {
        setTodos(JSON.parse(data))
      }
    }).catch((error) => console.log(error));
  }



  if (!ready) {
    return (
      <AppLoading
        startAsync={LoadTodos}
        onFinish={() => setReady(true)}
        onError={console.warn}
      />
    )
  }

  return (
    <Container>
      <Home todos={todos} setTodos={setTodos} />
      <StatusBar style="light" />
    </Container>
  );
}

