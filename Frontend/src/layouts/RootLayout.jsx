import React from 'react'
import FrontPage from '../pages/FrontPage'
import { Outlet } from 'react-router-dom'

const rootLayout = () => {
  // darkmode
  return (
    <div className=""> 
      <div className="w-full min-h-screen dark:bg-zinc-900 ">
        <Outlet/>
      </div>
    </div>
  )
}

export default rootLayout
