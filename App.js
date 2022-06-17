//import logo from './logo.svg';
//import './App.css';
import api from "./api/json-todo";
import Header from "./MyComponents/Header"
import Todos from "./MyComponents/Todos"
import AddTodo from "./MyComponents/AddTodo"
//import EditTodo from "./MyComponents/EditTodo"
import Footer from "./MyComponents/Footer"
import React, { useState, useEffect } from 'react'




function App() {
  const [todos, setTodos] = useState([]);

  //Fetch-Get
  const retriveTodo = async () => {
    const response = await api.get("/json-todo");
    return response.data;
  };
  useEffect(() => {
    const getAllTodo = async () => {
      const allTodo = await retriveTodo();
      if (allTodo) setTodos(allTodo);
    }
    getAllTodo();
  }, [])

  //Push-post
  const addTodo = async (title, description) => {

    console.log('I am adding this todo with title: ',title,' and description: ',description )
    let sno;
    if (todos.length === 0){
      sno = 0;
    }
    else{
    sno = todos[todos.length-1].sno + 1;
    }
    const myTodo =
      {
          sno: sno,
          title: title,
          description: description
      }

    const response = await api.post("/json-todo", myTodo);
    console.log(response);
    
      setTodos([...todos,response.data])
      console.log(myTodo);
  }

  const onDelete = async (todo) => {
    await api.delete(`/json-todo/${todo.id}`)
    console.log("I am onDelete of todo",todo);
    setTodos(todos.filter((e)=>{
    return e!==todo;
  }));
  }
  // const Edit= async (todo) => {
  //   console.log('I am Editing this todo with title: ',todo.title,' and description: ',todo.description)
  //   const EditTodo = ({props})
  //   const response = await api.put(`/json-todo/${todo.id}`, todo)
  //   const {sno, title, description, id} = response.data;
  //   setTodos(
  //     todos.map((todo) => {
  //       return todo.id === id ? {...response.data} : todo;
  //     })
  //   )
  // }
  
  // const Edit = async (todo) => {
  //   console.log('I am editing this todo with title: ', todo.title,' and description: ', todo.description, ' and Id: ', todo.id);
  //   let newTodo;
  //   newTodo = {addTodo}
    // const myTodo =
    //   {
    //       sno: sno,
    //       title: title,
    //       description: description
    //   }
    // const response = await api.put(`/json-todo/${todo.id}`, newtodo);
    // setTodos([...todos,response.data])
    //console.log(myTodo);

  //}


  return (
    <>
      <Header title="My Todos List" />
      <AddTodo addTodo={addTodo}/>
      {/* <EditTodo Edit ={Edit}/> */}
      <Todos todos={todos} onDelete={onDelete} />
      <Footer/>
    </>
  );
}

export default App;


