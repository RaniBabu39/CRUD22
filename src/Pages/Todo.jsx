import React, { useEffect, useState } from "react";
import { createTodo, deleteTodo, editTodo, getTodo } from "../Services/AllApi";

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { data } from "react-router-dom";



const Todo = () => {
  const [inputVal,setInputVal] = useState("")
  const [todoData,setTodoData]=useState([])
  const [editData,setEditData]=useState([])
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  useEffect(()=>{
    loadTodos()
  },[])

const loadTodos= async()=>{
  let apiResponse= await getTodo()
  console.log(apiResponse.data)
  setTodoData(apiResponse.data)
}

 const createClick= async()=>{
    let requestbody={
      todo: inputVal
    }
    let apiResponse = await createTodo(requestbody)
    console.log(apiResponse)
    loadTodos
  }

const onDeleteClick = async(id)=>{
  let apiResponse = await deleteTodo(id)
  console.log(apiResponse)
}

const onEditshowClick=(data)=>{
  console.log(data)
  setEditData(data)
  setShow(true)
}

const onEditsaveClick = async ()=>{
  let requestbody={
    todo:editData.todo
  }

let apiResponse=await editTodo(editData.id.requestbody)
console.log(apiResponse)


}




  return (
    <div className="container text-center">
      <div className="d-flex justify-content-center mt-5 gap-5">
        <input onChange={(e)=>setInputVal(e.target.value)}
          placeholder="Enter your name"
          type="text"
          className="form-control w-25"
        ></input>
        <button onClick={createClick}className="btn btn-secondary">Create</button>
      </div>





      {
        todoData.map((eachtodo)=>(

          
      <div className="container d-flex justify-content-center gap-3 border border-secondary">
         <h1></h1>
        <button className="btn btn-warning">Add</button>
        <button onClick={()=>onDeleteClick(eachtodo.id)}className="btn btn-danger">Delete</button>
      </div>
    

        ))
      }

      <div className="container d-flex justify-content-center gap-3 border border-secondary">
         <h1>Todo</h1>
        <button className="btn btn-warning">Add</button>
        <button className="btn btn-danger">Delete</button>
      </div>


      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <input 
  value={editData.todo} 
  onChange={(e) => setEditData({ ...editData, todo: e.target.value })} className="form-control"
/>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

    </div>
  );
};

export default Todo;
