import React, { useState } from 'react'
import './TodoList.css'
import AddNewTodo from './AddNewTodo'
import Dates from './Dates'

export default function TodoList() {
    const [todos, setTodos] = useState([])

    const addTodoHandler = (date, text) => {
        setTodos(prevValues => [...prevValues, {id: Math.random().toString(), text:text, date: date}])
    }

    const deleteHandler = (id) => {
        setTodos(todos => todos.filter(value => value.id !== id))
        console.log(id);
    }

    const updateHandler = (updatedTitle, id) => {
        setTodos(todos.map(todo => {
            if (todo.id === id) {
                todo.title = updatedTitle
            }
            return todo
        }))
    }

    const groups = todos.reduce((groups, item) => {
        const date = item.date;
        if (!groups[date]) {
          groups[date] = [];
        }
        groups[date].push(item);
        return groups;
      }, {});
      
      const groupArrays = Object.keys(groups).map((date) => {
        return {
          date,
          todos: groups[date]
        };
      });
      

  return (
    <div className='listContainer'>
        <span className='todoTitle'>To do List</span>
        <AddNewTodo onAddHandler={addTodoHandler} />
        <Dates groupedDates={groupArrays} items={todos} onDeleteHandler={deleteHandler} onUpdateHandler={updateHandler}/>
    </div>
  )
}
