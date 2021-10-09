import React from 'react'
import Todo from './todo';
export default function todos(param) {
    return (
        <div className='container'>
            <h3 className="my-3">kajer List</h3>
            {param.kajx.length===0?"No Todo's to display":
            param.kajx.map(todo=>{
                return(
                    <>
<Todo todo={todo} key={todo.sl_no} onDelete={param.onDelete}/>
<hr/>
</>
                )  
                
            })}
        

            
           
        </div>
    )
}
