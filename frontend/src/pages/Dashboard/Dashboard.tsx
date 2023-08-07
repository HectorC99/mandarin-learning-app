import React from 'react'
import './Dashboard.scss'
import background from '../../assets/media/images/gradient-bg.jpg';
import { lessons } from '../../constants/lessons';
import LessonItem from '../../components/LessonItem/LessonItem';

function Dashboard() {

   let completedLessons = 15
   let totalLessons = 37

   return (
      <main className="dashboard main-card">
         <div className="main-card-top" style={{ backgroundImage: `url("${background}")` }}>
            <h1>Mandarin for intermediate and advanced learners</h1>
            <div className="mct-bar">
               <div className="mct-bar-top">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" viewBox="0 0 16 16">
                     <path d="M8.5 2.687c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z" />
                  </svg>
                  <p>
                     <span>{completedLessons}/{totalLessons}</span>
                     lessons
                  </p>
               </div>
               <div className="mct-bar-bottom">
                  <span></span>
                  <span style={{ width: `${(completedLessons / totalLessons) * 100}%` }}></span>
               </div>
            </div>
         </div>
         <div className="main-card-bottom">
            <div className="mcb-heading">
               <span>Topic 1</span>
               <h2>Understanding basic sentences</h2>
            </div>
            <div className="mcb-lessons">
               {lessons.map((lesson) => (
                  <LessonItem {...lesson} />
               ))}
            </div>
         </div>
      </main>
   )
}

export default Dashboard