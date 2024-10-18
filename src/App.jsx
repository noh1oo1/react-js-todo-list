import React, { useState } from "react"
import TodoList from "./components/TodoList"
import TodoForm from "./components/TodoForm"

const App = () => {
  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
    setTodos([...todos, { id: Date.now(), text: todo, completed: false }])
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    )
  }
  return (
    <div>
      <h1>내 할 일 목록</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} deleteTodo={deleteTodo} toggleTodo={toggleTodo} />
      <p>전체 할 일: {todos.length}개</p>
      <p>완료된 할 일: {todos.filter((todo) => todo.completed).length}개</p>
    </div>
  )
}

export default App
