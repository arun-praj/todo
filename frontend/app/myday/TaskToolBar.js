import React from 'react'
import Toolbar from "@/components/CenterColumn/Toolbar"
const TaskToolBar = () => {
    return (

            <Toolbar className='flex flex-1'>
                <div>
                    <h1 className=' text-[2.6rem] font-semibold'>My Day</h1>
                    <h2 className=' font-light'>Saturday. February 24</h2>
                </div>
            </Toolbar>
    )
}

export default TaskToolBar