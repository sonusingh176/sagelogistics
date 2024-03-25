import React from 'react'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'

import { Outlet } from 'react-router-dom'


const layout = () => {
  return (
        <>
            <Header/>
            <Sidebar/>
            <Outlet/>
            {/* <Footer/> */}
        </>
  )
}

export default layout