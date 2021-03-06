import React, { useState } from 'react';
export default function AddTodo(param) {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("")

    const submit=(e)=>{
        e.preventDefault();
        if(!title || !desc){
            alert("khali rakha jabe na")
        }else{
            param.addTodo(title,desc);
        }
    }
    return (
        <div className='container my-3'>
            <h3>Add a Todo</h3>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Todo Title</label>
                    <input type="text" onChange={(e)=>setTitle(e.target.value)} value={title} className="form-control" id="title" aria-describedby="emailHelp"/>

                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">Description</label>
                    <input type="text" onChange={(e)=>setDesc(e.target.value)}value={desc} className="form-control" id="desc"/>
                </div>
                <button type="submit" className="btn btn-success btn-sm       ">Add Todo</button>
            </form>
        </div>
    )
}
