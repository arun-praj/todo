import React from 'react'
import TaskToolBar from './TaskToolBar'
import TaskForm from './TaskForm'
const Page = () => {
  return (
    <div className='flex flex-1 flex-col justify-between'>
        <TaskToolBar/>
        <></>
        <TaskForm/>
    </div>
  )
}

export default Page