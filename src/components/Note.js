import React from 'react'

const Note = ({ note, onClick }) => {
  return (
    <div>
      <li>{note.content}</li>
      <button value={note} onClick={onClick}>{note.important ? 'Make not important' : 'Make important'}</button>
    </div>
  )
}

export default Note