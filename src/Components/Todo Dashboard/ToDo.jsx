import React, {useState} from 'react';
import { motion } from "framer-motion"


import './ToDo.css';

const ToDo = () => {

    const [todoList, setTodoList] = useState([]);
    const [newTask, setNewTask] = useState("");

    const handleChange = (e) => {
        setNewTask(e.target.value);
    };

    const addTask = () => {
        const task = {
            id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
            taskName: newTask
        };

        setTodoList([...todoList, task]);
    };

    const deleteTask = (id) => {
        setTodoList(todoList.filter((task) => task.id !== id ));
    }


  return (
    <div className="ToDo-Container">
        <div className="ToDo-Input-Container">
            <motion.input onChange={handleChange} className="Task-Input" type="text" placeholder={`What's on your mind?...`} name="Todo"
                whileHover={{scale: 1.1}}
                transition={{duration: .2}}
            />

            <motion.button onClick={addTask} className="Add-ToDo-Button"
                whileHover={{scale: 1.1, backgroundColor: "#35a967", color: "white"}}
                transition={{duration: .2}}
            >
                <p className="Button-Text">
                    Add Task
                </p>
            </motion.button>
        </div>

        <div className="ToDo-List-Container">
            {todoList.map((task) => {
                return (
                    <div className="Task-Container">
                        <h1 className='The-Task'>{task.taskName}</h1>

                        <motion.button onClick={() => deleteTask(task.id)} className="Delete-Task-Button"
                            whileHover={{scale: 1.1, backgroundColor: "", color: "red"}}
                            transition={{duration: .2}}
                        >
                            Delete Todo
                        </motion.button>
                    </div>
                );
            })}
        </div>
    </div>
  );
};

export default ToDo;