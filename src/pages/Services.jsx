// src/HomePage.jsx
import React, { useEffect, useState } from 'react';
import List from '../components/List';
import axios from 'axios';
import { baseURL } from '../Utils/constant';
const Services = () => {

    const [input,setinput] = useState("");
    const [tasks,settasks] = useState([]);
    const [UpdateUI,setUpdateUI] = useState(false);
    const [UpdateId,setUpdateId] = useState(null);
    useEffect(() => {
        axios.get(`${baseURL}/get`)
        .then((res) => {
            console.log(res.data);
            settasks(res.data);
        }) 
    },[UpdateUI]);

    const addtask = () => {
        axios.post(`${baseURL}/save`, {task: input}).then((res) => {
            console.log(res.data);
            setinput("");
            setUpdateUI((prevState) => !prevState);
        });
    };

    const updateMode =(id, text) => {
        console.log(text);
        setinput(text);
        setUpdateId(id);
    };

    const updateTask = () => {
        axios.put(`${baseURL}/update/${UpdateId}`,{task:input})
        .then((res)=>{
            console.log(res.data);
            setUpdateUI((prevState) => !prevState);
            setUpdateId(null);
            setinput("");
        })
    };

  return (
    <div className="bg-gray-100 min-h-screen">
      <main className="container mx-auto mt-4 p-8">
        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">CRUD OPERATIONS</h2>
          <p className="text-gray-700">
            This is a simple home page with some content. You can customize and extend it as needed.</p>
           <div>
            <input class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="text" value={input} onChange={(e) => setinput(e.target.value)} />

            <button class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" type="submit" onClick={UpdateId ? updateTask : addtask}> 
                { UpdateId ? "Update Task" : "Add Task"}
            </button>
            </div> 

        </section>

        <section className="mb-8">
            <ul>
                {tasks.map((task) => (
                    <List key={task._id} id={task._id} task={task.task} setUpdateUI={setUpdateUI} updateMode={updateMode} />
                ))}
            </ul>
        </section>
      </main>
    </div>
  );
};
   
export default Services;
