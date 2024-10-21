import React, { useState } from "react"
import TodoList from "./components/TodoList"
import TodoForm from "./components/TodoForm"

const App = () => {
  const [todos, setTodos] = useState([])
  const [newEdit, setNewEdit] = useState("")
  const [editingTodoId, setEditingTodoId] = useState(null)

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

  const startEditTodo = (id) => {
    const todoToEdit = todos.find((todo) => todo.id === id)
    setNewEdit(todoToEdit.text)
    setEditingTodoId(id)
  }

  const saveEditTodo = () => {
    setTodos(
      todos.map((todo) =>
        todo.id === editingTodoId ? { ...todo, text: newEdit } : todo
      )
    )
    setNewEdit("")
    setEditingTodoId(null)
  }

  return (
    <div>
      <h1>내 할 일 목록</h1>
      <TodoForm
        addTodo={addTodo}
        saveEditTodo={saveEditTodo}
        newEdit={newEdit}
        setNewEdit={setNewEdit}
        editingTodoId={editingTodoId}
      />
      <TodoList
        todos={todos}
        deleteTodo={deleteTodo}
        toggleTodo={toggleTodo}
        startEditTodo={startEditTodo}
      />
      <p>전체 할 일: {todos.length}개</p>
      <p>완료된 할 일: {todos.filter((todo) => todo.completed).length}개</p>
    </div>
  )
}

export default App
