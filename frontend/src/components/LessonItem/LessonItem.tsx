import React from 'react'
import { Link } from "react-router-dom";
import './LessonItem.scss'

function LessonItem(lesson: any) {
   return (
      <Link
         className="lesson-card"
         to={`/lesson/${lesson.id}`}
         state={lesson}>
         <div className="lc-thumbnail image-container cover">
            <img src="https://media.istockphoto.com/id/1182457162/vector/online-language-modern-courses-flat-vector-illustration.jpg?s=612x612&w=0&k=20&c=SvAM0pfM-EVyrqjYa2DIVubZjlu0gDcbHyEs9GuqiY0=" alt="" />
         </div>
         <div className="lc-main">
            <div>
               <h3 className="lc-title">{lesson.title}</h3>
               <p className="lc-description">{lesson.description}</p>
            </div>
            <div className="lc-progress">
               <p>
                  <span>{0}/{0}</span>
                  lessons
               </p>
               <div className="progress-bar">
                  <span></span>
                  <span style={{ width: `${(0 / 10) * 100}%` }}></span>
               </div>
            </div>
         </div>
      </Link>
   )
}

export default LessonItem