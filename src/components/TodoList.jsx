import React from "react"
import TodoItem from "./TodoItem"

export default function TodoList({ todos, toggleTodo, deleteTodo }) {
  return (
    <ul style={{ listStyleType: "none" }}>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          deleteTodo={deleteTodo}
          toggleTodo={toggleTodo}
        />
      ))}
    </ul>
  )
}
