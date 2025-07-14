import React, { useState } from 'react';
import styled from 'styled-components';
import { Task } from '../types';
import { nanoid } from 'nanoid';

const TaskListWrapper

const TaskList: React.FC = () => {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [taskText, setTaskText] = useState<string>("")

    const addTask = (text:string) => {
        const newTask:Task = {
            id: tasks.length ? tasks[tasks.length -1].id : 1,
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
    <div></div>
  )
}

export default TaskList