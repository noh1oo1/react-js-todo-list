import React from "react"
import TodoItem from "./TodoItem"

export default function TodoList({
  todos,
  toggleTodo,
  deleteTodo,
  startEditTodo,
}) {
  return (
    <ul style={{ paddingLeft: "0px", listStyleType: "none" }}>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
          startEditTodo={startEditTodo}
        />
      ))}
    </ul>
  )
}
