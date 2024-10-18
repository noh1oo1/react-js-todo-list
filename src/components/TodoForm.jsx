import React, { useState } from "react"

export default function TodoForm({ addTodo }) {
  const [inputValue, setInputValue] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    if (inputValue.trim()) {
      addTodo(inputValue)
      setInputValue("")
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="새로운 할일 추가"
      />
      <button type="submit">추가</button>
    </form>
  )
}
