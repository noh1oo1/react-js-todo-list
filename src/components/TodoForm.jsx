import React from "react"

export default function TodoForm({
  addTodo,
  saveEditTodo,
  newEdit,
  setNewEdit,
  editingTodoId,
}) {
  const handleSubmit = (e) => {
    e.preventDefault()
    if (editingTodoId) {
      saveEditTodo()
    } else if (newEdit.trim()) {
      addTodo(newEdit)
      setNewEdit("")
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={newEdit}
        onChange={(e) => setNewEdit(e.target.value)}
        placeholder="새로운 할일 추가"
      />
      <button type="submit">{editingTodoId ? "수정" : "추가"}</button>
    </form>
  )
}
