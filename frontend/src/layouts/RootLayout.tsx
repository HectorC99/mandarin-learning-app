import React from 'react'
import { Outlet, NavLink } from "react-router-dom";
import { Sidebar } from '../components/index'

function RootLayout() {
   return (
      <div className="root-layout row">
         <div className="col-lg-2">
            <Sidebar />
         </div>
         <div className="col-lg-10">
            <Outlet />
         </div>
      </div>
   )
}

export default RootLayout