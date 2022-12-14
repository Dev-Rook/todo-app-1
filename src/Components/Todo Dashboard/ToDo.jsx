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
                whileTap={{scale: .9}}
                transition={{duration: .2}}
            >
                <p className="Button-Text">
                    Add
                </p>
            </motion.button>
        </div>

        <div className="ToDo-List-Container">
            {todoList.map((task) => {
                return (
                    <motion.div className="Task-Container"
                        initial={{x: "-100vh", opacity: 0}}
                        animate={{x: 0, opacity: 1, type: "spring"}}
                        exit={{x: "100vh", opacity: 0}}
                        transition={{duration: .5}}
                    >
                        <motion.h1 className='The-Task'
                            whileHover={{scale: 1.1, color: ""}}
                            whileTap={{scale: .9}}
                            transition={{duration: .2}}
                        >
                            {task.taskName}
                        </motion.h1>

                        <motion.button onClick={() => deleteTask(task.id)} className="Delete-Task-Button"
                            whileHover={{scale: 1.1, backgroundColor: "#e34b22", color: "white"}}
                            whileTap={{scale: .9}}
                            transition={{duration: .2}}
                        >
                            <motion.p className="Button-Text"

                            >
                                Delete
                            </motion.p>
                        </motion.button>
                    </motion.div>
                );
            })}
        </div>
    </div>
  );
};

export default ToDo;