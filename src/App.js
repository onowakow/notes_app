import React, {useState, useEffect} from 'react'
import Note from './components/Note'
import axios from 'axios'

const App = (props) => {

  const [notes, setNotes] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3001/notes')
    .then(request => {
      console.log("promise fulfilled")
      setNotes(request.data)
    })
  })

  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notes.map(note => 
            <Note key={note.id} note={note} />
        )}
      </ul>
    </div>
  )
}

export default App