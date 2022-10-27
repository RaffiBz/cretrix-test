import React, { useRef, useState } from 'react'
import './Dates.css'

export default function Dates({groupedDates, onDeleteHandler, onUpdateHandler}) {
    const [checked, setChecked] = useState([])
    const [editing, setIsEditing] = useState()
    const [openList, setOpenList] = useState(0)

    const updatedText = useRef()

    const editHandler = (id) => {
        setIsEditing(id)
    }

    const cancelHandler = (id) => {
      setIsEditing()
    }

    const handleChecked = (e) => {
      let updatedList = [...checked];
        if(e.target.checked) {
            updatedList = [...checked, e.target.id];
        } else {
            updatedList.splice(checked.indexOf(e.target.id), 1);
        }
        setChecked(updatedList);
    }

    const handleUpdate = (e) => {
        e.preventDefault()
        const text = updatedText.current.value
        const id = updatedText.current.id
        onUpdateHandler(text, id)
    }

  return (
    <div className='dateContainer'>
     <span>Dates</span>
      {groupedDates.map(list => (
        <ul className='list' key={list.date} onClick={() => setOpenList(list.date)}>
        <div className='dateRow'>
            <div className='dateLength'>
                <span>{list.date}</span>
                {list.todos.length > 1 && <span>({list.todos.length})</span>}
            </div>
            <div className='arrow'>
                <img src='/img/arrow.svg' alt='arrow'/>
            </div>
        </div>
         {openList === list.date && (
         <ul className='list'>
            {list.todos.map(item => (
             <li key={item.id} className="listItem">
              <div>
              {editing !== item.id && <input className='checkBox' type="checkbox" id={item.id} onChange={handleChecked}/>}
              <input id={item.id} defaultValue={item.text} className={`${(checked.includes(item.id)) ? "striked" : "normal"} titleInput`} readOnly={editing === item.id ? false : true} ref={updatedText}/>
              </div>
              <div className='buttons'>
                {editing !== item.id && <button className='delete' type="button" onClick={onDeleteHandler.bind(null, item.id)}>Delete</button>}
                {editing !== item.id && <button type='button' className='edit' onClick={editHandler.bind(null, item.id)}>Edit</button>}
                {editing === item.id&& <button type='button' className='edit' onClick={handleUpdate}>Save</button>}
                {editing === item.id && <button type='button' className='cancel' onClick={cancelHandler}>Cancel</button>}
              </div>
             </li>
            ))}
         </ul>
         )}
        </ul>
      ))}
    </div>
  )
}