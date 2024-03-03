import React from 'react'
import Toolbar from '@/components/CenterColumn/Toolbar'
const TaskForm = () => {
  return (
    <Toolbar>
      <div className='text-white  min-h-[48px] flex flex-1 items-center w-full pl-[16px] glass rounded-lg border-none'>
        <svg class="fluentIcon ___12fm75w f1w7gpdv fez10in fg4l7m0" fill="currentColor" aria-hidden="true" width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 3a7 7 0 100 14 7 7 0 000-14zm-8 7a8 8 0 1116 0 8 8 0 01-16 0z" fill="currentColor"></path></svg>
        <input placeholder="Try typing 'Submit report by Monday 11am.'" className='outline-none bg-transparent ml-2 w-full min-h-[48px]' />
      </div>
    </Toolbar>
  )
}

export default TaskForm