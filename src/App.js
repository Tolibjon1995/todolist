import React, { useState } from 'react';
import Todo from './components/Todo'
import TodoForm from './components/TodoForm'

const App = () => {
  const [todos, setTodos] = useState([])
  
  const addTodo = (userInput) => {
    if (userInput) {
      const newItem = {
        id: Math.random().toString(36).substr(2, 9),
        task: userInput,
        complate: false
      }
      setTodos([...todos, newItem])
    }
  }
  
  const deletTodo = (id) => {
    setTodos([...todos.filter((todo)=>todo.id !== id)])
  }
  
  const handleTodo = (id) => {
    setTodos([
      ...todos.map((todo) => 
        todo.id === id ? {...todo, complate: !todo.complate} : {...todo}
      )
    ])
  }
  
  return (
    <div className='App'>
      <header>
        <h1>Topshiriqlar Ro'yxati  {todos.length}</h1>
      </header>
      <TodoForm addTodo={addTodo}/>
      {
        todos.map((todo) => {
          return (
            <Todo
              key={todo.id}
              todo={todo}
              toggleTask={handleTodo}
              deletTodo={deletTodo}
            />
          )
        })
      }
    </div>
  );
};

export default App;
