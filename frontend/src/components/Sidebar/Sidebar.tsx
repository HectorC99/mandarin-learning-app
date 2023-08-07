import React from 'react'
import { Link, NavLink, Route, Routes } from 'react-router-dom'
import { SidebarNav, SidebarFooter } from '../../constants/index'
import './Sidebar.scss'

export default function Sidebar() {
   return (
      <>
         <nav className="sidebar-nav d-flex flex-column justify-content-between">
            <div className="sidebar-top d-flex flex-column">
               {SidebarNav.map((nav, index) => (
                  <NavLink to={nav.href} className={
                     ({ isActive }) => isActive ? 'sn-link active' : 'sn-link'
                  }>{nav.title}</NavLink>
               ))}
            </div>
            <div className="sidebar-footer d-flex flex-column">
               {SidebarFooter.map((nav, index) => (
                  <a href={nav.href} className="sn-link">{nav.title}</a>
               ))}
            </div>
         </nav>
      </>
   )
}