import React, { useRef } from 'react'
import './AddNewTodo.css'

export default function AddNewTodo({onAddHandler}) {
    const textRef = useRef()
    const dateRef = useRef()

    const onsubmitHandler=(e) => {
        e.preventDefault()
        const newText = textRef.current.value
        const date = dateRef.current.value
        console.log(newText);
        console.log(date);
        onAddHandler(date, newText)
    }

  return (
    <form className="formContainer" onSubmit={onsubmitHandler}>
        <span>New Task</span>
        <div className='formActions'>
            <input className='textInput' type="text" ref={textRef}/>
            <input className='dateInput' type="date" ref={dateRef}/>
            <button className='submitButton'>Add</button>
        </div>
    </form>
  )
}
