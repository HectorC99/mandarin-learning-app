import React from 'react'

function LessonIntro( { lessonSection, lessonProgress, lessonScore, donutImage }: any ) {
   return (
      <div className="lesson-card lesson-intro">
         <div className="row">
            <div className="col-lg-7">
               <div className="lic-main">
                  <div className="licm-title">
                     <h2>{lessonSection.title}</h2>
                     <p>Translate sentences from English to Pinyin</p>
                  </div>
                  <p>In this lesson you will learn a selection of Mandarin words and phrases, along with sentence structure. The first section is the easiest, followed by the second and third section, increasing in difficulty with each section.</p>
                  <br />
                  <p>Progress: {lessonProgress.question + 1}/{lessonSection.questions.length}</p>
                  <p>Score: {lessonScore.total}</p>
               </div>
            </div>
            <div className="col-lg-4">
               <img src={donutImage} alt="" className="lic-image" />
            </div>
         </div>
      </div>
   )
}

export default LessonIntro