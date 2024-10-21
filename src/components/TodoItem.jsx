import React from "react"

export default function TodoItem({
  todo,
  toggleTodo,
  startEditTodo,
  deleteTodo,
}) {
  return (
    <li style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
      <input
        className="checkbox"
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodo(todo.id)}
      />
      {todo.text}
      <button onClick={() => startEditTodo(todo.id)}>수정</button>
      <button onClick={() => deleteTodo(todo.id)}>삭제</button>
    </li>
  )
}
