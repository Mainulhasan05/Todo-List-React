import React from 'react'

export default function todo({todo,onDelete}) {
    return (
        <div>
          <h4>{todo.title}</h4>
          <p>{todo.desc}</p>
          <button onClick={()=>{onDelete(todo)}} className="btn btn-danger btn-sm">Delete</button>
        </div>
    )
}
