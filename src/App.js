import React, {useState, useEffect} from 'react'
import Note from './components/Note'
import axios from 'axios'

const App = (props) => {

  const [notes, setNotes] = useState([])
  const [writing, setWriting] = useState(
    'a new note...'
  )
  // if showAll is true, all notes are shown. Else, only important notes are shown.
  const [showAll, setShowAll] = useState(true)

  const notesToShow = showAll
    ? notes
    : notes.filter(note => note.important)
  

  useEffect(() => {
    axios.get('http://localhost:3001/notes')
    .then(request => {
      console.log("promise fulfilled")
      setNotes(request.data)
    })
  }, [])

  const handleWriting = (event) => {
    setWriting(event.target.value)
  }

  const handleNewNote = (event) => {
    event.preventDefault()
    const noteObject = {
      content: writing,
      date: new Date().toISOString(),
      important: Math.random() < 0.5,
      id: notes.length + 1
    }

    setNotes(notes.concat(noteObject));
    setWriting('')
  }

  
  
  return (
    <div>
      <h1>Notes</h1>
      <b>{showAll ? 'Showing all notes' : 'Only showing important notes'}</b>
      <ul>
        {notesToShow.map(note => 
          <Note key={note.id} note={note} />
        )}
      </ul>
      <div>
        <h2>Add notes</h2>
        <form onSubmit={handleNewNote}>
          <input 
            value={writing}
            onChange={handleWriting}
          />
          <button type="submit">Add note</button>
        </form>
       
        <button onClick={()=>setShowAll(!showAll)}>{showAll ? 'Only show important notes' : 'Show all notes'}</button>
              
      </div>
    </div>
  )
}

export default App