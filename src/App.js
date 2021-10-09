import './App.css';
import Header from './MyHeaders/header1';
import  Todos from './MyHeaders/todos';
import Footer from './MyHeaders/footer';
import AddTodo from './MyHeaders/addTodo';
import React, { useState } from 'react';
import todos from './MyHeaders/todos';

function App() {
  const onDelete=(todo)=>{
    // let index=todos.indexOf(todo);
    // todos.splice(index,1);
    setTodos(kajs.filter((e)=>{
return e!==todo;
    }));
  }

const addTodo=(title,desc)=>{
  console.log(title+desc);
  let sl_no;
  if(kajs.length==0){
    sl_no=1;
  }else{
    sl_no=kajs[kajs.length-1].sl_no+1;
  }

  const myTodo={
    sl_no:sl_no,
    title: title,
    desc:desc
  }
  console.log(myTodo);
  setTodos([... kajs,myTodo]);
}

  const [kajs,setTodos]=useState([
    {
      sl_no:1,
      title:'Vaat khabo',
      desc:'dupurer vaat'
    },
    {
      sl_no:2,
      title:'Digbaji diboo',
      desc:'ghumer moddhe'
    },
    {
      sl_no:3,
      title:'gosol korbo',
      desc:'vooor raaite'
    }

  ]);
  return (
    <>

<Header title="Rifat er kaj nai"/>
<AddTodo addTodo={addTodo}/>
<Todos kajx={kajs} onDelete={onDelete}/>
<Footer/>



    </>

  );
}

export default App;
