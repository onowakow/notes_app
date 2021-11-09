import React from 'react'

const Note = ({ note, onClick }) => {
  return (
    <div>
      <li className='note'>
        {note.content}
        <button className='noteButton' value={note} onClick={onClick}>{note.important ? 'Make not important' : 'Make important'}</button>
      </li>
    </div>
  )
}

export default Note