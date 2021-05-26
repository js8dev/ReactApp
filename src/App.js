import React from 'react'
import TodoList from './Todo/TodoList'
import Context from './context'
import AddToDo from './Todo/AddTodo'

function App() {
  const [todos, setTodos] = React.useState([ // делаем хуки
    {id: 1, completed: true, title: 'Изучить React'},
    {id: 2, completed: false, title: 'Изучить Redux / Mobx'},
    {id: 3, completed: false, title: 'Изучить Typescript'}
  ])
  

  // let todos = [ // стейт
  //   {id: 1, completed: false, title: 'Изучить React'},
  //   {id: 2, completed: false, title: 'Изучить Redux / Mobx'},
  //   {id: 3, completed: false, title: 'Изучить Typescript'}
  // ]

  function toggleTodo(id) {
    setTodos(todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo
    }))
  }  

  function removeTodo(id) {
    setTodos(todos.filter(todo => todo.id !== id))
  }
  
  function addToDo(title) {
    setTodos(todos.concat([{
      title,
      id: Date.now(),
      completed: false
    }]))
  }
 
  return ( 
  <Context.Provider value={{ removeTodo }}> 
  <div className='wrapper'>
    <h1>React todo list</h1>
    <AddToDo onCreate = {addToDo}/>

    {todos.length ? ( 
      <TodoList todos={todos} onToggle={toggleTodo} /> 
    ) : (
      <p>Нет списка заданий!</p>
    )}

    
  </div>
  </Context.Provider>
  )
}

export default App;
