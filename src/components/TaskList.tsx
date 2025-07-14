import React, { useState } from 'react';
import styled from 'styled-components';
import { Task } from '../types';
import { nanoid } from 'nanoid';
import { text } from 'stream/consumers';
import Tasks from './Task';
import OneTask from './Task';

const TaskListWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

`

const TaskList: React.FC = () => {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [taskText, setTaskText] = useState<string>("")

    const addTask = (text:string) => {
        const newTask:Task = {
            id: tasks.length ? (tasks[tasks.length -1].id)+1 : 1,
            text,
            completed :false,
        }
        setTasks([...tasks, newTask])
        setTaskText("")
    }

    const toggleTask = (id: number) => {
     setTasks(tasks.map((task) => (
            task.id === id ? {...task, completed: !task.completed }: task)
 ))
            }
       
    const deleteTask = (id: number) => {
        setTasks(tasks.filter((task) => (
            task.id !== id)
 ))
    }   
  return (
    <TaskListWrapper>
        <h1> Todo list in TS</h1>
        <input type="text" value={taskText} onChange={((e)=>setTaskText(e.target.value))} />
        <button onClick={()=>addTask(taskText)}>add task</button>
        {tasks.map((task)=>(
            <OneTask
            key={task.id}
            task={task}
            toggleTask={toggleTask}
            deleteTask={deleteTask}
            />
        ))}

    </TaskListWrapper>
  )
}

export default TaskList