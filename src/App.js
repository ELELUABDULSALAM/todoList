import React from 'react';
import './App.css';

//import the component
import TodoList from './components/TodoList';
import TodoForm from './components/TodoList';

function App() {
  return (
    <div className="App">
      <TodoForm />
      <TodoList />
    </div>
  );
}

export default App;
