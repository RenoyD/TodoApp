import React, { useState } from 'react'

const AddTodo = ({addTodo}) => {
  const [title, setTitle] = useState('');
  const [description, setDesc] = useState('');
  const submit = (e) =>{
      e.preventDefault();
      if(!title || !description){
        alert('Title or description cannot be Blank')
      }
      else{
        addTodo(title, description);
        setTitle('');
        setDesc('');
      }
  }
  return (
    <div className= 'Container my-3 w-75 '>
      <h3>What's the plan for today?</h3>
      <form onSubmit={submit}>
  <div className="mb-3">
    <label htmlFor="title" className="form-label">Todo Title</label>
    <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} className="form-control input-sm" id="title" aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <label htmlFor="description" className="form-label">Description</label>
    <input type="text" value={description} onChange={(e)=>{setDesc(e.target.value)}} className="form-control input-sm" id="description"/>
  </div>
  
  <button type="submit" className="btn btn-sm btn-success">Add Todo</button>
</form>
    </div>
  )
}

export default AddTodo
