import React from "react"

export default function TodoItem({ todo, editTodo, deleteTodo, toggleTodo }) {
  return (
    <li>
      <input
        className="checkbox"
        type="checkbox"
        onClick={() => toggleTodo(todo.id)}
      />
      {todo.text}
      <button onClick={() => editTodo(todo.id)}>수정</button>
      <button onClick={() => deleteTodo(todo.id)}>삭제</button>
    </li>
  )
}
