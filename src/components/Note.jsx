import React from 'react'
import '../styles/Note.css'

const Note = (props) => {

  return (
    <article className='note'>
        <h2 className="note_header">{props.title}</h2>
        <p className="note_content">{props.text}</p>
        <p className="note_date">{props.date}</p>
    </article>
  )
}

export default Note