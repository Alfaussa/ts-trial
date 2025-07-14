import React from 'react'
import {Task}  from '../types';
import styled from 'styled-components'

interface TaskProps {
    task: Task,
    toggleTask:(id:number) => void;
    deleteTask:(id:number) => void;
}

const TaskItem = styled.div<{completed:boolean}>`
text-decoration: ${({completed})=>(completed?"line-through":"none")}
`
    

const OneTask: React.FC <TaskProps> = ({task, toggleTask, deleteTask}) => {
  return (

   <TaskItem completed={task.completed}>
   
   <input type="checkbox" checked={task.completed} onChange={()=>toggleTask(task.id)}/>
   {task.text}
   <button onClick={()=>deleteTask(task.id)}>delete</button>

   </TaskItem>

  )
}

export default OneTask