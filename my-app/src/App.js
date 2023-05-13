import './App.css';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer'
import Main from './components/Main';
import { useState } from 'react';

function App() {
  const [todos, setTodos] = useState(() => {
    const todoList = localStorage.getItem(LS_TOKEN)

    return todoList ? JSON.parse(todoList) : []
  })

  console.log('APP render');

  return (
    <div className="App">
      <Header addToList={addToList} />
      
      <Main todos={todos} deleteList={deleteList} deleteOneTodo={deleteOneTodo} />

      <Footer />
    </div>
  );
}

export default App;
