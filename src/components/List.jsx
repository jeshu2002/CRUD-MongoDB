// src/HomePage.jsx
import axios from 'axios';
import React from 'react';
import { BiEditAlt } from 'react-icons/bi';
import { BsTrash } from 'react-icons/bs';
import { baseURL } from '../Utils/constant';
const List = ({id,task,setUpdateUI,updateMode}) => {
    const removoTask =() => {
        axios.delete(`${baseURL}/delete/${id}`)
        .then((res) => {
            console.log(res);
            setUpdateUI((prevState) => !prevState);
        })
    }


  return (
          <li className="text-xl mb-4">
            {task}
            <div className="flex gap-4" >
                <button onClick={() => updateMode(id,task)}>
                <BiEditAlt />
                </button>
                <button onClick={removoTask} >
                <BsTrash  />
                </button>
            </div>
          </li>
    
  );
};
   
export default List;
